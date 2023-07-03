function checkSpam(str) {
  const patterns = ['1xBet', 'XXX'];
  const s = str.toLocaleLowerCase();
  for (p of patterns) {
    if (s.includes(p.toLocaleLowerCase())) {
      return true;
    }
  }
  return false;
}
