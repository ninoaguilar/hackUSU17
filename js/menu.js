var menuState = {
  create: function() {
    //Name of the game
    game.add.image(0, 0, 'sky');

    var nameLabel = game.add.text(150, 80, 'Bario The Game', {
      font: '90px Arial',
      fill: '#fff',
    });
    nameLabel.fontWeight = 'bold';
    nameLabel.stroke = '#000';
    nameLabel.strokeThickness = 10;

    //Instructions to start
    var startLabel = game.add.text(350, 250,
      'INSTRUCTIONS: \n \t Arrow Keys: Move \n \t"K": Interact with Trampoline \n\t "F": Fire Shots', {
        font: '25px Arial',
        fill: '#fff'
      });

    startLabel.stroke = '#000';
    startLabel.strokeThickness = 5;

    //Instructions to start
    var startLabel = game.add.text(350, 500,
      'Press the "S" key to start', {
        font: '25px Arial',
        fill: '#fff'
      });

    startLabel.stroke = '#095d0d';
    startLabel.strokeThickness = 6;

    //Set 'W' to be the start key
    var startKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    //Call the start function when the player presses W
    startKey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('play');
  },
};
