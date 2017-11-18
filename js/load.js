var loadState = {

  preload: function() {
    // Text that will display as the loading screen
    var loadingLabel = game.add.text(80, 400, 'loading...', {
      font: '30px Courier',
      fill: '#fff'
    });

    // load all assets
    preload();
  },

  create: function() {
    //Call start menu state
    game.state.start('menu');
  }
};
