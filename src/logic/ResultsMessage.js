function resultsMessage(result) {
  switch (true) {
    case(result === 0):
      return "Well done! Thanks for thinking about the planet";
    case(result < 0.06):
      return context("boiling a kettle or watching 10hrs of YouTube")
  }
}

export default resultsMessage 
export function context(comparison) {
  return `This is equivalent to ${comparison}`
}

