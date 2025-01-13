globalbioticinteractions.github.io
==================

This project contains live examples of how to use species interaction data from GloBI (see http://github.com/globalbioticinteractions/globalbioticinteractions) in a webpage.

Live examples are available at http://www.globalbioticinteractions.org .



This website is (partly) built using [npm](https://npmjs.org), [browserify](https://www.npmjs.com/package/browserify) and associated tools.

## installing

```
npm install -g watcherify
npm install -g browserify
npm install -g uglify-js
```

## building

```
npm install
npm run build
```

## testing

```
npm test
npm run test-browser
```

## developing
To continuously build the browserified (./static/globi-web-min.js) run:
```
npm run watch
```
