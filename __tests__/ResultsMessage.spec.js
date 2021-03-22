import resultsMessage  from '../src/logic/ResultsMessage';

describe('ResultsMessage', () => {
  const compliment = "Well done! Thanks for thinking about the planet"
  const kettleTube = context("boiling a kettle or watching 10hrs of YouTube")
  
  it('Compliments user if they have 0 emissions', () => {
    expect(resultsMessage(0)).toEqual(compliment);
  });

  it('Compares users emissions to boiling the kettle', () => {
    expect(resultsMessage(0.05)).toEqual(kettleTube);
  });
});

function context(comparison) {
  return `This is equivalent to ${comparison}`
}