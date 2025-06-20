import * as THREE from 'three';
export function setupInteraction(canvas, scene, camera, bodies, elems) {
  const { infoCard, planetNameEl, planetDiameterEl, planetDistanceEl, planetOrbitEl, planetAtmosphereEl, planetMoonsEl, closeBtn } = elems;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  canvas.addEventListener('click', e => {
    const r=canvas.getBoundingClientRect();
    mouse.x = ((e.clientX-r.left)/r.width)*2-1;
    mouse.y = -((e.clientY-r.top)/r.height)*2+1;

    raycaster.setFromCamera(mouse,camera);
    const hits = raycaster.intersectObjects(bodies,true);
    if(hits.length){
      let obj=hits[0].object;
      while(obj.parent && obj.parent!==scene && !obj.userData.name) obj=obj.parent;
      const d=obj.userData;
      planetNameEl.textContent=d.name;
      planetDiameterEl.textContent=`${(d.radiusKm*2).toLocaleString()} km`;
      planetDistanceEl.textContent=d.distanceFromSunDisplay||"N/A";
      planetOrbitEl.textContent=d.orbitalPeriodDisplay||"N/A";
      planetAtmosphereEl.textContent=d.atmosphericComposition||"N/A";
      planetMoonsEl.textContent=d.moonsDisplay;
      infoCard.classList.add('visible');
    } else infoCard.classList.remove('visible');
  });
  closeBtn.addEventListener('click', ()=> infoCard.classList.remove('visible'));
}