var container,scene,camera,renderer;
var orb,orbGeometry,orbMaterial;

function init(){
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(800,600);

  camera = new THREE.PerspectiveCamera(70,1.33,1,10000);
  camera.position.z = 200;
  scene = new THREE.Scene();
  container = document.getElementById("container");
  container.appendChild(renderer.domElement);

  orbGeometry = new THREE.SphereGeometry(50,32,32);
  orbMaterial = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true})

  orb = new THREE.Mesh(orbGeometry,orbMaterial);
  scene.add(orb);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  orb.rotation.y += 0.01;
  orb.rotation.z += 0.005
  renderer.render(scene,camera)
}

init();
