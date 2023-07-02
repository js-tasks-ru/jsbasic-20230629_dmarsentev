function truncate(str, maxlength) {
  const suffix = "…";
  if (str.length <= maxlength) { return str; }
  const prefix = str.substring(0, maxlength - 1);
  return prefix + suffix;
}
