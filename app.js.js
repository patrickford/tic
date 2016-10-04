$(document).ready(function() {

  $('.box').click(function() {
    console.log(this)
    $(this).text("X");
  })

});