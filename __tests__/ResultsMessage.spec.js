import resultsMessage  from '../src/logic/ResultsMessage';

describe('ResultsMessage', () => {
  const compliment = "Well done! Thanks for thinking about the planet"
  const kettleTube = context("boiling a kettle or watching 10hrs of YouTube")
  const gasHob = context("an average meal being cooked on the hob")
  const washingMachine = context("putting one load of laundry in the washing machine")
  const microwave = context("using the micro wave")
  
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
});

function context(comparison) {
  return `This is equivalent to ${comparison}`
}