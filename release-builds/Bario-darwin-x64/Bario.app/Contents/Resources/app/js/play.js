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
}
