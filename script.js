$(document).ready(function(){
  $(".Designicon").click(function(){
      $("#designDetails").toggle();
      $(".Designicon").hide();
  })
  $("#designDetails").click(function(){
      $(".Designicon").toggle();
      $("#designDetails").hide();
  })
  $(".Developmenticon").click(function(){
      $("#developmentDetails").toggle();
      $(".Developmenticon").hide();
  })
  $("#developmentDetails").click(function(){
      $(".Developmenticon").toggle();
      $("#developmentDetails").hide();
  })
  $(".Managementicon").click(function(){
      $("#managementDetails").toggle();
      $(".Managementicon").hide();
  })
  $("#managementDetails").click(function(){
      $(".Managementicon").toggle();
      $("#managementDetails").hide();
  })
  $("#work1").hover(function(){
      $("#workco1").show();
  }, function(){
      $("#workco1").hide();
  })
  $("#work2").hover(function(){
      $("#workco2").show();
  }, function(){
      $("#workco2").hide();
  })
  $("#work3").hover(function(){
      $("#workco3").show();
  }, function(){
      $("#workco3").hide();
  })
  $("#work4").hover(function(){
      $("#workco4").show();
  }, function(){
      $("#workco4").hide();
  })
  $("#work5").hover(function(){
      $("#workco5").show();
  }, function(){
      $("#workco5").hide();
  })
  $("#work6").hover(function(){
      $("#workco6").show();
  }, function(){
      $("#workco6").hide();
  })
  $("#work7").hover(function(){
      $("#workco7").show();
  }, function(){
      $("#workco7").hide();
  })
  $("#work8").hover(function(){
      $("#workco8").show();
  }, function(){
      $("#workco8").hide();
  })
      
});

var myFunction= function(){
  var username= document.getElementById("name");
  var email=document.getElementById("email");
  var message=document.getElementById("message");

  if(username.value==="" || username.value===null) {
      return false;
  } else if (email.value==="" || email.value===null){
      return false;
  } else if (message.value==="" || message.value===null){
      return false;
  } else {
      alert(" Thank you "+ username.value +"for reaching out. Message received.");
  };

};