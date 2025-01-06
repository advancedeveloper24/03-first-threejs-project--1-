import * as THREE from "three";

//Canvas
const canvas = document.querySelector("canvas.webgl");

//Scene
const scene = new THREE.Scene();

//Objects
//const group = new THREE.Group();

//const cube1 = new THREE.Mesh(
//new THREE.BoxGeometry(1, 1, 1),
//new THREE.MeshBasicMaterial({ color: "#6CA6CD" })
//);

//const cube2 = new THREE.Mesh(
// new THREE.BoxGeometry(1, 1, 1),
// new THREE.MeshBasicMaterial({ color: "#ad0a11" })
//);

//const cube3 = new THREE.Mesh(
// new THREE.BoxGeometry(1, 1, 1),
// new THREE.MeshBasicMaterial({ color: "#7fc126" })
//);
//cube1.position.set(1, 1, 1);
//cube3.position.set(-1, -1, -1);
//scene.add(cube1, cube2, cube3);
//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#6CA6CD" });
//add to mesh
const mesh = new THREE.Mesh(geometry, material);
//Position
mesh.position.y = 1.5;
mesh.position.x = 1;
mesh.position.z = -10;

//console.log(mesh.position.length());
//console.log(mesh.position.distanceTo(camera.position));
//mesh.position.normalize();
mesh.position.set(0, 0, 0);

//Scale
//mesh.scale.x = 2;
//mesh.scale.y = 6;
//mesh.scale.z = 6;

//Rotation
//mesh.rotation.y = -8;
/////mesh.rotation.x = 4;
//mesh.rotation.z = 3;

//mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.5, Math.PI * 0.25);

//add mesh to scene
scene.add(mesh);

//Camera
// Sizes
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Axes Helper - helps with determining axes of object
//const axesHelper = new THREE.AxesHelper(3);
//scene.add(axesHelper);

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

//Animations
let time = Date.now();

const clock = new THREE.Clock();

const tick = () => {
  // clock
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  // time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;

  //update objects
  //mesh.rotation.x = elapsedTime * Math.PI * 2;
  //mesh.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.position.y = Math.sin(elapsedTime);
  camera.lookAt(mesh.position);
  //render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
