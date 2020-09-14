
const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {

  let isHabitable=false;
  if ((star.spectralClass === “K” || star.spectralClass === “M”)) {
    && (planet.radius === 1 && planet.mass === 1)
    && (planet.mass < 3)
    && (planet.habitalZone)
    && (planet.rotationStability) || (planet.mass < 0.5 && planet.radius > 1)  
    isHabitable = true
   else {
    isHabitable = false;
   }
  return isHabitable;


// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
