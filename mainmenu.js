
var positionClouds=function(top){
    //positions the clouds randomnly
    positionClouds(top);
}
console.log('game is...', game.load);

var mainMenu = {
    preload: function () {
        setTimeout(function() {
            game.load.image('title','images/Title.png');
            game.load.image('car','images/car.png');
        }, 10);
        
    },
    create: function () {    
        game.stage.backgroundColor ='#FFF';
        
        var newButton = new Phaser.Button(game, 0, 0, 'starbutton', this.buttonCallback, this, 1, 0, 2);
        newButton.on = false;
       
        var startButton = document.getElementById('start-button');
        startButton.addEventListener('click', buttonCallback, false);
        
        function buttonCallback(event, btn) {
            console.log('event', event);
            console.log('button', btn);
            console.log("hello!");
        };
        var car = game.add.sprite(game.world.position.x=6,game.world.position.y=20,'car');
        car.scale.setTo(0.5);

        var title= game.add.sprite(game.world.position.x=0,game.world.position.y=80,'title');
        title.scale.setTo(0.275);
        
        
    
    },
    update: function () {
    }
};

