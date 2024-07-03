function triangleType(a, b, c) {
  let [d, e, f] = [a, b, c].sort((a, b) => b - a);
  console.log(d, e, f);
  return d >= e + f
    ? 0
    : d ** 2 === e ** 2 + f ** 2
    ? 2
    : d ** 2 < e ** 2 + f ** 2
    ? 1
    : 3;
}
