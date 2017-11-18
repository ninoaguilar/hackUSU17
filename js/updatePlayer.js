function updatePlayer() {

  //  Collide the player and the stars with the platforms
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.collide(enemies, platforms);
  game.physics.arcade.collide(enemies);
  game.physics.arcade.collide(platforms, blocks);
  game.physics.arcade.collide(player, blocks);
  game.physics.arcade.collide(enemies, blocks);
  game.physics.arcade.collide(blocks);


  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  game.physics.arcade.overlap(player, blocks, kickBlock, null, this);
  game.physics.arcade.overlap(weapon.bullets, enemies, kill, null, this);
  game.physics.arcade.overlap(player, enemies, loseLife, null, this);

  // Check to see if the player overlaps with any of diamond, if he does you win!
  if (checkOverlap(player, prize)) {
    game.state.start('win');
  }

  if (checkOverlap(player, easterEgg)) {
    score += 200;
    game.state.start('win');
  }

  if (player.body.touching.bottom && enemies.body.touching.top) {
    enemies.kill();
  }

  var quitKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);

  quitKey.onDown.addOnce(function() {
    game.state.start('lose');
  });

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  var fireKey = game.input.keyboard.addKey(Phaser.Keyboard.F);

  fireKey.onDown.add(decreaseBullets);

  if (cursors.left.isDown) {
    straight = false;
    //  Move to the left
    player.body.velocity.x = -150;

    player.animations.play('left');
  } else if (cursors.right.isDown) {
    straight = true;
    if (player.position.x < game.world.width) {
      player.body.velocity.x = 150;
    }

    /**/
    player.animations.play('right');
    //  Move to the right

  }
  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -300;
  }

  updateEnemies(randomIntBetween(0, 1000));
}
