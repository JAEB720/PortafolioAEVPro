import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Image3DViewer = ({ onReady, onProgress, onError }) => {
  const containerRef = useRef();

  function getFOV() {
    return window.innerWidth <= 768 ? 74 : 66;
  }

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(getFOV(), window.innerWidth / window.innerHeight, 0.5, 2000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    containerRef.current.appendChild(renderer.domElement);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (_url, loaded, total) => {
      if (typeof onProgress === 'function' && total > 0) {
        onProgress(Math.round((loaded / total) * 100));
      }
    };
    loadingManager.onLoad = () => {
      if (typeof onProgress === 'function') {
        onProgress(100);
      }
      if (typeof onReady === 'function') {
        onReady();
      }
    };
    loadingManager.onError = () => {
      if (typeof onError === 'function') {
        onError();
      }
    };

    const textureLoader = new THREE.TextureLoader(loadingManager);
    const texture = textureLoader.load('/azulblanco.jpg');
    const geometry = new THREE.PlaneGeometry(14, 8, 15, 9);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const imageMesh = new THREE.Mesh(geometry, material);
    scene.add(imageMesh);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const time = clock.getElapsedTime();

      for (let i = 0; i < geometry.attributes.position.count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);
        const animl = 0.25 * Math.sin(x + time * 0.7);

        geometry.attributes.position.setZ(i, animl);
      }

      geometry.computeVertexNormals();
      geometry.attributes.position.needsUpdate = true;

      animationFrameId = requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.fov = getFOV();
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      scene.remove(imageMesh);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onError, onProgress, onReady]);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -999 }} />;
};

export default Image3DViewer;
