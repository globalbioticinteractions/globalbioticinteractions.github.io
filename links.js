function createLinkRef(element) {
    var link = element.url ? ' <a href="' + element.url + '" title="' + element.citation + '">ref</a>' : '';
    link = element.doi ? ' <a href="' + element.doi.replace(/^doi:/, 'https://dx.doi.org/') + '" title="' + element.citation + '">doi</a>' : link;
    return link;
}

function appendLinkElem(parentElem, study) {
    if (study.url) {
        var linkElem = document.createElement('a');
        linkElem.setAttribute('href', study.url);
        linkElem.setAttribute('title', study.citation);
        linkElem.textContent = 'link';
        parentElem.appendChild(linkElem);
    }
}

function showRefTitle(study) {
    return 'show interactions related to: ' + study.citation;
}

function accordingTo(study) {
    // chop off http(s) from prefix of citation to avoid being used as a url lookup
    var accordingTo = study.url;
    if (accordingTo === undefined && study.citation) {
      accordingTo = study.citation.replace(/^\W*http([s])*:\/\//, '');
    }
    return encodeURIComponent(accordingTo);
}

function createShowRef(study) {
    return ' <a href="/#interactionType=interactsWith&accordingTo=' + accordingTo(study) + '" title="' + showRefTitle(study) + '">show</a>';
}

function appendShowElem(parentElem, study) {
    var elem = document.createElement('a');
    elem.setAttribute('href', '/#interactionType=interactsWith&accordingTo=' + accordingTo(study));
    elem.setAttribute('title', showRefTitle(study));
    elem.setAttribute('target', '_blank');
    elem.textContent = 'show';
    parentElem.appendChild(elem);
}
