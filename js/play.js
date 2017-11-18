var playState = {

  create: function() {
    create();
  },
  update: function() {
    updatePlayer();
  },
  Win: function() {
    game.state.start('win');
  },
  Lose: function() {
    game.state.start('lose');
  }
}
