'use strict';

(function(module) {
  const articleController = {};
  //DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  articleController.initIndexPage = (callback) => {
    $('.tab-content').hide();
    Article.fetchAll(callback);
    $('#articles').show();
  }


  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:


  module.articleController = articleController;
})(window);
