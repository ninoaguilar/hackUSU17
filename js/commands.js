function collectStar(player, star) {

  // Removes the star from the screen
  star.kill();

  //  Add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;

};

function kill(bullet, enemy) {

  // Removes the star from the screen
  enemy.kill();
  bullet.kill();

  //  Add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;

};

function loseLife(player, enemies) {
  //player.body.reset();
  lives--;
  livesRemaining.getFirst().kill();
}



function kickBlock(player, block) {
  var kickKey = game.input.keyboard.addKey(Phaser.Keyboard.K);

  kickKey.onDown.add(function() {
    block.body.velocity.y = -200;
  });
};

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
