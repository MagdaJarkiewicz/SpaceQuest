var canvas = document.querySelector("#screen")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


var state = {
  spaceShip: {
    x: canvas.width/6,
    y: canvas.height/3,
    speed: 1,
  },
  asteroids: {
    x: canvas.width-150,
    y: randomPosition(1, canvas.height),
    speed: 3,
}}

function clearCanvas(ctx, image) {
  if (!image.complete) {
    setTimeout(function(){
      clearCanvas(ctx,image);
    }, 150)
    return
  }
  ctx.drawImage(background, 0, 0, window.innerWidth, window.innerHeight);
}

var background = new Image();
background.src = '../spaceQuest/img/background.jpg';

 function moveSpaceShip() {
   state.spaceShip.y+=state.spaceShip.speed
   if (state.spaceShip.y+state.spaceShip.size > canvas.height) {
     console.log("Game Over!");
   }
 }


function drawSpaceShip (ctx,image) {
  if (!image.complete) {
    setTimeout(function(){
      drawSpaceShip(ctx,image);
    }, 150)
    return
  }
  ctx.drawImage(image, state.spaceShip.x, state.spaceShip.y, 150, 150);
}

var image = new Image();
image.src = '../spaceQuest/img/anotheralien.png';

var asteroid = new Image();
asteroid.src = '../spaceQuest/img/newasteroid.png';


function drawAsteroids (ctx,asteroid) {
  if (!asteroid.complete) {
    setTimeout(function(){
      drawAsteroids(ctx,asteroid);
    }, 150)
    return
  }
  ctx.drawImage(asteroid, state.asteroids.x, state.asteroids.y, 150, 100);
}
function asteroidsMove(){
    state.asteroids.x-=state.asteroids.speed
};


function animate() {
    clearCanvas(ctx,image);
    drawSpaceShip(ctx,image);
    moveSpaceShip();
    drawAsteroids(ctx,asteroid);
    asteroidsMove();
};

setInterval(animate, 30);

  function flySpaceShip (e) {
    if (e.code==='ArrowUp') {
        state.spaceShip.y=state.spaceShip.y-10;
      }
      drawSpaceShip(ctx, image)
  }
body.addEventListener("keydown", flySpaceShip);
