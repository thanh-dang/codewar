function dblLinear(n) {
  let ai = 0,
    bi = 0,
    eq = 0;
  let a = [1];
  while (ai + bi < n + eq) {
    var y = 2 * a[ai] + 1;
    var z = 3 * a[bi] + 1;
    if (y < z) {
      a.push(y);
      ai++;
    } else if (y > z) {
      a.push(z);
      bi++;
    } else {
      a.push(y);
      ai++;
      bi++;
      eq++;
    }
  }
  return a.pop();
}
