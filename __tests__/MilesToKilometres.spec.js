import milesToKilometres from '../src/logic/MilesToKilometres';

describe('MilesToKilometres', () => {
  it('returns the value in km when passed false and a number', () => {
    expect(milesToKilometres(false, 100)).toEqual(100);
  });

  it('returns the equivalent value in km when passed true and a number', () => {
    expect(milesToKilometres(true, 100)).toEqual(161);
  })
});
