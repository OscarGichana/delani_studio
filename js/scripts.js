$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#hide1").slideToggle(1200);
    $("#show1").slideToggle(1500);
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#hide2").slideToggle(1200);
    $("#show2").slideToggle(1500);
  });
});

  $(document).ready(function() {
  $(".clickable3").click(function() {
    $("#hide3").slideToggle(1200);
    $("#show3").slideToggle(1500);
  });
});


function myFunction() {
  document.getElementById("frm1").submit();
   alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
  $("output").text(alert)
  };