$(document).ready(function() {

  var Board = function() {
    this.board = new Array(3);
    this.players = ["X", "O"];
    this.turn = 0;
    this.moves = 0;
    this.plays = [];
    this.winner = "";
  };

  Board.prototype.buildBoard = function() { 
    var html = "";      
    for (var row=0; row<3; row++) {
      this.board[row] = new Array(3);
      html += "<div class='row-" + row + " row'>";
      for (var col=0; col<3; col++) {
        html += "<div class='col-" + col + " box'>";
        html += "</div>"
      }
      html += "</div>"
    }
    $('.board').append(html);
  };

  Board.prototype.makeMove = function(row, col) {
    var move = { player: this.turn, row: row, col: col };
    this.plays.push(move);
    this.board[row][col] = this.players[this.turn];    
    this.turn = ++this.moves % 2;   
  };

  Board.prototype.evaluateBoard = function() {
    for (var i=0; i<3; i++) {
      // Check Rows
      if (this.board[i][0] === this.board[i][1] && 
          this.board[i][0] === this.board[i][2] &&
          this.board[i][0] !== undefined) {
        this.winner = this.board[i][0];
        console.log("Winner: " + this.winner + " on row: " + i);
      }
      // Check Columns
      if (this.board[0][i] === this.board[1][i] && 
          this.board[0][i] === this.board[2][i] &&
          this.board[0][i] !== undefined) {
        this.winner = this.board[0][i];
        console.log("Winner: " + this.winner + " on column: " + i);
      }
      // Check Diagonals

    }

  }

  $(document).on('click', '.box', function() {
    var row = parseInt(($(this).parent().attr('class')).match(/[0-2]/gi)[0]);
    var col = parseInt(($(this).attr('class')).match(/[0-2]/gi)[0]);
    if (game.board[row][col] === undefined && !game.winner) {
      $(this).html("<span class='marker'>" + game.players[game.turn] + "</span>");    
      game.makeMove(row, col);
      game.evaluateBoard();
    }
  });

  var game = new Board();
  game.buildBoard();

});

