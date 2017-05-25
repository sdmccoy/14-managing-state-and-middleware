'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // DONE COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //ANSWER: This will empty the contents of the about elements by invoking the ui function. Then it will append all of the repos to the handlebars template. It will only show the repos that contain a name which will be all because github requires a title/name for all repos created. However you can easily change this filter.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
