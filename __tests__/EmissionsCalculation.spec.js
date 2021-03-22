import emissionsCalculator from '../src/logic/EmissionsCalculation';

describe('EmissionsCalculator', () => {
  it('return 1kg for 1, 1000', () => {
    expect(emissionsCalculator(1, 1000)).toEqual(1);
  });

  it('returns 10kg for 1, 10000', () => {
    expect(emissionsCalculator(1, 10000)).toEqual(10);
  });

  it('returns 100kg for 10, 10000', () => {
    expect(emissionsCalculator(10, 10000)).toEqual(100);
  });
});
