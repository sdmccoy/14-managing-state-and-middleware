'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // ANSWER: The proxyGitHub on server.js lets us access the repo data. This function requests the repos from the api and sets the data to the repos.all empty array.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
