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