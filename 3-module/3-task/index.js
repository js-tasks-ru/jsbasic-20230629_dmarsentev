function camelize(str) {
  if (str === null) return "";
  if (str === "") return str;
  return str.split("-")
             .map((word, index) => {
                 if (index === 0) { return word; }
                 let prefix = word.substring(0, 1).toLocaleUpperCase();
                 let suffix = word.substring(1);
                 return prefix + suffix;
             }).join("");
}
