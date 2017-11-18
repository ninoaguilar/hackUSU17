var menuState = {
  create: function() {
    //Name of the game
    var nameLabel = game.add.text(80, 80, 'My First game', {
      font: '50px Arial',
      fill: '#fff'
    });

    //Instructions to start
    var startLabel = game.add.text(80, game.world.height - 80,
      'Press the "S" key to start', {
        font: '25px Arial',
        fill: '#fff'
      });

    //Set 'W' to be the start key
    var startKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    //Call the start function when the player presses W
    startKey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  },
};
