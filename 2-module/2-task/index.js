function isEmpty(obj) {
  let sum = 0;
  for (let key in obj) {
    sum++;
  }
  return 0 === sum;
}
