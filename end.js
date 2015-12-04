var end =  {
    preload: function() {
        game.load.image('gameover','images/gameover.png');
        game.load.image('airMag','images/airmag.png');
    },
    
    create: function() {
        var gameover= game.add.sprite(game.world.position.x=100,game.world.position.y=1,'gameover');
        gameover.scale.setTo(0.3);
        
        var airMag=game.add.sprite(game.world.position.x=220,game.world.position.y=325,'airMag');
        airMag.scale.setTo(1);
        
        game.stage.backgroundColor ='#000';
        
        text = game.add.text(100,250,'Your score is ' + score + '. You did not win Air Mags.', { font: "25px Arial", fill: '#fff' });
    },
    
    update: function() {
    }
};