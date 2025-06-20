export function animateLoop(renderer, scene, camera, controls, celestialBodies, orbitalScales) {
  let lastTime = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    now *= 0.001;
    const dt = now - lastTime;
    lastTime = now;
    if (!isNaN(dt) && dt>0 && dt<0.2) {
      const baseOrb = orbitalScales.timeScale*5;
      const baseRot = orbitalScales.timeScale*20;
      celestialBodies.forEach(b => {
        if (b.userData.rotationSpeedFactor) b.rotation.y += b.userData.rotationSpeedFactor * baseRot * dt;
        if (!b.userData.isStar) {
          const adj = b.userData.orbitalRadiusAU*0.4+0.6;
          const eff = b.userData.orbitalSpeedFactor * baseOrb * dt / adj;
          b.userData.angle += eff;
          b.position.x = b.userData.orbitalRadiusScene*Math.cos(b.userData.angle);
          b.position.z = b.userData.orbitalRadiusScene*Math.sin(b.userData.angle);
        }
      });
    }
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(loop);
}