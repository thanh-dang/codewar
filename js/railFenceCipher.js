function encodeRailFenceCipher(string, n) {
  if (string === "" || n < 3) {
    return "";
  }
  let rs = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    let k = i;
    let g = 2 * n - 3 + 1 - i;
    while (k <= string.length - 1) {
      row.push(string[k]);
      if (i != 0 && i != n - 1) {
        if (g > string.length - 1) {
          break;
        }
        row.push(string[g]);
        g = g + 2 * n - 3 + 1;
      }
      k = k + 2 * n - 3 + 1;
    }
    rs.push(...row);
  }
  console.log(rs.join(""));
  return rs.join("");
}

encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 4);
decodeRailFenceCipher("WIREEEDSEEEACAECVDLTNROFO", 4);

function decodeRailFenceCipher(string, n) {
  let rs = [];
  let m = 0;
  for (let j = 0; j < n; j++) {
    let g = 2 * n - j - 2;
    let i = j;
    while (i <= string.length - 1) {
      rs[i] = string[m];
      m = m + 1;
      if (j !== 0 && j !== n - 1) {
        if (g > string.length - 1) {
          break;
        }
        rs[g] = string[m];
        m = m + 1;
        g = g + 2 * n - 2;
      }
      i = i + 2 * n - 2;
    }
  }
  console.log(rs.join(""));
  return rs.join("");
}
