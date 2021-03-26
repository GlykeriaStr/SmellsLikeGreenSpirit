function emissionsCalculator(co2Emissions, distance) {
  let result = (co2Emissions * distance) / 1000;
  return parseFloat(result.toFixed(2));
}

export default emissionsCalculator;
