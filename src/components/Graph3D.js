import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Graph3D = ({ type, data = [] }) => {
  const mountRef = useRef();

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.1 });
    const geometry = new THREE.BufferGeometry();

    const positions = [];

    data.forEach((row, i) => {
      const x = i;
      const y = parseFloat(row.Value) || 0;
      const z = Math.random() * 10;
      positions.push(x, y, z);
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, [type, data]);

  return <div ref={mountRef} style={{ width: '100%', height: 400 }} />;
};

export default Graph3D;