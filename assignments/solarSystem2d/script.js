var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var sunVector,sun;
var eartVector,earth;
var rEarth = 200;
var t = 0,dt = 0.01;


function init(){
  sunVector = new Vector(400,300);
  sun = new Point(sunVector.dx,sunVector.dy,60,"#ffff00");
  earthVector = new Vector(200,300);
  earth = new Point(earthVector.dx,earthVector.dy,20,"#0000ff");
  animate();
}

function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,800,600);
  sun.draw(context);
  context.arc(sunVector.dx,sunVector.dy,200,0,2*Math.PI);
  context.stroke();
  earthVector = sunVector.add(new Vector(rEarth*Math.cos(t),rEarth*Math.sin(t)));
  earth.x = earthVector.dx;
  earth.y = earthVector.dy;
  earth.draw(context);
  t += dt;

}

init()
