$(function() {
   
    $("form[name='registration']").validate({
      
      rules: {
    
        firstname: "required",
        lastname: "required",
      },
    
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
      }
      
    });
  });