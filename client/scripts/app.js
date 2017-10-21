$( document ).ready(function() {

  window.app = {};
  app.savedMessages = [];
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
      url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      success: function (results) {
        app.savedMessages = results['results'];
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
  app.renderRoom = function (roomName) {
    $(`<h2>${roomName}</h2>`).appendTo('#roomSelect');
    
  };

  app.handleUsernameClick = function() {
    
  };

  app.handleSubmit = function() {
  
  };
  

});
