function ucFirst(str) {
  const size = str.length;
  if (size === 0) { return ''; }
  if (size === 1) { return str.toLocaleUpperCase(); }
  const prefix = str.substring(0, 1).toLocaleUpperCase();
  const suffix = str.substring(1, size);
  return prefix + suffix;
}
