var state = {
  bird: {
    x: 100,
    y: 75,
    size: 50,
    color: "teal",
    speed: 1,
  },
};

var canvas = document.querySelector("#screen")
  canvas.width = 500;
  canvas.height = 300;

var ctx = canvas.getContext("2d");

function clearCanvas(e) {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,500,300);
}

function moveBird() {
  state.bird.y+=state.bird.speed
  if (state.bird.y+state.bird.size > canvas.height) {
    console.log("Game Over!");
  }
}

function drawBird () {
  ctx.fillStyle = state.bird.color;
  ctx.fillRect(state.bird.x, state.bird.y, state.bird.size, state.bird.size);
};

function drawPipes () {

};

drawBird();

function animate() {
    clearCanvas();
    drawBird();
    moveBird();
};

setInterval(animate, 30);

function flyBird(e) {
    state.bird.y=state.bird.y-10;
  };
body.addEventListener("click", flyBird);
