var loseState = {
  create: function() {
    game.add.image(0, 0, 'sky');
    var winLabel = game.add.text(95, 100, 'SORRY, YOU LOSE', {
      font: '80px Arial',
      fill: '#000',
    });
    winLabel.fontWeight = 'bold';

    var startLabel = game.add.text(210, 300,
      'Press the "S" key to try again', {
        font: '35px Arial',
        fill: '#ffffff',
      });

    startLabel.stroke = '#095d0d';
    startLabel.strokeThickness = 6;

    var startKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    startKey.onDown.addOnce(this.restart, this);
  },

  restart: function() {
    bullets = 10;
    lives = 3;
    game.state.start('menu');
  },
}
