$( document ).ready(function() {

  window.app = {};
  
  app.init = function () {};
  
  app.send = function (data) {
    $.ajax({
      type: 'POST',
      url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
      data: data
    });
  };
  
  app.fetch = function () {
    $.ajax({
      type: 'GET',
      url: undefined,
      success: function (resp) {
        console.log(resp);
      },
      error: function () {
        console.log('error');
      }
    });
  };

  app.clearMessages = function () {
    $('#chats').empty();
  };

  app.renderMessage = function ({text}) {
    $('#chats').append(`<p>${text}</p>`);
  }; 


});