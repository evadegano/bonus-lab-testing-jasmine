describe('The function avg()', () => {
  it('should be a function', () => {
    expect(typeof avg).toBe('function');
  });

  it('should return O if an empty array is passed', () => {
    expect(avg([])).toBe(0);
  });

  it('should throw an error if no parameter is provided', () => {
    expect(() => {
      avg();
    }).toThrow(new Error('No parameter provided'));
  });

  it('should return a number', () => {
    expect(typeof avg([1, 2])).toBe('number');
  });

  it('should return the correct value', () => {
    // if array with one element is passed, sum should be equal to  that element
    expect(avg([1])).toBe(1);
    expect(avg([1, 2])).toEqual(1.5);
    expect(avg([4, 5, 6])).toBe(5);
    expect(avg([0, -2])).toBe(-1);
    expect(avg([1, 2, 3, 4, 5])).toBe(3);
  });
});