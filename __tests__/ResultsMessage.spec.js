import resultsMessage  from '../src/logic/ResultsMessage';

describe('ResultsMessage', () => {
  const compliment = "Well done! Thanks for thinking about the planet."
  const kettleTube = context("boiling a kettle or watching 10hrs of YouTube")
  const gasHob = context("an average meal being cooked on the hob")
  const washingMachine = context("putting one load of laundry in the washing machine")
  const microwave = context("using the microwave")
  const dishwasher = context("using the dishwasher")
  const weekendTV = context("a weekend watching TV")
  const showering = context("showering every day for a week")

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
});

function context(comparison) {
  return `This is equivalent to ${comparison}.`
}