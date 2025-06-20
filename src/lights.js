import * as THREE from 'three';

export function addLights(scene, orbitalScales) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  const sunLight = new THREE.PointLight(0xffffff, 4.0, orbitalScales.distanceFactor*1000);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048,2048);
  scene.add(sunLight);

  return sunLight;
}