$(document).ready(function() {

  $('.box').click(function() {
    $(this).html("<span class='marker'>X</span>");
    var col = ($(this).attr('class')).match(/[0-2]/gi);
    var row = ($(this).parent().attr('class')).match(/[0-2]/gi);
    board[row][col] = "X";

    console.log(board)
  })

  var board = Array(3);
  board[0] = Array(3);
  board[1] = Array(3);
  board[2] = Array(3);
 
});

