function sumStrings(a, b) {
  const arr1 = a.split("").reverse();
  const arr2 = b.split("").reverse();

  let rs = "";
  let remember = 0;

  const num1 = arr1.length > arr2.length ? arr1 : arr2;
  const num2 = arr1.length > arr2.length ? arr2 : arr1;

  for (let i = 0; i < num1.length; i++) {
    let c = +(num2[i] ? num2[i] : 0) + +num1[i] + remember;
    remember = 0;
    if (c >= 10) {
      let d = c % 10;
      rs = rs + `${+d + remember}`;
      remember = 1;
    } else {
      rs = rs + `${+c}`;
    }
  }

  if (remember) {
    return (rs + "1").split("").reverse().join("");
  }
  let keep = 0;
  let u = rs.split("").reverse();
  for (let i = 0; i < u.length; i++) {
    if (+u[i] === 0 && keep === 0) {
      u.shift();
    }
    keep = keep + 1;
  }
  return u.join("");
}
