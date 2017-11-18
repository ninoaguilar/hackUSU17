function collectStar(player, star) {

  // Removes the star from the screen
  star.kill();

  //  Add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;

};

function createLedges() {
  ledges = game.add.group();
  ledges.enableBody = true;

  for (var i = 0; i < 16; i++) {
    var ledge = ledges.create(randomIntBetween(0, game.world.width),
      randomIntBetween(50, game.world.height - 10), 'ledge');
  }

  ledges.body.immovable = true;

};

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
