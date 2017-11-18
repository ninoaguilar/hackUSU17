var playState = {

  create: function() {
  game.state.start('create');
  },

  update: function() {
    game.state.start('updatePlayer');
    //game.state.start('updateEnemies')
  },

  Win: function() {
    game.state.start('win');
  }
}
