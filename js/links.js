
let githubRegEx = /^(https:\/\/github.com\/)(.*)(\/archive\/)([a-f0-9]+)([.]zip)$/;
let zenodoRegEx = /^(https:\/\/zenodo.org\/record\/)([0-9]+)(.*)$/;

let getRepoNameOrDefault = function(archiveURI) {
  if (githubRegEx.test(archiveURI)) {
    return archiveURI.replace(githubRegEx, function(match, first, repo) { return repo; });
  } else { 
    return 'globalbioticinteractions/globalbioticinteractions';
  }
};

let prefixAndPath = function(match, prefix, path) { return prefix + path; };

let getArchiveURIBase = function(archiveURI) {
  return archiveURI
  .replace(githubRegEx, prefixAndPath)
  .replace(zenodoRegEx, prefixAndPath);
}

let decorateReviewLink = function(aElem, namespace) {
  var reviewUrlPrefix = 'https://depot.globalbioticinteractions.org/reviews/' +  namespace;
  var reviewUrl = reviewUrlPrefix + '/README.txt';
  aElem.setAttribute('href', reviewUrl);
  aElem.setAttribute('title', 'data review');
  var img = aElem.appendChild(document.createElement('img'));
  img.setAttribute('src', reviewUrlPrefix + '/review.svg');
}


function appendLinkElem(parentElem, study) {
    if (study.url && study.url.match(/^http/)) {
        var linkElem = document.createElement('a');
        linkElem.setAttribute('href', study.url);
        linkElem.setAttribute('title', 'show information for: [' + study.citation + ']');
        linkElem.setAttribute('target', '_blank');
        linkElem.textContent = '📄';
        parentElem.appendChild(linkElem);
    }
}

function appendDatasetLinkElem(parentElem, study) {
    if (study.archiveURI && study.archiveURI.match(/^http/)) {
        let linkElem = document.createElement('a');
        linkElem.setAttribute('href', getArchiveURIBase(study.archiveURI));
        linkElem.setAttribute('title', 'index configuration for: [' + study.source + ']');
        linkElem.setAttribute('target', '_blank');
        linkElem.textContent = '⚙️';
        parentElem.appendChild(linkElem);
    }
}

function showRefTitle(study) {
    return 'show interactions related to: [' + study.citation + ']';
}

function showDatasetCitation(study) {
    return 'show interactions related to: [' + study.source + ']';
}

function accordingTo(study) {
    // chop off http(s) from prefix of citation to avoid being used as a url lookup
    var accordingTo = study.url || null;
    if (accordingTo == null && study.citation) {
        accordingTo = study.citation.replace(/^\W*http([s])*:\/\//, '');
    }
    return encodeURIComponent(accordingTo);
}

function accordingToDataset(study) {
    return encodeURIComponent('globi:' + study.namespace);
}

function appendShowReferenceElem(parentElem, study, baseUrl) {
    var elem = document.createElement('a');
    elem.setAttribute('href', (baseUrl || '/') + '?interactionType=interactsWith&accordingTo=' + accordingTo(study));
    elem.setAttribute('title', showRefTitle(study));
    elem.setAttribute('target', '_blank');
    elem.textContent = '🔍';
    parentElem.appendChild(elem);
}

function appendShowDatasetElem(parentElem, study, baseUrl) {
    var elem = document.createElement('a');
    elem.setAttribute('href', (baseUrl || '/') + '?interactionType=interactsWith&accordingTo=' + accordingToDataset(study));
    elem.setAttribute('title', showDatasetCitation(study));
    elem.setAttribute('target', '_blank');
    elem.textContent = '🔍';
    parentElem.appendChild(elem);
}


function appendCitationTo(interactionRecord, citationElem, baseUrl) {
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
        namespace: interactionRecord.study_source_id,
        lastSeenAt: interactionRecord.study_source_last_seen_at,
        archiveURI: interactionRecord.study_source_archive_uri};

    let appendSpanText = function(parentElem, text) {
      var span = document.createElement('span');
      span.textContent = text;
      parentElem.appendChild(span);
    };

    let appendSpan = function(parentElem) { appendSpanText(parentElem, ' '); }

    appendLinkElem(citationElem, study);
    appendSpan(citationElem);
    appendShowReferenceElem(citationElem, study, baseUrl);
    appendSpan(citationElem);

    var textElem = document.createElement('b');
    textElem.textContent = study.citation + ' ';
    citationElem.appendChild(textElem);

    appendSpanText(citationElem, ' Provider: ');
    appendDatasetLinkElem(citationElem, study, baseUrl);
    appendSpan(citationElem);
    appendShowDatasetElem(citationElem, study);
    appendSpan(citationElem);
    
    var sourceElem = document.createElement('span');
    sourceElem.textContent = ' ' + study.source + ' Accessed via <' + study.archiveURI + '> at ' + new Date(study.lastSeenAt).toISOString() + '. ';
    citationElem.appendChild(sourceElem);

    let reviewElem = document.createElement('span');
    let reviewLink = reviewElem.appendChild(document.createElement('a'));
    decorateReviewLink(reviewLink, study.namespace);
    citationElem.appendChild(reviewElem);

    appendSpan(citationElem);

    let feedbackElem = document.createElement('span');
    let githubRepoName = getRepoNameOrDefault(study.archiveURI);
    
    
    let newIssueLink = feedbackElem.appendChild(document.createElement('a'));
    newIssueLink.setAttribute('href', 'https://github.com/' + githubRepoName + '/issues/new?' + queryString.stringify({ title: 'your indexed records for ' + study.citation, body: 'Hi!\n\nThanks for helping to make existing biotic interaction data easier to find and access!\n\nI was just looking at your GloBI indexed record at ' + document.location + ' and I was wondering about ... (please add your own text)' }));
    newIssueLink.setAttribute('title', 'start a discussion by opening an issue');
    newIssueLink.textContent = 'discuss...';
    citationElem.appendChild(feedbackElem);
}

function collectSearchParams($) {
    var sourceTaxonName = $('#taxonInputField').val();
    var targetTaxonName = $('#targetTaxonInputField').val();
    var interactionType = $('#interactionType').find(":selected").val();
    var studyQuery = $('#studySearchField').val();
    var searchHash = {};
    var search = { fields: ['study_title', 'study_citation', 'study_url', 'study_source_citation', 'study_source_archive_uri', 'study_source_last_seen_at', 'study_source_id'] };
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



if (typeof module !== 'undefined') {
  module.exports = { 
    getRepoNameOrDefault: getRepoNameOrDefault,
    getArchiveURIBase: getArchiveURIBase
  }; 
}
