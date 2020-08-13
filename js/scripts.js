$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const question1Input =($("#question1").val());
    const question2Input =($("#question2").val());
    if (question1Input === "person" && question2Input === "purple") {
      $("#moderate").show();
    } else if (question1Input === "biden" && question2Input === "blue") {
      $("#liberal").show();
    } else if (question1Input === "trump" && question2Input === "red") {
      $("#conservative").show();
    } else {
      $("#moderate").show();
    }
  });
});