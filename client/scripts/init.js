//// Initializatoin file that will begin fetching tweets


setInterval( function () {
  app.clearMessages();
  app.fetch();
  app.savedMessages.forEach(x => app.renderMessage(x));

}, 1000);