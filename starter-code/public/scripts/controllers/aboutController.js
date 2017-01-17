'use strict';

(function(module) {
  const aboutController = {};

  aboutController.initAboutPage = () => {
    $('.tab-content').hide();
    $('#about').show();
  }

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:

  module.aboutController = aboutController;
})(window);
