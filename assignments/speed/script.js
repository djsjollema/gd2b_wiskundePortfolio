var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");


var vector = new Vector(2,3);
var ball = new Point(100,100,10,"red");

function loop(){
  context.clearRect(0,0,800,600);
  ball.x += vector.dx;
  ball.y += vector.dy;
  ball.draw(context);
  if(ball.x<ball.r || ball.x>800-ball.r){
    vector.dx = -vector.dx;
  }
  if(ball.y<ball.r || ball.y>600-ball.r){
    vector.dy = -vector.dy;
  }

}

setInterval(loop,10);
