export const orbitalScales = {
    distanceFactor: 50, // Increased slightly for more spacing
    sizeFactor: 1,   // Slightly larger planets for visibility
    timeScale: 0.05  // Controls the overall speed of orbits and rotations
};

// Data for display & simulation scaling
export const solarSystemData = [
    {
        name: "Sun",
        radiusKm: 695500,
        visualRadius: 12 * orbitalScales.sizeFactor,
        color: 0xffcc00, 
        isStar: true,
        orbitalPeriodDisplay: "N/A",
        distanceFromSunDisplay: "N/A",
        atmosphericComposition: "Hydrogen (approx. 75%), Helium (approx. 24%)",
        moonsDisplay: "N/A (Planets)",
        orbitalSpeedFactor: 0,
        rotationSpeedFactor: 0.0005, // Slow rotation for the Sun
    },
    {
        name: "Mercury",
        radiusKm: 2439.7,
        visualRadius: 0.38 * orbitalScales.sizeFactor * 5, // Enhanced size for small planets
        color: 0xaaaaaa, // Slightly lighter gray
        orbitalRadiusAU: 0.39,
        orbitalSpeedFactor: 47.87 / 29.78, // Relative to Earth's orbital speed
        rotationSpeedFactor: 0.0017, // Days for one rotation / Earth days for one rotation (approx)
        distanceFromSunDisplay: "57.9 million km",
        orbitalPeriodDisplay: "88 Earth days",
        atmosphericComposition: "Minimal: Oxygen, Sodium, Hydrogen, Helium, Potassium",
        moonsDisplay: "0",
    },
    {
        name: "Venus",
        radiusKm: 6051.8,
        visualRadius: 0.95 * orbitalScales.sizeFactor * 5, // Enhanced size
        color: 0xfff8c0, 
        orbitalRadiusAU: 0.72,
        orbitalSpeedFactor: 35.02 / 29.78,
        rotationSpeedFactor: -0.00069, // Retrograde rotation
        distanceFromSunDisplay: "108.2 million km",
        orbitalPeriodDisplay: "225 Earth days",
        atmosphericComposition: "Carbon Dioxide (96.5%), Nitrogen (3.5%)",
        moonsDisplay: "0",
    },
    {
        name: "Earth",
        radiusKm: 6371,
        visualRadius: 1 * orbitalScales.sizeFactor * 5, // Enhanced size
        color: 0x0077ff, 
        orbitalRadiusAU: 1.0,
        orbitalSpeedFactor: 1.0, // Baseline for orbital speed
        rotationSpeedFactor: 0.0041,
        distanceFromSunDisplay: "149.6 million km",
        orbitalPeriodDisplay: "365.25 Earth days",
        atmosphericComposition: "Nitrogen (78%), Oxygen (21%), Argon (0.9%)",
        moonsDisplay: "1 (The Moon)",
    },
    {
        name: "Mars",
        radiusKm: 3389.5,
        visualRadius: 0.53 * orbitalScales.sizeFactor * 5, // Enhanced size
        color: 0xff5733, 
        orbitalRadiusAU: 1.52,
        orbitalSpeedFactor: 24.07 / 29.78,
        rotationSpeedFactor: 0.0040,
        distanceFromSunDisplay: "227.9 million km",
        orbitalPeriodDisplay: "687 Earth days",
        atmosphericComposition: "Carbon Dioxide (95%), Nitrogen (2.7%), Argon (1.6%)",
        moonsDisplay: "2 (Phobos, Deimos)",
    },
    {
        name: "Jupiter",
        radiusKm: 69911,
        visualRadius: 11.2 * orbitalScales.sizeFactor * 1.8, // Gas giants scaled differently
        color: 0xffa500, 
        orbitalRadiusAU: 5.2,
        orbitalSpeedFactor: 13.07 / 29.78,
        rotationSpeedFactor: 0.010, // Fast rotation
        distanceFromSunDisplay: "778.5 million km",
        orbitalPeriodDisplay: "11.86 Earth years",
        atmosphericComposition: "Hydrogen (approx. 89%), Helium (approx. 10%)",
        moonsDisplay: "95 (e.g., Io, Europa, Ganymede, Callisto)",
    },
    {
        name: "Saturn",
        radiusKm: 58232,
        visualRadius: 9.45 * orbitalScales.sizeFactor * 1.8,
        color: 0xf0e68c, 
        orbitalRadiusAU: 9.58,
        orbitalSpeedFactor: 9.69 / 29.78,
        rotationSpeedFactor: 0.0093,
        distanceFromSunDisplay: "1.434 billion km",
        orbitalPeriodDisplay: "29.45 Earth years",
        atmosphericComposition: "Hydrogen (approx. 96%), Helium (approx. 3%)",
        moonsDisplay: "146 (e.g., Titan, Rhea)",
    },
    {
        name: "Uranus",
        radiusKm: 25362,
        visualRadius: 4.0 * orbitalScales.sizeFactor * 1.8,
        color: 0xadd8e6, 
        orbitalRadiusAU: 19.22,
        orbitalSpeedFactor: 6.81 / 29.78,
        rotationSpeedFactor: -0.0068, // Retrograde and tilted
        distanceFromSunDisplay: "2.871 billion km",
        orbitalPeriodDisplay: "84 Earth years",
        atmosphericComposition: "Hydrogen (approx. 83%), Helium (approx. 15%), Methane (approx. 2.3%)",
        moonsDisplay: "27 (e.g., Titania, Oberon)",
    },
    {
        name: "Neptune",
        radiusKm: 24622,
        visualRadius: 3.88 * orbitalScales.sizeFactor * 1.8,
        color: 0x00008b, 
        orbitalRadiusAU: 30.05,
        orbitalSpeedFactor: 5.43 / 29.78,
        rotationSpeedFactor: 0.0060,
        distanceFromSunDisplay: "4.495 billion km",
        orbitalPeriodDisplay: "164.8 Earth years",
        atmosphericComposition: "Hydrogen (approx. 80%), Helium (approx. 19%), Methane (approx. 1.5%)",
        moonsDisplay: "14 (e.g., Triton)",
    },
];
