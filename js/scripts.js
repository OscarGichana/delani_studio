$(document).ready(function () {
  $(".design-image").click(function() {
    $(".design-content").slideToggle();
  })
})

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hide2").toggle();
    $("#show2").toggle();
  });
});

  $(document).ready(function() {
  $(".clickable").click(function() {
    $("#hide3").toggle();
    $("#show3").toggle();
  });
});


function myFunction() {
  document.getElementById("frm1").submit();
   alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
  $("output").text(alert)
  };