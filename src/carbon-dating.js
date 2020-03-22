const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = parseFloat(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = (Math.log(MODERN_ACTIVITY/num))/k
  if (typeof(sampleActivity) !== 'string' ||
    num > MODERN_ACTIVITY ||
    num <= 0 ||
    isNaN(num)
  ) {
    return false
  }
  else {
    return (Math.ceil(t))
  }
};

