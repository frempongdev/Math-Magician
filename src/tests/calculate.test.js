// eslint-disable-next-line import/extensions
import calculate from '../logic/calculate.js';

describe('calculate', () => {
  test('should add a decimal point to the next value when given the "." button', () => {
    const state = { total: 0, next: '3', operation: null };
    const result = calculate(state, '.');
    expect(result).toEqual({ total: 0, next: '3.', operation: null });
  });

  it('should return the initial state when given the AC button', () => {
    const initialState = { total: 0, next: null, operation: null };
    const result = calculate({}, 'AC');
    expect(result).toEqual(initialState);
  });
});
