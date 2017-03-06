var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var ball = new Point(100,100,20,"yellow",true);
ball.drag(context);

function animate(){
  context.clearRect(0,0,800,600);
  ball.draw(context);
}

setInterval(animate,10);
