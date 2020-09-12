import * as THREE from "three";
import gsap from "gsap";



export default function Shape() {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;
  const container = document.querySelector("#___gatsby");
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  const scene = new THREE.Scene();
  let light = new THREE.AmbientLight(0xfffffa, 0.5);
  let ambientLight = new THREE.AmbientLight(0x999999);
  let light1 = new THREE.DirectionalLight(0xfffffa, 3);
  let sphereMaterial;
  sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x141414,
    shininess: 30,
    shading: THREE.FlatShading,
  });


  const sphere = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(30, 0),
    sphereMaterial
  );

  scene.add(camera);
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);
  scene.add(ambientLight);
  scene.add(light);
  scene.add(light1);
  light1.position.set(400, 200, 0);
  sphere.position.z = -120;
  scene.add(sphere);

  function update() {
    renderer.render(scene, camera);
    sphere.rotation.x += -0.002;
    sphere.rotation.y -= 0.004;
    renderer.clear();
    renderer.render(scene, camera);
    requestAnimationFrame(update);
  }

  const handlePointerMove = ({ clientX, clientY }) => {
    const centerPoint = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const z = (clientX - centerPoint.x) / 900;
    const x = (clientY - centerPoint.y) / 900;
    gsap.to(sphere.rotation, {
      x: -x,
      y: -z,
      duration: 1,
      ease: "power2.out",
      onUpdate: renderer.render(scene, camera),
    });
  };

  const handleDeviceOrientation = ({
    acceleration,
    accelerationIncludingGravity,
  }) => {
    const { x, y } = accelerationIncludingGravity || acceleration;
    gsap.to(sphere.rotation, {
      x: Math.floor(-y) / 3,
      y: Math.floor(-x) / 3,
      duration: 1,
      ease: "power1.out",
      onUpdate: renderer.render(scene, camera),
    });
  };

  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("devicemotion", handleDeviceOrientation, true);

  requestAnimationFrame(update);
  return (null)
}

