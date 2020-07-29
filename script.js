$(document).ready(function() {
    $("img#image1").click(function() {
      $(".design-showing1").toggle();
      $(".design-hidden1").toggle();
    });
    $("p#one").click(function() {
      $(".design-showing1").toggle();
      $(".design-hidden1").toggle();
    });
    $("img#image2").click(function() {
      $(".design-showing2").toggle();
      $(".design-hidden2").toggle();
    });
    $("p#two").click(function() {
      $(".design-showing2").toggle();
      $(".design-hidden2").toggle();
    });
    $("img#image3").click(function() {
      $(".design-showing3").toggle();
      $(".design-hidden3").toggle();
    });
    $("p#three").click(function() {
        $(".design-showing3").toggle();
        $(".design-hidden3").toggle();
    });
  });
 
     // Hover effect on portfolio section
     $("#portfolio img").hover(
      function() {
        $(this).fadeTo(300, 0.6);
      },
      function() {
        $(this).fadeTo(300, 1);
      }
    )
  
      //submit form
  function submitFormData() {
    var name = $("input[type=text]").val();
    var email = $("input[type=email]").val();
    var message = $("textarea").val();
  
    if (!email || !name) {
      alert("Kindly fill the form below");
    } else {
      alert("Hello " + name + ". \nWe have received your message. Thank you for reaching out to us.");
    }
  }
