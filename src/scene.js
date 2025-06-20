import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

export function createStarfield(scene) {
  const geo = new THREE.BufferGeometry();
  const verts = [];
  for (let i=0; i<10000; i++) {
    verts.push(
      THREE.MathUtils.randFloatSpread(20000),
      THREE.MathUtils.randFloatSpread(20000),
      THREE.MathUtils.randFloatSpread(20000)
    );
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  const mat = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.7, transparent: true, opacity: 0.5 });
  scene.add(new THREE.Points(geo, mat));
}