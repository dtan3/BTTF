var player;
var positionClouds=function(top){
    //positions the clouds randomnly
    positionClouds(top);
}



var game2 = {
    preload: function () {
            game.load.image('road','images/Road.png');
            game.load.image('player','images/MartySprite.gif');
            game.load.image('clouds','images/cloudsprite.png');
            game.load.image('background','images/background.png');
            game.load.image('tree','images/tree.png');
            game.load.image('cone','images/cone.png');
            game.load.image('biff','images/biff.gif');
            game.load.image('box','images/Box.png');
    },
    create: function () {       
        game.stage.backgroundColor = '#80BFFF';
        this.background = game.add.tileSprite(0,25,1100,1000,'background');
        game.physics.arcade.gravity.y = 100;
        this.bg=game.add.tileSprite(0,0,game.world.width,game.world.height,'road');
        this.bg.tileScale.set(0.5);
        
        
        //Biff
        var biff = game.add.sprite(game.world.position.x = 10, game.world.position.y=410,'biff');
        biff.scale.setTo(0.625);
        
        //Cones
        for ( var i = 0; i < 10; i++ ) {
        var cone1=game.add.sprite(game.world.position.x = 100 + i*100,game.world.position.y=295,'cone');
        cone1.scale.setTo(0.1);
        };
        //tree
        for (var z= 0; z < 10; z++){
        var tree=game.add.sprite(game.world.position.x=50 + z*100,game.world.position.y=275,'tree');
        tree.scale.setTo(0.10,0.10);
        };
        
        for( var q = 0; q < 3; q++ ) {
        var box = game.add.sprite(game.world.position.x = game.rnd.integerInRange(50,600),game.world.position.y = 410, 'box');
            box.scale.setTo(0.07);
        }
    
        
        //Cloud #1,2,3,4
        var cloud= game.add.sprite(game.world.position.x=50,game.world.position.y=10,'clouds');
        console.log(game.world);
        cloud.scale.setTo(0.2,0.2);
        var cloud2= game.add.sprite(game.world.position.x=300,game.world.position.y=50,'clouds');
        cloud2.scale.setTo(0.16,0.16);
        var cloud3= game.add.sprite(game.world.position.x=450,game.world.position.y=10,'clouds');
        cloud3.scale.setTo(0.2,0.2);
        var cloud4= game.add.sprite(game.world.position.x=170,game.world.position.y=50,'clouds');
        cloud4.scale.setTo(0.16,0.16);
        
        //Position of player
        player = game.add.sprite(game.world.position.x=100,game.world.position.y=320,'player'); 
        console.log(game.world);
        player.scale.setTo(1.8,1.8);
        game.physics.enable(player);
        game.physics.arcade.gravity.y = 450;
        
        //boundaries
        player.body.collideWorldBounds = true;
        
        
        //Jumping
        this.spaceKey=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        

        
    },
    update: function () {
        if(this.spaceKey.justDown && player.position.y>300){
            player.body.velocity.y=-230;
       
        }
        this.bg.tilePosition.x-=10;
        this.background.tilePosition.x-=5;
    }
};

// And finally we tell Phaser to add a new game;
window.game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');



