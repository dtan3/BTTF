var player;
var music;
var box;
var box2;
var box3;
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
            game.load.audio('music','images/BTTFmusic.mp3');
    },
    create: function () { 
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80BFFF';
        this.background = game.add.tileSprite(0,25,1100,1000,'background');
        game.physics.arcade.gravity.y = 100;
        this.bg=game.add.tileSprite(0,0,game.world.width,game.world.height,'road');
        this.bg.tileScale.set(0.5);
        
        //Music
        music=game.add.audio('music');
        
        music.play();
        
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
        
        box = game.add.sprite(500,420, 'box');
        box.scale.setTo(0.06);
        
        box2 = game.add.sprite(700,420, 'box');
        box2.scale.setTo(0.06);
        
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
        game.physics.arcade.gravity.y = 570;
        game.physics.enable(box);
        game.physics.enable(box2);
        box2.body.allowGravity = false;
        box.body.allowGravity = false;

        
        //boundaries
        player.body.collideWorldBounds = true;
        //box.body.collideWorldBounds = true;
        
        //Jumping
        this.spaceKey=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        

        
    },
    update: function () {
        if(this.spaceKey.justDown && player.position.y>380 || player.position.x === box.position.x || player.position.x === box2.position.x){
            player.body.velocity.y=-290;
       
        }
        
        box.body.velocity.x = -500;
        box2.body.velocity.x = -500;
        
        this.bg.tilePosition.x-=10;
        this.background.tilePosition.x-=5;
        
        if(box.position.x < -200 ) {
            box.position.x = game.rnd.integerInRange(700, 900);
        }
        
        if(box2.position.x < -200 ) {
            box2.position.x = game.rnd.integerInRange(700, 900);
        }
    }
};

// And finally we tell Phaser to add a new game;
window.game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');



