var winState = {
  create: function() {
    var winLabel = game.add.text(80, 60, 'YOU WIN!',
                                {font: '50px Arial', fill: '#00FF00'});

    var startLabel = game.add.text(80,game.world.height-80,
                                   'Press the "S" key to restart',
                                   {font: '25px Arial', fill: '#ffffff'});

    var startKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    startKey.onDown.addOnce(this.restart, this);
  },

  restart: function() {
    game.state.start('menu');
  },
}
