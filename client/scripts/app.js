$( document ).ready(function() {

  window.app = {};
  
  app.init = function () {};
  
  app.send = function (data) {
    $.ajax({
      type: 'POST',
      url: '/chatterbox/classes/messages',
      data: data
    });
  };
});