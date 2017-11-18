var winState = {
  create: function() {
    game.add.image(0, 0, 'sky');
    var winLabel = game.add.text(200, 60, 'YOU WIN!', {
      font: '100px Arial',
      fill: '#00FF00'
    });
    winLabel.fontWeight = 'bold';
    winLabel.stroke = '#fff';
    winLabel.strokeThickness = 6;

    level += 1;
    var startLabel = game.add.text(300, 400,
      'Press the "S" key to start level ' + level, {
        font: '25px Arial',
        fill: '#ffffff'
      });

    var startKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    startKey.onDown.addOnce(this.restart, this);
  },

  restart: function() {
    lives = 3;
    game.state.start('play');
  },
}
