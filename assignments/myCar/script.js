var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var carPos = new Vector(0,168);
var carVelocity = new Vector(2,0);
var rotation = 0;

var car = new Image();
car.src = "auto.fw.png";

var frontWheel = new Image();
frontWheel.src = "wheel.png";

var rearWheel = new Image();
rearWheel.src = "wheel.png";

car.addEventListener('load',()=>{
  setInterval(loop,10);
})

function loop(){
  rotation += carVelocity.dx/80;

  context.clearRect(0,0,800,450);
  carPos = carPos.add(carVelocity);
  context.drawImage(car,carPos.dx,carPos.dy);
  context.save();

  context.translate(carPos.dx+753,carPos.dy+200)
  context.rotate(rotation);
  context.drawImage(frontWheel,-80,-80);
  context.restore();

  context.save();
  context.translate(carPos.dx+215,carPos.dy+200)
  context.rotate(rotation);
  context.drawImage(rearWheel,-80,-80);
  context.restore();

  if(carPos.dx > 800){
    carPos.dx = -car.width;
  }
  if(carPos.dx < -car.width){
    carPos.dx = 800;
  }
}
