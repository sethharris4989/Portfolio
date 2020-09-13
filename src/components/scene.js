import React from "react"
import * as THREE from "three"
import gsap from "gsap";


class Scene extends React.Component {
  componentDidMount() {

    let scene = new THREE.Scene({
      antialias: true,
      alpha: true,
    })

    this.camera = new THREE.PerspectiveCamera(50, this.mount.offsetWidth / this.mount.offsetHeight, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)

    const geometry = new THREE.DodecahedronBufferGeometry(0, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x141414, shininess: 10, shading: THREE.FlatShading, })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    let light = new THREE.DirectionalLight(0xffffff, .4);
    let ambientLight = new THREE.AmbientLight(0x999999);
    let light1 = new THREE.DirectionalLight(0xfffffa, 3);

    scene.add(ambientLight);
    scene.add(light);
    scene.add(light1);

    light.position.set(-400, -100, 0);
    light1.position.set(400, 200, 0);

    const cam = this.camera;
    const ren = this.renderer;

    ren.setClearColor(0x141414);

    this.camera.position.z = 5

    function update() {
      ren.render(scene, cam);
      cube.rotation.x += -0.002;
      cube.rotation.y -= 0.004;
      ren.clear();
      ren.render(scene, cam);
      requestAnimationFrame(update);
    }

    const handlePointerMove = ({ clientX, clientY }) => {
      const centerPoint = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const z = (clientX - centerPoint.x) / 900;
      const x = (clientY - centerPoint.y) / 900;

      gsap.to(cube.rotation, {
        x: -x,
        y: -z,
        duration: 1,
        ease: "power2.out",
        onUpdate: ren.render(scene, cam),
      });

      gsap.to(cube.position, {
        z: -z,
        ease: "power2.out",
        onUpdate: ren.render(scene, cam),
      })


      light.position.set(z / 20, x / 10, 0);

    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    requestAnimationFrame(update);
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} className="canvas"></div>
    )
  }
}

export default Scene