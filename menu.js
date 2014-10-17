var buildMenu = function() {
  var menu = document.getElementById('menu');
  if (menu == null) {
    menu = document.createElement('ul');
    menu.setAttribute('class', 'menu');
    menu.setAttribute('id', 'menu');
    document.body.insertBefore(menu, document.body.firstChild);
  }

  var appendMenuItem = function(text, url) {
    var listItem = document.createElement('li');
    var menuItem = document.createElement('a');
    menuItem.setAttribute('href', url);
    menuItem.innerHTML = text;
    listItem.appendChild(menuItem);
    menu.appendChild(listItem);
    return menu;
  }
    
  appendMenuItem('Global Biotic Interactions', '/index.html');
  appendMenuItem('About', '/about.html');
  appendMenuItem('API', 'https://github.com/jhpoelen/eol-globi-data/wiki/api');
  appendMenuItem('Data', 'https://github.com/jhpoelen/eol-globi-data/wiki#accessing-species-interaction-data');
  appendMenuItem('Blog', 'http://globalbioticinteractions.wordpress.com');
  appendMenuItem('Wiki', 'http://github.com/jhpoelen/eol-globi-data/wiki');
  appendMenuItem('Feedback', '/feedback.html');
  appendMenuItem('What do ... eat?', '/index.html');
  appendMenuItem('Browse', '/browse/index.html');
  appendMenuItem('References', '/references.html');
}
