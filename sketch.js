var canvas, backgroundImage;
  var car1Im,car2Im,car3Im,car4Im,trackIm;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){

  car1Im = loadImage("images/car1.png")
  car2Im = loadImage("images/car2.png")
  car3Im = loadImage("images/car3.png")
  car4Im = loadImage("images/car4.png")
  trackIm = loadImage("images/track.png")



}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
