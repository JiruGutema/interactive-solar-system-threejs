import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function setupControls(camera, rendererDom, orbitalScales) {
  const controls = new OrbitControls(camera, rendererDom);
  controls.enableDamping = true;
  controls.dampingFactor = 0.04;
  controls.minDistance = orbitalScales.distanceFactor * 0.2;
  controls.maxDistance = orbitalScales.distanceFactor * 1000;
  controls.target.set(0,0,0);
  return controls;
}