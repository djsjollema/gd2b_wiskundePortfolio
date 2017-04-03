var container = document.getElementById('container');
var camera, scene,renderer;
var light;
var orb, orb1, orb2, material, material1, material2, geometry,geometry1;
var velocityOrb, speed = 1, toOrb1=true;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40,1.5,1,1000);
  camera.position.z = 500;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800,600);
  container.appendChild(renderer.domElement);

  light = new THREE.DirectionalLight(0xFFFFFF,1,100);
  scene.add(light);

  geometry = new THREE.SphereGeometry(50,32,32);
  geometry1 = new THREE.SphereGeometry(10,32,32);
  material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
  material1 = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe:true});
  material2 = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe:true});
  orb = new THREE.Mesh(geometry1,material);
  orb1 = new THREE.Mesh(geometry,material1);
  orb1.position.set(-200,100,0);
  orb2 = new THREE.Mesh(geometry,material2);
  orb2.position.set(100,-100,0);
  scene.add(orb2);
  scene.add(orb);
  scene.add(orb1);



  window.requestAnimationFrame(animate);
}

function animate(){
  window.requestAnimationFrame(animate);
  if(orb.position.distanceTo(orb1)<=speed){
    toOrb1 = false;
  } else{
    toOrb1 = true;
  }

  velocityOrb = orb1.position.clone();
  if(toOrb1){
    velocityOrb.sub(orb2.position);
  } else {
    velocityOrb.sub(orb2.position);
  }


  velocityOrb.normalize();
  velocityOrb.multiplyScalar(speed);

  orb.position.add(velocityOrb)
  orb1.rotation.x += 0.01;
  orb1.rotation.y += 0.01;
  orb2.rotation.x += 0.01;
  orb2.rotation.y += 0.01;
  renderer.render(scene,camera);
  console.log(orb.position.distanceTo(orb1))
}

init();
