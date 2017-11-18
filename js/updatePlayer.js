function updatePlayer() {

  //  Collide the player and the stars with the platforms
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.collide(enemies, platforms);
  game.physics.arcade.collide(player, enemies);
  game.physics.arcade.collide(platforms, blocks);
  game.physics.arcade.collide(player, blocks);
  game.physics.arcade.collide(blocks, blocks);


  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  game.physics.arcade.overlap(player, blocks, kickBlock, null, this);
  game.physics.arcade.overlap(weapon.bullets, enemies, kill, null, this);

  // Check to see if the player overlaps with any of diamond, if he does you win!
  if (checkOverlap(player, prize)) {
    game.state.start('win');
  }

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (fireKey.isDown) {
    if (straight) {
      weapon.fireAngle = Phaser.ANGLE_RIGHT;
    } else {
      weapon.fireAngle = Phaser.ANGLE_LEFT;
    }
    weapon.fire();
    //console.log("weapon fired");
  }

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

    player.animations.play('right');
    //  Move to the right

  }
  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -350;
  }
  updateEnemies();

  //player.animations.stop();
}


function updateEnemies() {
  enemies.forEach(function(enemy) {
    enemy.animations.play('left');
    if (enemy.body.position.x < 0) {
      enemy.body.velocity.x = 150;
    } else if (enemy.body.position.x > 800) {
      enemy.body.velocity.x = -150;
    }
  }, this)
};

function checkOverlap(spriteA, spriteB) {

  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Rectangle.intersects(boundsA, boundsB);

};
