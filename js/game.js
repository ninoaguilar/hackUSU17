var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'gameDiv');

var player;
var platforms;
var cursors;
var counter = 0;
var stars;
var score = 0;
var scoreText;
var enemies;

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);


//Start the game using the boot state
game.state.start('boot');
