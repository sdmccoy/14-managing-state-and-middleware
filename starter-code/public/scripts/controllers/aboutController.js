'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // ANSWER: When a user clicks on the about tab the /about gets added to the url. The route recognizes this and hides the about id content. It will then invoke the request repos which makes the repo data available and intializes on the page by invoking repoView.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
