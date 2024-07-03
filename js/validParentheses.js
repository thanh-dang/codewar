function validParentheses(parens) {
  const arr = parens.split("");
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a >= 0) {
      if (arr[i] === "(") {
        a = a + 1;
      } else a = a - 1;
    } else {
      return false;
    }
  }
  if (a === 0) {
    return true;
  }
  return false;
}
