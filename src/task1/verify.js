const openedBrackets = ['[', '(', '<'];
const closedBrackets = [']', ')', '>'];
const bracketsMap = {
  ']': '[',
  ')': '(',
  '>': '<'
}

const verify = (str) => {
  const bracketStack = [];
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    if (openedBrackets.some((bracket) => bracket === symbol)) {
      bracketStack.push(symbol);
      continue;
    }
    if (closedBrackets.some((bracket) => bracket === symbol)) {
      if (bracketStack.length === 0) return 0;
      const correctBracket = bracketStack.pop();
      if (correctBracket !== bracketsMap[symbol]) return 0;
    }
  }

  return bracketStack.length === 0 ? 1 : 0;
}

module.exports = verify;