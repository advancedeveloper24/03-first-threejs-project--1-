import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

const tick = () => {
  //time
  const time = Date.now();

  //update objects
  mesh.position.x -= 0.01;
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

scene.add(mesh);

//axis helper
const axesHelper = new THREE.AxesHelper(3);
axesHelper.position.y = 2;
axesHelper.position.x = 2;

scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
camera.position.y = 2;
camera.position.x = 2;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
