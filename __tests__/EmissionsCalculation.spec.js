import emissionsCalculator from '../src/logic/EmissionsCalculation';


describe('EmissionsCalculator', () => {
  it('return 1g for 1, 1', () => {
    expect(emissionsCalculator(1, 1)).toEqual(1);
  });
});