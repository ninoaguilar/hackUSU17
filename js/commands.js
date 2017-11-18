function collectStar(player, star) {

  // Removes the star from the screen
  star.kill();

  //  Add and update the score
  bullets += 1;
  bulletText.text = 'Ammo: ' + (bullets);

};

function kill(bullet, enemy) {

  // Removes the enemy from the screen
  enemy.kill();
  bullet.kill();


  //  Add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;
  bulletText.text = 'Ammo: ' + bullets;

};

function loseLife(player, enemies) {
  lives--;
  console.log(player.body.touching.bottom);
  if (player.body.touching.bottom && enemies.body.touching.top) {
    enemies.kill();
  }
  var dead = livesRemaining.getFirstAlive();
  if (dead != null) {
    player.body.position.x = 0;
    player.body.position.y = 0;
    dead.kill();
  } else {
    game.state.start('lose');
  }
}

function kickBlock(player, block) {


  if (kickKey.isDown) {
    if (block.body.touching.down && block.body.touching.up && player.body.touching.down) {
      player.body.velocity.y = -500;
    }
    if (block.body.touching.down && block.body.touching.left && player.body.touching.right) {
      block.body.velocity.y = -500;
    }
    if (block.body.touching.down && block.body.touching.right && player.body.touching.left) {
      block.body.velocity.y = -500;
    }
  }
};

function updateEnemies(randomNumber) {
  if (randomNumber % 69 == 0) {
    enemies.forEach(function(enemy) {
      enemy.animations.play('left');
      enemy.body.velocity.x = randomIntBetween(-200, 200)
      if (enemy.body.velocity.x > 0) {
        enemy.animations.play('right');
      } else {
        enemy.animations.play('left');
      }

    }, this)
  }
};

function checkOverlap(spriteA, spriteB) {

  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Rectangle.intersects(boundsA, boundsB);

};

function decreaseBullets() {
  if (straight) {
    weapon.fireAngle = Phaser.ANGLE_RIGHT;
  } else {
    weapon.fireAngle = Phaser.ANGLE_LEFT;
  }

  if (bullets > 0) {
    weapon.fire();
    bullets--;
    bulletText.text = 'Ammo: ' + bullets;
  }
}


function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
