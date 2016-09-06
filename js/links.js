function appendLinkElem(parentElem, study) {
    if (study.url) {
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
    var study = {
        citation: interactionRecord.study_citation,
        url: interactionRecord.study_url,
        source: interactionRecord.study_source_citation};

    textElem.textContent = study.citation + ' ';
    citationElem.appendChild(textElem);
    appendLinkElem(citationElem, study);
    var span = document.createElement('span');
    span.textContent = ' ';
    citationElem.appendChild(span);
    appendShowElem(citationElem, study, baseUrl);

    var sourceElem = document.createElement('span');
    sourceElem.textContent = ' Provider: ' + study.source;
    citationElem.appendChild(sourceElem);
}

function collectSearchParams($) {
    var sourceTaxonName = $('#taxonInputField').val();
    var targetTaxonName = $('#targetTaxonInputField').val();
    var interactionType = $('#interactionType').find(":selected").val();
    var studyQuery = $('#studySearchField').val();
    var searchHash = {};
    var search = { fields: ['study_title', 'study_citation', 'study_url', 'study_source_citation'] };
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
        window.history.pushState({}, "", "?" + query);
    }
}


