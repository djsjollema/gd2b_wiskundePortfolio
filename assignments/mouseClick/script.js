var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var position = new Vector(400,300);

var velocity = new Vector(8,5);

var ball = new Point(position.dx,position.dy,20,"blue");
var mouseVector = new Vector(0,0)
var target;
var speed = 5;

setInterval(loop,10);

window.addEventListener("mousedown",(evt)=>{
  let temp = getMousePos(canvas,evt);
  mouseVector = new Vector(temp.x,temp.y);
  velocity = mouseVector.substract(position);
  console.log(mouseVector,position,velocity,velocity.magnitude());
  velocity.dx = velocity.dx/velocity.magnitude();
  velocity.dy = velocity.dy/velocity.magnitude();

})

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function loop(){
    context.clearRect(0,0,800,450);
    ball.draw(context);
    position = position.add(velocity);
    ball.x = position.dx;
    ball.y = position.dy;



    if(ball.y < ball.r || ball.y>450-ball.r){
        velocity.dy = -velocity.dy;
    }

    if(ball.x <ball.r || ball.x > 800-ball.r){
        velocity.dx = - velocity.dx;
    }
}
