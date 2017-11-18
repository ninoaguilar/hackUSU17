function create() {
  // Make our game world bigger than the canvas
  game.world.setBounds(0, 0, 2000, 600)
  //  A simple background for our game
  game.add.image(0, 0, 'sky');


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
      randomIntBetween(100, game.world.height - 85), 'ground');
    ledge.body.immovable = true;
  }

  for (var i = 0; i < 2; i++) {
    block = blocks.create(randomIntBetween(50, game.world.width - 500),
      game.world.height - 150, 'block', 12);
    block.body.gravity.y = 400;
    block.body.collideWorldBounds = true;
    block.body.drag.x = 50;
    block.body.allowRotation = true;
  }


  // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'luigi', 12);
  player.scale.setTo(2, 2);

  prize = game.add.sprite(randomIntBetween(game.world.width - 1000, game.world.width - 100),
    randomIntBetween(0, 100), 'diamond', 12);

  easterEgg = game.add.sprite(randomIntBetween(0, game.world.width), 560, 'egg');
  easterEgg.enableBody = true;
  easterEgg.bringToTop();

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0;
  player.body.gravity.y = 400;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [6, 7, 8, 6], 10);
  player.animations.add('right', [9, 10, 11, 9], 10);

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
    star.scale.setTo(0.1, 0.1);
  }

  for (var i = 0; i < level * 5; i++) {
    var badGuy = enemies.create(randomIntBetween(100, game.world.width), 0, 'baddie');
    badGuy.scale.setTo(.75, .75);
    badGuy.animations.add('left', [18, 19, 20], 13, true);
    badGuy.animations.add('right', [30, 31, 32], 13, true);
    badGuy.body.gravity.y = 300;
    badGuy.body.velocity.x = randomIntBetween(-200, 200);
  }

  weapon = game.add.weapon(bullets, 'bullet');

  //weapon.fireFrom(300, 300);
  weapon.fireRate = 200;
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.bulletAngleOffset = 0;

  weapon.trackSprite(player, 10, 15, false);

  ledges = game.add.group();
  ledges.enableBody = true;

  //Follow the player
  game.camera.follow(player);
  player.bringToTop();

  livesRemaining = game.add.group();

  for (var i = 0; i < lives; i++) {
    var life = livesRemaining.create(i * 40 + 200, 20, 'life');
  }

  livesRemaining.fixedToCamera = true;


  //  The score
  scoreText = game.add.text(16, 16, 'score:' + score, {
    fontSize: '32px',
    fill: '#000'
  });

  bulletText = game.add.text(16, 60, 'Ammo:' + bullets, {
    fontsize: '60px',
    fill: '#000'
  });

  quitText = game.add.text(16, game.world.height - 45, "Press 'q' to quit", {
    fontSize: '32px',
    fill: '#00'
  });

  bulletText.fixedToCamera = true;
  scoreText.fixedToCamera = true;
  quitText.fixedToCamera = true;

  //  Our controls.
  kickKey = game.input.keyboard.addKey(Phaser.Keyboard.K);
  cursors = game.input.keyboard.createCursorKeys();
};
