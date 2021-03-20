function milesToKilometres(value, distance) {
  if (value) {
    return Math.round(distance * 1.609);
  }

  return distance;
}

export default milesToKilometres;
