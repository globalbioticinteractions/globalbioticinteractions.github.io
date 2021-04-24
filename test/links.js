var links = require('../js/links.js');
var assert = require('assert');
var test = require('tape');
var extend = require('extend');

test('extract reponame', function (t) {
    t.plan(1);
    var repoName = links.getRepoNameOrDefault('https://github.com/some/repo/archive/a213.zip');
    t.equal('some/repo', repoName);
});


test('extract archiveURI zenodo', function (t) {
    t.plan(1);
    var repoName = links.getArchiveURIBase('https://zenodo.org/record/3742346/files/BDMYRepository/Echino-Interactions-V3.zip');
    t.equal('https://zenodo.org/record/3742346', repoName);
});

test('extract archiveURI github', function (t) {
    t.plan(1);
    var repoName = links.getArchiveURIBase('https://github.com/AgentschapPlantentuinMeise/ashForestInteractions/archive/0a73fdc7a424a52ec8398cd153e9fb8b5f465eb2.zip');
    t.equal('https://github.com/AgentschapPlantentuinMeise/ashForestInteractions', repoName);
});


test('extract archiveURI other', function (t) {
    t.plan(1);
    var repoName = links.getArchiveURIBase('https://example.org/some/site');
    t.equal('https://example.org/some/site', repoName);
});
