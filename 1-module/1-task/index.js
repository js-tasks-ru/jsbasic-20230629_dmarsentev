function factorial(n) {
  if (0 == n) return 1;
  let factorial = 1;
  for ( i = 1; i <= n; i++ ) {
    factorial = factorial * i;
  }
  return factorial;
}
