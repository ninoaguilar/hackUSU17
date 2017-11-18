function updateEnemies(enemies) {
    enemies.forEach(function(enemy){
      enemy.animations.play('left');
      if(enemy.position.x < 0){
        enemy.kill();
      }
    },this)
}
