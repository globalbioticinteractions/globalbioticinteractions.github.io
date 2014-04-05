
var buildMenu = function() {
	var menu = document.getElementById('menu');

	var appendSeparator = function() {
		menu.appendChild(document.createTextNode(' | '));
	}

	var appendMenuItem = function(text, url) {
    	var menuItem = document.createElement('a');
       	menuItem.setAttribute('href', url);
        menuItem.innerHTML = text;
		appendSeparator();
        menu.appendChild(menuItem);
        return menu;
    }
    appendMenuItem('about', '/about.html');
    appendMenuItem('blog', 'http://globalbioticinteractions.wordpress.com');
   	appendMenuItem('wiki', 'http://github.com/jhpoelen/eol-globi-data/wiki');
    appendMenuItem('feedback', '/feedback.html');
    appendMenuItem('what do ... eat', '/index.html');
    appendMenuItem('interaction browser', '/browse/index.html');
    appendMenuItem('references', '/references.html');
	appendSeparator();
}
