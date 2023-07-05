function filterRange(arr, a, b) {
  let [start, end] = [a, b];
  if (b < a) [start, end] = [b, a];
  return arr.filter(e => { return e >= start && e <= end } );
}
