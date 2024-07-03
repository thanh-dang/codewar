function rectangleRotation(a, b) {
  const c = Math.sqrt(2);
  let l = Math.floor(a / c) + 1;
  let s = Math.floor(b / c) + 1;
  return (s * l + (s - 1) * (l - 1)) % 2 == 1
    ? s * l + (s - 1) * (l - 1)
    : s * l + (s - 1) * (l - 1) - 1;
}

rectangleRotation(8, 6);
