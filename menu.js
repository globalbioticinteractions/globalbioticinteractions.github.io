
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
    appendMenuItem('api', 'https://github.com/jhpoelen/eol-globi-data/wiki/rest');
    appendMenuItem('blog', 'http://globalbioticinteractions.wordpress.com');
   	appendMenuItem('wiki', 'http://github.com/jhpoelen/eol-globi-data/wiki');
    appendMenuItem('feedback', '/feedback.html');
    appendMenuItem('what do ... eat', '/index.html');
    appendMenuItem('interaction browser', '/browse/index.html');
    appendMenuItem('references', '/references.html');
	appendSeparator();
	var forkMe = document.createElement('a');
	forkMe.setAttribute('href', 'https://github.com/eol-globi/eol-globi.github.io/');
	forkMe.innerHTML = '<img style="z-index: 2; position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub">';
	document.body.appendChild(forkMe);
}
