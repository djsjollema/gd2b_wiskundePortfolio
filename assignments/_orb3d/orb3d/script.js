var container = document.getElementById('container');
var camera, scene,renderer;
var light;
var orb, material, geometry;

function init(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40,1.5,1,1000);
  camera.position.z = 500;
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(800,600);
  container.appendChild(renderer.domElement);

  light = new THREE.DirectionalLight(0xFFFFFF,1,100);
  scene.add(light);

  geometry = new THREE.SphereGeometry(100,32,32);
  material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});
  orb = new THREE.Mesh(geometry,material);
  scene.add(orb);

  renderer.render(scene,camera);
}

init();
