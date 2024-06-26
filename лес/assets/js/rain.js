let canvas = document.getElementById("canvas")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let c = canvas.getContext("2d");

function RainDropX(x_param, y_param, endY_param, speed_param, opacity_param){
    this.x = x_param
    this.y = y_param
    this.endY = y_param
    this.speed = speed_param
    this.opacity = opacity_param

    this.draw = function (){
        c.beginPath()
        c.moveTo(this.x, this.y)
        c.lineTo(this.x, this.y - this.endY);
        c.lineWidth = 10
        c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
        c.stroke()
    }
}

function random(min,max){
    return Math.floor (Math.random()* (max - min + 1) + min)
}

let rainDropMass = []
for (let i = 0; i < 10; i++){
    let randomX = random(0, window.innerWidth) 
    let randomY = random(0, window.innerHeight) 
    rainDropMass.push(new RainDropX(randomX,randomY, 880, 10, 1))
}
console.log(rainDropMass);
rainDropMass.forEach(element => {
    element.draw();
})

