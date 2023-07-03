function sumSalary(salaries) {
  let sum = 0;
  let special = [NaN, Infinity, -Infinity];
  for (let key in salaries) {
    let typeOfSalaries = typeof salaries[key];
    if ('number' === typeOfSalaries && !special.includes(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}
