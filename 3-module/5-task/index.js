function getMinMax(str) {
  return str.split(' ')
    .filter(token => !isNaN(Number(token)))
    .map(t => Number(t))
    .reduce( (acc, curr) =>
      {
      let min = curr < acc['min'] ? curr : acc['min'];
      let max = curr > acc['max'] ? curr : acc['max'];
      return { 'min': min, 'max': max};
      },
      { 'min' : +Infinity,
        'max': -Infinity
      }
    );
}
