const checkShip = (f, row, col, isShip) => {
  if (col + 1 === f.length) {
    return 0;
  }
  let long = 0;
  let c = col + 1;
  let cLeft = col - 1;
  let rUp = row - 1;
  let rDown = row + 1;

  if (cLeft >= 0) {
    if (rUp >= 0) {
      if (f[rUp][cLeft] === 1) return -1;
    }
    if (rDown <= f.length - 1) {
      if (f[rDown][cLeft] === 1) return -1;
    }
  }

  while (f[row][c] === 1) {
    isShip[row][c] = true;
    if (rUp >= 0) {
      if (f[rUp][c] === 1) return -1;
    }
    if (rDown <= f.length - 1) {
      if (f[rDown][c] === 1) return -1;
    }
    c = c + 1;
    long = long + 1;
  }

  let cRight = c + long + 1;
  if (cRight <= f.length - 1) {
    if (rUp >= 0) {
      if (f[rUp][cRight] === 1) return -1;
    }
    if (rDown <= f.length - 1) {
      if (f[rDown][cRight] === 1) return -1;
    }
  }

  return long;
};

const checkShip2 = (f, row, col, isShip) => {
  if (col + 1 === f.length) {
    return 0;
  }
  let long = 0;
  let r = row + 1;
  let rUp = row - 1;
  let cLeft = col - 1;
  let cRight = col + 1;

  if (rUp >= 0) {
    if (cLeft >= 0) {
      if (f[rUp][cLeft] === 1) return -1;
    }
    if (cRight <= f.length - 1) {
      if (f[rUp][cRight] === 1) return -1;
    }
  }

  while (f[r][col] === 1) {
    isShip[r][col] = true;
    if (cLeft >= 0) {
      if (f[r][cLeft] === 1) return -1;
    }
    if (cRight <= f.length - 1) {
      if (f[r][cRight] === 1) return -1;
    }
    r = r + 1;
    long = long + 1;
  }

  let rDown = r + long + 1;
  if (rDown <= f.length - 1) {
    if (cLeft >= 0) {
      if (f[rDown][cLeft] === 1) return -1;
    }
    if (cRight <= f.length - 1) {
      if (f[rDown][cRight] === 1) return -1;
    }
  }

  return long;
};

function validateBattlefield(f) {
  let rs = [0, 0, 0, 0];
  let isShip = [[], [], [], [], [], [], [], [], [], []];
  for (let rowIndex = 0; rowIndex < f.length; rowIndex++) {
    for (let colIndex = 0; colIndex < f[rowIndex].length; colIndex++) {
      if (isShip[rowIndex][colIndex]) {
        continue;
      }
      if (f[rowIndex][colIndex] === 1) {
        isShip[rowIndex][colIndex] = true;
        let r = checkShip(f, rowIndex, colIndex, isShip);
        let d = checkShip2(f, rowIndex, colIndex, isShip);
        if (r > 3 || d > 3) {
          return false;
        }
        rs[r > d ? r : d] = +rs[r > d ? r : d] + 1;
      }
    }
  }
  console.log(rs.join("") === "4321");
  return rs.join("") === "4321";
}
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
