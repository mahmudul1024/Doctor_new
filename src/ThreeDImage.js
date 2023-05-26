import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./ThreeDImage.css";
const ThreeDImage = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const circleRef = useRef(null);
  const skeletRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    let container, renderer, scene, camera, circle, skelet, particle;

    const init = () => {
      container = containerRef.current;

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      );
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Create the scene
      scene = new THREE.Scene();
      sceneRef.current = scene;

      // Create the camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 400;
      scene.add(camera);
      cameraRef.current = camera;

      // Create the objects
      circle = new THREE.Object3D();
      skelet = new THREE.Object3D();
      particle = new THREE.Object3D();
      scene.add(circle);
      scene.add(skelet);
      scene.add(particle);
      circleRef.current = circle;
      skeletRef.current = skelet;
      particleRef.current = particle;

      // Create the geometries and materials
      const geometry = new THREE.TetrahedronGeometry(2, 0);
      const geom = new THREE.IcosahedronGeometry(7, 1);
      const geom2 = new THREE.IcosahedronGeometry(15, 1);

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mat = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mat2 = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        side: THREE.DoubleSide,
      });

      // Create the particles
      for (let i = 0; i < 1000; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(90 + Math.random() * 700);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        );
        particle.add(mesh);
      }

      // Create the planet meshes
      const planet = new THREE.Mesh(geom, mat);
      planet.scale.x = planet.scale.y = planet.scale.z = 16;
      circle.add(planet);

      const planet2 = new THREE.Mesh(geom2, mat2);
      planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
      skelet.add(planet2);

      // Create the lights
      const lights = [];
      lights[0] = new THREE.DirectionalLight(0xffffff, 1);
      lights[0].position.set(1, 0, 0);
      lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
      lights[1].position.set(0.75, 1, 0.5);
      lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
      lights[2].position.set(-0.75, -1, 0.5);
      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      const container = containerRef.current;
      const renderer = rendererRef.current;
      const camera = cameraRef.current;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const animate = () => {
      particleRef.current.rotation.x += 0.0;
      particleRef.current.rotation.y -= 0.004;
      circleRef.current.rotation.x -= 0.002;
      circleRef.current.rotation.y -= 0.003;
      skeletRef.current.rotation.x -= 0.001;
      skeletRef.current.rotation.y += 0.002;

      const renderer = rendererRef.current;
      const scene = sceneRef.current;
      const camera = cameraRef.current;

      renderer.clear();
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      rendererRef.current.dispose();
    };
  }, []);

  return (
    <div className="ThreeDImageContainer">
      <div ref={containerRef} className="ThreeDImageCanvas"></div>
    </div>
  );
};

export default ThreeDImage;
