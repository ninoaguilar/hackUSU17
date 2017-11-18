var menuState = {
  create: function() {
    //Name of the game
    game.stage.backgroundColor = "#77b5fe";

    var nameLabel = game.add.text(150, 80, 'Bario The Game', {
      font: '90px Arial',
      fill: '#fff',
    });
    nameLabel.fontWeight = 'bold';
    nameLabel.stroke = '#4a9600';
    nameLabel.strokeThickness = 6;

    //Instructions to start
    var startLabel = game.add.text(350, 250,
      'INSTRUCTIONS: \n \t Arrow Keys: Move \n \t"K": Lift Blocks', {
        font: '25px Arial',
        fill: '#fff'
      });

    //Instructions to start
    var startLabel = game.add.text(350, 500,
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
