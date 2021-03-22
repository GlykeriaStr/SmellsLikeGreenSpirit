function resultsMessage(result) {
  switch (true) {
    case(result === 0):
      return "Well done! Thanks for thinking about the planet.";
    case(result < 0.06):
      return context("boiling a kettle or watching 10hrs of YouTube")
    case(result < 0.2):
      return context("an average meal being cooked on the hob")
    case(result < 0.3):
      return context("putting one load of laundry in the washing machine")
    case(result < 0.5):
      return context("using the microwave")
    case(result < 0.7):
      return context("using the dishwasher")
    case(result < 2):
      return context("a weekend watching TV")
    case(result < 5):
      return context("showering every day for a week or producing 1L of dairy milk")
    case(result < 10):
      return context("a 4hr train journey or producing a block of cheese")
    case(result < 20):
      return context("producing a beef steak")
    case(result < 50):
      return context("a round trip to France using the Eurostar")
    case(result < 100):
      return context("London to Dublin by train/ferry or a flight from London to Leeds")
  }
}

export default resultsMessage 

function context(comparison) {
  return `This is equivalent to ${comparison}.`
}

