var allplayers;
var gamestate=0;
var playercount,database,form,player,game,backgroundimage;
var canvas;
var cars,car1,car2,car3,car4
var car1img,car2img,car3img,car4img,groundIMG,trackIMG;

function preload(){
    car1img=loadImage("../image/man.jpg")
    car2img=loadImage("../image/man.jpg")
    car3img=loadImage("../image/man.jpg")
    car4img=loadImage("../image/man.jpg")
    groundIMG=loadImage("../image/ground.png")
    trackIMG=loadImage("../image/track.jpg")
}

function setup(){
    database=firebase.database()
    console.log(database);
    canvas= createCanvas(displayWidth-20,displayHeight-30);
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
    if(playercount==4){
        game.update(1)
    }
    if(gamestate==1){
        clear()
        game.play()
    }

    if(gamestate==2){
        game.end()
    }
    //background("white");
    
    //drawSprites();
}



/*function readPosition(data){
    position=data.val()
    console.log(position.x)
    hipnoticball.x=position.x
    hipnoticball.y=position.y
}
function writePosition(x,y){
    database.ref('ball/position').set({
'x':position.x+x,'y':position.y+y
})
    
    
}

function showError(){
    console.log("error in writing the database")
}*/