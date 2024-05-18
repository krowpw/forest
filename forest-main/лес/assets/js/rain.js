let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d");

function RainDropX(x_param, y_param, endY_param, speed_param, opacity_param) {
  this.x = x_param;
  this.y = y_param;
  this.endY = endY_param;
  this.speed = speed_param;
  this.opacity = opacity_param;

  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x, this.y - this.endY);
    c.lineWidth = 10;
    c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    c.stroke();
  };
  this.update = function () {
    let rainEnd = window.innerHeight + 100;
    if (this.y >= rainEnd) {
      this.y = this.endY - 100;
    } else {
      this.y = this.y + this.speed;
    }
    this.draw();
  };
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let rainArray = [];
for (let i = 0; i < 1000; i++) {
  let rainXLocation = random(0, window.innerWidth);
  let rainYLocation = random(0, window.innerHeight);
  let randomRainHeight = random(0, 10);
  let randomSpeed = random(2, 10);
  let randomOpacity = Math.random() * 0.55;
  rainArray.push(
    new RainDropX(
      rainXLocation,
      rainYLocation,
      randomRainHeight,
      randomSpeed,
      randomOpacity
    )
  );
}
console.log(rainArray);
function animateRain() {
  requestAnimationFrame(animateRain);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < rainArray.length; i++) {
    rainArray[i].update();
  }
}
animateRain();
