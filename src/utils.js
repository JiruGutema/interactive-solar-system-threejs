import * as THREE from 'three';
// Helper function to create a simple glow texture for the Sun
export function createGlowTexture(color) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0.1, `rgba(${new THREE.Color(color).r * 255}, ${new THREE.Color(color).g * 255}, ${new THREE.Color(color).b * 255}, 1)`);
    gradient.addColorStop(0.4, `rgba(${new THREE.Color(color).r * 255}, ${new THREE.Color(color).g * 255}, ${new THREE.Color(color).b * 255}, 0.5)`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
}