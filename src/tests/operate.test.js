import operate from '../logic/operate';

describe('operate function', () => {
  it('returns the sum of two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('returns the difference of two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('returns the product of two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('returns the quotient of two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it('returns an error message when dividing by 0', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('returns the modulo of two numbers', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  it('returns an error message when finding modulo by 0', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate(2, 3, 'unknown')).toThrow("Unknown operation 'unknown'");
  });
});