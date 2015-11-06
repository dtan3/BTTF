var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');
var player;
var positionClouds=function(top){
    //positions the clouds randomnly
    positionClouds(top);
}
var main = {
    preload: function () {
    game.load.image('background','images/Road.png');
    game.load.image('player','images/MartySprite.gif');
    game.load.image('clouds','images/cloudsprite.png');
    },
    create: function () {       
        game.stage.backgroundColor = '#00CCFF';
        game.physics.arcade.gravity.y = 15;
        this.bg=game.add.tileSprite(0,0,game.world.width,game.world.height,'background');
        this.bg.tileScale.set(0.5);
        
        //Position of player
        player = game.add.sprite(game.world.position.x=20,game.world.position.y=320,'player'); 
        console.log(game.world);
        player.scale.setTo(2,2);
        game.physics.enable(player);
        game.physics.arcade.gravity.y = 250;
        
        //boundaries
        player.body.collideWorldBounds = true;
        
        //Cloud position
        var cloud= game.add.sprite(game.world.position.x=50,game.world.position.y=10,'clouds');
        console.log(game.world);
        cloud.scale.setTo(0.2,0.2);
        
        //Jumping
        this.spaceKey=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

        
        
    },
    update: function () {
        if(this.spaceKey.justDown){
            player.body.velocity.y=-160;
       
        }
    }
};

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main',main);
game.state.start('main');



