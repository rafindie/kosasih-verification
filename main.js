window.onload = function() {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      userImage: "2.png",
  robotImage:"3.png",
      preventAutoFocus: true,
      submitCallback: function() {
        var formDataSerialized = conversationalForm.getFormData(true);
        var mailchimpUrl =
          "https://us20.list-manage.com/survey/post-json?u=99bd9afcabad96c3e9ed28d68&id=2edb293052";
        $.ajax({
          url: mailchimpUrl,
          type: "GET",
          data: formDataSerialized,
          dataType: "jsonp",
          jsonp: "c", // trigger MailChimp to return a JSONP response
          success: function(data) {
            window.ConversationalForm.addRobotChatResponse("Thanks for verifying. A Mod will give you full access permissions once they got this result. Have a nice day.");
          }
        });
  
        
      }
    });
  };