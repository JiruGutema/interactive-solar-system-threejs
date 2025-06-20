import * as THREE from 'three';
import { createGlowTexture } from './utils.js';

export function createBodies(scene, solarSystemData, orbitalScales, sunLight) {
  const celestialBodies = [];
  solarSystemData.forEach(data => {
    const geom = new THREE.SphereGeometry(data.visualRadius, 64,32);
    let mat;
    if (data.isStar) {
      mat = new THREE.MeshBasicMaterial({ color: data.color, map: createGlowTexture(data.color) });
      sunLight.position.set(0,0,0);
    } else {
      mat = new THREE.MeshStandardMaterial({ color: data.color, roughness:0.7, metalness:0.2 });
    }
    const mesh = new THREE.Mesh(geom, mat);
    mesh.name = data.name;
    mesh.userData = {...data};
    if (!data.isStar) {
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.userData.orbitalRadiusScene = data.orbitalRadiusAU * orbitalScales.distanceFactor;
      mesh.userData.angle = Math.random()*Math.PI*2;
      // orbit line
      const path = new THREE.Path().absellipse(0,0,mesh.userData.orbitalRadiusScene,mesh.userData.orbitalRadiusScene,0,Math.PI*2,false,0);
      const geoLine = new THREE.BufferGeometry().setFromPoints(path.getSpacedPoints(128));
      const matLine = new THREE.LineBasicMaterial({ color:0x555555, transparent:true, opacity:0.3 });
      const line = new THREE.Line(geoLine, matLine);
      line.rotation.x = Math.PI/2;
      scene.add(line);
    } else mesh.position.set(0,0,0);
    scene.add(mesh);
    celestialBodies.push(mesh);
    // Saturn rings omitted for brevity
  });
  return celestialBodies;
}