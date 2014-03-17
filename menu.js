
var buildMenu = function() {
	var menu = document.getElementById('menu');

	var appendMenuItem = function(text, url) {
    	var menuItem = document.createElement('a');
       	menuItem.setAttribute('href', url);
        menuItem.innerHTML = text;
        menu.appendChild(document.createTextNode(' | '));
        menu.appendChild(menuItem);
        return menu;
    }
    appendMenuItem('blog', 'http://globalbioticinteractions.wordpress.com');
   	appendMenuItem('wiki', 'http://github.com/jhpoelen/eol-globi-data/wiki');
    appendMenuItem('feedback', 'http://github.com/jhpoelen/eol-globi-data/issues/new');
    appendMenuItem('what do ... eat', '/index.html');
    appendMenuItem('where do ... eat', '/spatialsearch/index.html');
    appendMenuItem('references', '/references.html');
}
