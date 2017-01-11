var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var speed = new Vector(8,5);

var ball = new Point(100,100,20,"blue");

setInterval(loop,10);

function loop(){
    context.clearRect(0,0,800,450)
    ball.draw(context);
    ball.x += speed.dx;
    ball.y += speed.dy;
    
    if(ball.y < ball.r || ball.y>450-ball.r){
        speed.dy = -speed.dy;
    }
    
    if(ball.x <ball.r || ball.x > 800-ball.r){
        speed.dx = - speed.dx;
    }
}

