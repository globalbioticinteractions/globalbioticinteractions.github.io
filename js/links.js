function appendLinkElem(parentElem, study) {
    if (study.url && study.url.match(/^http/)) {
        var linkElem = document.createElement('a');
        linkElem.setAttribute('href', study.url);
        linkElem.setAttribute('title', study.citation);
        linkElem.setAttribute('target', '_blank');
        linkElem.textContent = 'link';
        parentElem.appendChild(linkElem);
    }
}

function showRefTitle(study) {
    return 'show interactions related to: ' + study.citation;
}

function accordingTo(study) {
    // chop off http(s) from prefix of citation to avoid being used as a url lookup
    var accordingTo = study.url || null;
    if (accordingTo == null && study.citation) {
        accordingTo = study.citation.replace(/^\W*http([s])*:\/\//, '');
    }
    return encodeURIComponent(accordingTo);
}

function appendShowElem(parentElem, study, baseUrl) {
    var elem = document.createElement('a');
    elem.setAttribute('href', (baseUrl || '/') + '?interactionType=interactsWith&accordingTo=' + accordingTo(study));
    elem.setAttribute('title', showRefTitle(study));
    elem.setAttribute('target', '_blank');
    elem.textContent = 'show';
    parentElem.appendChild(elem);
}

function appendCitationTo(interactionRecord, citationElem, baseUrl) {
    var textElem = document.createElement('b');
    var citation = interactionRecord.study_citation;
    if (citation === undefined || citation === null) {
        if (interactionRecord.study_url !== undefined && interactionRecord.study_url !== null) {
            citation = interactionRecord.study_url
        }
    }
    var study = {
        citation: citation,
        url: interactionRecord.study_url,
        source: interactionRecord.study_source_citation,
        lastSeenAt: interactionRecord.study_source_last_seen_at,
        archiveURI: interactionRecord.study_source_archive_uri};

    textElem.textContent = study.citation + ' ';
    citationElem.appendChild(textElem);
    appendLinkElem(citationElem, study);
    var span = document.createElement('span');
    span.textContent = ' ';
    citationElem.appendChild(span);
    appendShowElem(citationElem, study, baseUrl);

    var sourceElem = document.createElement('span');
    sourceElem.textContent = ' Provider: ' + study.source + ' Accessed via <' + study.archiveURI + '> on ' + new Date(study.lastSeenAt).toISOString() + '.';
    citationElem.appendChild(sourceElem);
}

function collectSearchParams($) {
    var sourceTaxonName = $('#taxonInputField').val();
    var targetTaxonName = $('#targetTaxonInputField').val();
    var interactionType = $('#interactionType').find(":selected").val();
    var studyQuery = $('#studySearchField').val();
    var searchHash = {};
    var search = { fields: ['study_title', 'study_citation', 'study_url', 'study_source_citation', 'study_source_archive_uri', 'study_source_last_seen_at'] };
    if (sourceTaxonName && sourceTaxonName.length > 0) {
        searchHash.sourceTaxon = sourceTaxonName;
        search.sourceTaxa = [sourceTaxonName];
    }
    if (targetTaxonName && targetTaxonName.length > 0) {
        searchHash.targetTaxon = targetTaxonName;
        search.targetTaxa = [targetTaxonName];
    }
    if (interactionType.length > 0) {
        searchHash.interactionType = interactionType;
        search.interactionType = interactionType;
    }
    if (studyQuery.length > 0) {
        searchHash.accordingTo = studyQuery;
        search.accordingTo = studyQuery;
    }
    return {searchHash: searchHash, search: search};
}

function saveSearch(search) {
    saveQuery(queryString.stringify(search.searchHash));
}

function saveQuery(query) {
    if (document.location.protocol !== 'file:') {
        window.history.pushState({ query: query }, "", "?" + query);
    }
}

function initInputFields() {
    var params = queryString.parse(document.location.search || document.location.hash);
    $('#interactionType option[value="' + params.interactionType + '"]').prop('selected', 'selected');
    $('#studySearchField').val(params.accordingTo);
    $('#taxonInputField').val(params.sourceTaxon);
    $('#targetTaxonInputField').val(params.targetTaxon);

    if (params.sourceTaxon || params.targetTaxon || params.accordingTo) {
        $('#taxonInputField').change();
    }
}

function labelForTaxon(taxon) {
    var englishName;
    if (taxon.commonNames) {
        englishName = taxon.commonNames['en'];
    }
    var suggestion = taxon.scientificName;
    if (englishName !== undefined) {
        suggestion = englishName + ' (' + suggestion + ')';
    }
    return suggestion;
}

function addPopState(func) {
    window.addEventListener('popstate', function (e) {
        if(e.state && e.state['query']) {
            func();
        }
    });
}

function addInputEvents($, globiData, searchForInteractions) {
    $(".suggest").autocomplete({
        minLength: 3,
        source: function (request, response) {
            globiData.findCloseTaxonMatches(request.term, function (closeMatches) {
                var suggestions = [];
                closeMatches.forEach(function (closeMatch, index) {
                    suggestions[index] = {
                        label: labelForTaxon(closeMatch),
                        value: closeMatch.scientificName
                    };
                });
                response(suggestions);
            });
        },
        select: function (event, ui) {
            searchForInteractions();
        }
    });

    var onEnter = function (e, ui) {
        if (e.keyCode == 13) {
            searchForInteractions();
        }
    };
    $("#taxonInputField").change(function () {
        searchForInteractions();
    });
    $("#taxonInputField").keyup(onEnter);

    $("#interactionType").change(function () {
        searchForInteractions();
    });
    $("#studySearchField").keyup(onEnter);

}





