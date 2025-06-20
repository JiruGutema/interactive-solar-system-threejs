import * as THREE from 'three';
import { orbitalScales, solarSystemData } from './data.js';
import { createGlowTexture } from './utils.js'; // ensure THREE is global if needed in interaction
import { createScene, createStarfield } from './scene.js';
import { addLights } from './lights.js';
import { setupControls } from './controls.js';
import { createBodies } from './bodies.js';
import { setupInteraction } from './interaction.js';
import { animateLoop } from './animation.js';

// DOM refs
const canvas = document.getElementById('solar-system-canvas');
const infoElements = {
  infoCard: document.getElementById('info-card'),
  planetNameEl: document.getElementById('planet-name'),
  planetDiameterEl: document.getElementById('planet-diameter'),
  planetDistanceEl: document.getElementById('planet-distance'),
  planetOrbitEl: document.getElementById('planet-orbit'),
  planetAtmosphereEl: document.getElementById('planet-atmosphere'),
  planetMoonsEl: document.getElementById('planet-moons'),
  closeBtn: document.getElementById('close-info-card')
};
const loadingScreen = document.getElementById('loading-screen');

// Initialize
const scene = createScene();
createStarfield(scene);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 30000);
camera.position.set(0, orbitalScales.distanceFactor*3.5, orbitalScales.distanceFactor*8);

const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000005,1);
renderer.shadowMap.enabled = true;

const sunLight = addLights(scene, orbitalScales);
const controls = setupControls(camera, renderer.domElement, orbitalScales);

if (!solarSystemData.length) loadingScreen.textContent = 'No data to load.';
const celestialBodies = createBodies(scene, solarSystemData, orbitalScales, sunLight);

loadingScreen.style.opacity='0'; setTimeout(()=>loadingScreen.style.display='none',500);

window.addEventListener('resize', ()=>{
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

setupInteraction(canvas, scene, camera, celestialBodies, infoElements);
animateLoop(renderer, scene, camera, controls, celestialBodies, orbitalScales);