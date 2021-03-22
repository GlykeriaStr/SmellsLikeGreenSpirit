import resultsMessage  from '../src/logic/ResultsMessage';

describe('ResultsMessage', () => {
  const compliment = "Well done! Thanks for thinking about the planet."
  const kettleTube = context("boiling a kettle or watching 10hrs of YouTube")
  const gasHob = context("an average meal being cooked on the hob")
  const washingMachine = context("putting one load of laundry in the washing machine")
  const microwave = context("using the microwave")
  const dishwasher = context("using the dishwasher")
  const weekendTV = context("a weekend watching TV")
  const showering = context("showering every day for a week or producing 1L of dairy milk")
  const trainJourney = context("a 4hr train journey or producing a block of cheese")
  const beefSteak = context("producing a beef steak")
  const eurostar = context("a round trip to France using the Eurostar")
  const londonDublin = context("a trip from London to Dublin by train/ferry or a flight from London to Leeds")
  const londonEdinburgh = context("a flight from London Heathrow to Edinburgh")
  const londonLisbon = context("a flight from London Heathrow to Lisbon")
  const bitcoin = context("a single bitcoin transaction")
  const bangladesh = context("the annual per capita CO2 emissions for a Bangladeshi person")
  it('Compliments user if they have 0 emissions', () => {
    expect(resultsMessage(0)).toEqual(compliment);
  });

  it('Compares users emissions to boiling the kettle', () => {
    expect(resultsMessage(0.05)).toEqual(kettleTube);
  });

  it('Compares users emissions to gas hob', () => {
    expect(resultsMessage(0.15)).toEqual(gasHob);
  });

  it('Compares users emissions to washing machine', () => {
    expect(resultsMessage(0.25)).toEqual(washingMachine);
  });

  it('Compares users emissions to microwave', () => {
    expect(resultsMessage(0.4)).toEqual(microwave);
  });

  it('Compares users emissions to dishwasher', () => {
    expect(resultsMessage(0.6)).toEqual(dishwasher)
  });

  it('Compares users emissions to a weekend of watching TV', () => {
    expect(resultsMessage(1.5)).toEqual(weekendTV)
  })

  it('Compares users emissions to showering every day for a week', () => {
    expect(resultsMessage(3.5)).toEqual(showering)
  })

  it('Compares users emissions to a 4hr train journey', () => {
    expect(resultsMessage(7.5)).toEqual(trainJourney)
  })

  it('Compares users emissions to producing a beef steak', () => {
    expect(resultsMessage(15)).toEqual(beefSteak)
  })

  it('Compares users emissions to a trip to France using the Eurostar', () => {
    expect(resultsMessage(35)).toEqual(eurostar)
  })

  it('Compares users emissions to a trip from London to Dublin using train and ferry', () => {
    expect(resultsMessage(75)).toEqual(londonDublin)
  })

  it('Compares users emissions to a trip from LHR to Edinburgh', () => {
    expect(resultsMessage(150)).toEqual(londonEdinburgh)
  })
  
  it('Compares users emissions to a trip from LHR to Lisbon', () => {
    expect(resultsMessage(250)).toEqual(londonLisbon)
  })

  it('Compares users emissions to a single bitcoin transaction', () => {
    expect(resultsMessage(350)).toEqual(bitcoin)
  })

  it('Compares users emissions to the annual per capita CO2 emissions for a Bangladeshi person', () => {
    expect(resultsMessage(450)).toEqual(bangladesh)
  })
});

function context(comparison) {
  return `This is equivalent to ${comparison}.`
}