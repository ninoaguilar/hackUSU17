function create() {
  // Make our game world bigger than the canvas
  game.world.setBounds(0, 0, 2000, 600)
  //  A simple background for our game
  game.stage.backgroundColor = "#77b5fe";

  //  The platforms group contains the ground and the random ledges we can jump on
  platforms = game.add.group();
  enemies = game.add.group();
  blocks = game.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;
  enemies.enableBody = true;
  blocks.enableBody = true;

  // Here we create the ground.
  var ground = platforms.create(0, game.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(99, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create random ledges
  for (var i = 0; i < 7; i++) {
    var ledge = platforms.create(randomIntBetween(0, game.world.width),
      randomIntBetween(50, game.world.height - 80), 'ground');
    ledge.body.immovable = true;
  }

  for (var i = 0; i < 2; i++) {
    var block = blocks.create(randomIntBetween(50, game.world.width - 500),
      game.world.height - 150, 'block', 12);
    block.body.bounce.y = 0.2;
    block.body.gravity.y = 400;
    block.body.collideWorldBounds = true;
    block.body.drag.x = 100;
    block.body.allowRotation = true;
  }

  // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'luigi', 12);
  player.scale.setTo(2, 2);

  prize = game.add.sprite(randomIntBetween(game.world.width - 1000, game.world.width - 100),
    randomIntBetween(game.world.height - 400, 0), 'diamond', 12);

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0;
  player.body.gravity.y = 400;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [6, 7, 8], 5, true);
  player.animations.add('right', [9, 10, 11], 5, true);

  //  Finally some stars to collect
  stars = game.add.group();

  //  We will enable physics for any star that is created in this group
  stars.enableBody = true;
  enemies.enableBody = true;
  prize.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (var i = 0; i < 14; i++) {
    //  Create a star inside of the 'stars' group
    var star = stars.create(randomIntBetween(0, game.world.width), 0, 'star');

    //  Let gravity do its thing
    star.body.gravity.y = 300;

    //  This just gives each star a slightly random bounce value
    star.body.bounce.y = 0.2;
  }

  ledges = game.add.group();
  ledges.enableBody = true;

  //Follow the player
  game.camera.follow(player);

  //  The score
  scoreText = game.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    fill: '#000'
  });
  scoreText.fixedToCamera = true;

  //  Our controls.
  cursors = game.input.keyboard.createCursorKeys();
};
