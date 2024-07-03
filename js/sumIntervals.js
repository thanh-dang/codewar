function sumIntervals(ar) {
  ar.sort((a, b) => a[0] - b[0]);
  console.log(ar);
  let r = ar[0][1] - ar[0][0];
  if (ar.length === 1) {
    return r;
  }
  for (let i = 0; i < ar.length - 1; i++) {
    if (ar[i][1] >= ar[i + 1][1]) {
      ar[i + 1] = ar[i];
    }
    if (ar[i][1] < ar[i + 1][1] && ar[i][1] >= ar[i + 1][0]) {
      r = r + ar[i + 1][1] - ar[i][1];
    }
    if (ar[i][1] < ar[i + 1][0]) {
      r = r + ar[i + 1][1] - ar[i + 1][0];
    }
  }

  return r;
}
