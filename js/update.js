function update() {

    //  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(enemies,platforms);
    game.physics.arcade.collide(player, enemies);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
      if(player.position.x < 500){
        player.body.velocity.x = 150;

      }else{
        counter+=1;
        updatePlatforms();
        if(counter%100 == 0){
          console.log("plat created");

          var badGuy = enemies.create(1200,300,'baddie',1);
          badGuy.animations.add('left',[0,1],10,true);
          badGuy.body.gravity.y = 300;
          badGuy.body.velocity.x = -150;

            var platform = platforms.create(500, 300,'ground');

            platform.body.immovable = true;




        }

      }

      player.animations.play('right');
        //  Move to the right

    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 1;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }
}



function updatePlatforms(){
  platforms.forEach(function (platform){
    platform.position.x = 300;
  },this)
};


function updateEnemies(){
  enemies.forEach(function(enemy){
    enemy.animations.play('left');
    if(enemy.position.x < 0){
      enemy.kill();
    }
  },this)
};
