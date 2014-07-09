(function (root) {
  
  var TTTUI = root.TTTUI = function(game, $element) {
    $element.on('click', 'li', function(event) {
      var $li = $(this)
      
      var row = Math.floor($li.index() / 3);
      var col = $li.index() % 3;
      
      game.move([row, col]);
      $li.addClass(game.board[row][col]);
      
      if (game.winner()) {
        $element.off('click');
        $winMessage = $('<h1>');
        $winMessage.addClass('win-message');
        $winMessage.text(game.winner() + ' won!');
        $element.after($winMessage);
      }
    });
  };
  

  
})(this)