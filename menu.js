
var buildMenu = function() {
	var menu = document.getElementById('menu');
	if (menu == null) {
		menu = document.createElement('ul');
		menu.setAttribute('class', 'menu');
		menu.setAttribute('id', 'menu');
		document.body.insertBefore(menu, document.body.firstChild);
    }

	var appendSeparator = function() {
		//menu.appendChild(document.createTextNode(' | '));
	}

	var appendMenuItem = function(text, url) {
		var listItem = document.createElement('li');
    	var menuItem = document.createElement('a');
       	menuItem.setAttribute('href', url);
        menuItem.innerHTML = text;
		appendSeparator();
		listItem.appendChild(menuItem);
        menu.appendChild(listItem);
        return menu;
    }
    appendMenuItem('Global Biotic Interactions', '/index.html');
    appendMenuItem('About', '/about.html');
    appendMenuItem('API', 'https://github.com/jhpoelen/eol-globi-data/wiki/api');
    appendMenuItem('Blog', 'http://globalbioticinteractions.wordpress.com');
   	appendMenuItem('Wiki', 'http://github.com/jhpoelen/eol-globi-data/wiki');
    appendMenuItem('Feedback', '/feedback.html');
    appendMenuItem('What do ... eat?', '/index.html');
    appendMenuItem('Interaction Browser', '/browse/index.html');
    appendMenuItem('References', '/references.html');
	appendSeparator();
	var forkMe = document.createElement('a');
	forkMe.setAttribute('href', 'https://github.com/eol-globi/eol-globi.github.io/');
	forkMe.innerHTML = '<img style="z-index: 2; position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub">';
	document.body.appendChild(forkMe);
}
