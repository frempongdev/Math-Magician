// eslint-disable-next-line import/extensions
import calculate from '../logic/calculate.js';

describe('calculate', () => {
  test('should set the next value to 0 when given the "0" button', () => {
    const state = { total: 0, next: null, operation: null };
    const result = calculate(state, '0');
    expect(result).toEqual({ total: null, next: '0', operation: null });
  });

  test('should add a decimal point to the next value when given the "." button', () => {
    const state = { total: 0, next: '3', operation: null };
    const result = calculate(state, '.');
    expect(result).toEqual({ total: 0, next: '3.', operation: null });
  });
});
