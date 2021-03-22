export function resultsMessage(result) {
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
      return context("a trip from London to Dublin by train/ferry or a flight from London to Leeds")
    case(result < 200):
      return context("a flight from London Heathrow to Edinburgh")
    case(result < 300):
      return context("a flight from London Heathrow to Lisbon")
    case(result < 400):
      return context("a single bitcoin transaction")
    case(result < 500):
      return context("the annual per capita CO2 emissions for a Bangladeshi person")
    case(result < 800):
      return context("the annual per capita CO2 emissions for Cambodia")
    case(result < 1000):
      return context("the annual per capita CO2 emissions for Nicaragua")
    case(result >= 1000):
      return "Unless this journey is essential, please re-consider!"
  }
}

export function context(comparison) {
  return `This is equivalent to ${comparison}.`
}

