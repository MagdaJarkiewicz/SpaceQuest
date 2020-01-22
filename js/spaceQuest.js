var canvas = document.querySelector("#screen")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var state = {
  spaceShip: {
    x: 100,
    y: 75,
    speed: 1,
  },
};

function clearCanvas(e) {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}

// function moveSpaceShip() {
//   state.spaceShip.y+=state.spaceShip.speed
//   if (state.spaceShip.y+state.spaceShip.size > canvas.height) {
//     console.log("Game Over!");
//   }
// }


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
image.src = '../spaceQuest/img/spaceship.png';




// function drawPipes () {
//
// };
 drawSpaceShip(ctx,image);
//
// function animate() {
//     clearCanvas();
//     drawspaceShip();
//     movespaceShip();
// };
//
// setInterval(animate, 30);
//
// function flySpaceShip(e) {
//     state.spaceShip.y=state.spaceShip.y-10;
//   };
// body.addEventListener("click", flySpaceShip);
