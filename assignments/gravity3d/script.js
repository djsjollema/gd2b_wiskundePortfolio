var container,scene,camera,renderer;
var earth,earthGeometry,earthMaterial;
var loader,map;
var moon,moonGeometry,moonMaterial, moonMap;
var moonVelocity,distanceEarthMoon,positionEarthMoon;
var light,ambientLight;

function init(){
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);

  camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,10000);
  camera.position.z = 500;
  camera.position.y = 300;
  camera.lookAt(new THREE.Vector3(0,0,0))
  scene = new THREE.Scene();
  container = document.getElementById("container");
  container.appendChild(renderer.domElement);

  loader = new THREE.TextureLoader();
  map = loader.load("earth.jpg");

  earthGeometry = new THREE.SphereGeometry(100,32,32);
  earthMaterial = new THREE.MeshLambertMaterial({map:map})

  earth = new THREE.Mesh(earthGeometry,earthMaterial);
  scene.add(earth);

  moonMap = new THREE.TextureLoader().load("moon2.jpg");
  moonGeometry = new THREE.SphereGeometry(50,32,32);
  moonMaterial = new THREE.MeshLambertMaterial({map:moonMap});
  moon = new THREE.Mesh(moonGeometry,moonMaterial);
  moonVelocity = new THREE.Vector3(0,0,-0.8);

  ambientLight = new THREE.AmbientLight(0xffffff,0.4);
  scene.add(ambientLight)

  scene.add(moon);

  moon.position.x = -350;

  light = new THREE.DirectionalLight(0xffffff,1);
  light.position.x = 1;
  light.position.y = 0;

  scene.add(light);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  positionEarthMoon = earth.position.clone().sub(moon.position.clone());
  //distanceEarthMoon = earth.position.clone().distanceTo(moon.position.clone());
  distanceEarthMoon = positionEarthMoon.length();

  moonVelocity = moonVelocity.add(positionEarthMoon.normalize().multiplyScalar(300/(distanceEarthMoon*distanceEarthMoon)))
  moon.position.add(moonVelocity);
  earth.rotation.y -= 0.01;
  moon.rotation.y -= 0.01;
  renderer.render(scene,camera);
  console.log(distanceEarthMoon)
}

init();
