function createLinkRef(element) {
    var link = (typeof element.url === 'undefined') ? '' : ' <a href="' + element.url + '" title="' + element.citation + '">ref</a>';
    link = (typeof element.doi === 'undefined') ? link : ' <a href="' + element.doi.replace(/^doi:/, 'https://dx.doi.org/') + '" title="' + element.citation + '">doi</a>';
    return link;
}

function appendLinkElem(parentElem, study) {
    if (study.url !== undefined && study.url != null) {
        var linkElem = document.createElement('a');
        linkElem.setAttribute('href', study.url);
        linkElem.textContent = 'link';
        parentElem.appendChild(linkElem);
    }
}

function createShowRef(element) {
    var accordingTo = (element.url === undefined) ? element.citation : encodeURIComponent(element.url);
    return ' <a href="/#interactionType=interactsWith&accordingTo=' + accordingTo + '">show</a>';
}

function appendShowElem(parentElem, study) {
    var accordingTo = (study.url === undefined) ? study.citation : encodeURIComponent(study.url);
    var elem = document.createElement('a');
    elem.setAttribute('href', '/#interactionType=interactsWith&accordingTo=' + accordingTo);
    elem.setAttribute('target', '_blank' + accordingTo);
    elem.textContent = 'show';
    parentElem.appendChild(elem);
}