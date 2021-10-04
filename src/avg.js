function avg(array) {
  if (array === undefined) {
    throw new Error('No parameter provided')
  }

  if (array.length === 0) {
    return 0;
  }

  return array.reduce((sum, num) =>
    sum + num / array.length, 0);
}