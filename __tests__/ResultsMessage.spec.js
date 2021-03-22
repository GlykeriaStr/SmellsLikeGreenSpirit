import resultsMessage from '../src/logic/ResultsMessage';

describe('ResultsMessage', () => {
  const compliment = "Well done! Thanks for thinking about the planet"

  it('Compliments user if they have 0 emissions', () => {
    expect(resultsMessage(0)).toEqual(compliment);
  });


});