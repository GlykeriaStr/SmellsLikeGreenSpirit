import emissionsCalculator from '../src/logic/EmissionsCalculation';


describe('EmissionsCalculator', () => {
  it('return 1g for 1, 1', () => {
    expect(emissionsCalculator(1, 1)).toEqual(1);
  });

  it("returns 100 for 100, 1", () => {
    expect(emissionsCalculator(100, 1)).toEqual(100);
  })
});

