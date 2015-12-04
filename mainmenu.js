
var positionClouds=function(top){
    //positions the clouds randomnly
    positionClouds(top);
}
var car;

var mainMenu = {
    preload: function () {
        game.load.image('title','images/Title.png');
        game.load.image('car','images/car.png');
        game.load.image('startButton','images/startButton.png');
    },
    create: function () {    
        game.stage.backgroundColor ='#000';
        
        var newButton = new Phaser.Button(game, 0, 0, 'startbutton', this.buttonCallback, this, 1, 0, 2);
        newButton.on = false;
       
//        var startButton = document.getElementById('startbutton');
//        startButton.addEventListener('click', buttonCallback, false);
        
        function buttonCallback(event, btn) {
            console.log('event', event);
            console.log('button', btn);
        };
        
        var startButton=game.add.sprite(game.world.position.x=70,game.world.position.y=200,'startButton');
        startButton.scale.setTo(1.2);
        //Enables events on specific image
        startButton.inputEnabled=true;
        startButton.events.onInputDown.add(listener,this);
        function listener(){
            game.state.start('game');
            game2.preload();
        };
        
        var car= game.add.sprite(game.world.position.x=210,game.world.position.y=108,'car');
        car.scale.setTo(0.95);

        this.title = game.add.sprite(game.world.position.x=0,game.world.position.y=80,'title');
        this.title.scale.setTo(0.275);
    },
    update: function () {
    }
};

