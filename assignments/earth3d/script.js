var container,scene,camera,renderer;
var earth,earthGeometry,earthMaterial;
var loader,map;

function init(){
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800,600);

  camera = new THREE.PerspectiveCamera(70,1.33,1,10000);
  camera.position.z = 200;
  scene = new THREE.Scene();
  container = document.getElementById("container");
  container.appendChild(renderer.domElement);

  loader = new THREE.TextureLoader();
  map = loader.load("earth.jpg");

  earthGeometry = new THREE.SphereGeometry(50,32,32);
  earthMaterial = new THREE.MeshBasicMaterial({map:map})

  earth = new THREE.Mesh(earthGeometry,earthMaterial);
  scene.add(earth);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  earth.rotation.y += 0.01;
  earth.rotation.z += 0.005
  renderer.render(scene,camera)
}

init();
