const func = (s, a, b) => {
  let i = s.length-1;

  while (i >= 0) {
    if (s[i] === a || s[i] === b) break;
    i--;
  }
  return i;
}

module.exports = func;