function pathFinder(maze) {
  let arr = maze.split("\n");
  let n = arr.length;
  let m = [];
  let k = [];
  k.push([0, 0]);

  arr.forEach((item) => {
    m.push(item.split(""));
  });

  let check = false;
  while (k.length) {
    let item = k.pop();
    let x = item[1];
    let y = item[0];

    if (x === n - 1 && y === n - 1) {
      check = true;
      break;
    }
    if (m[y][x] === "W") continue;

    // phải
    if (
      n - 1 >= y &&
      n - 1 >= x + 1 &&
      m[y][x + 1] === "." &&
      m[y][x + 1] !== "W"
    ) {
      k.unshift([y, x + 1]);
    }

    // xuống
    if (
      n - 1 >= y + 1 &&
      n - 1 >= x &&
      m[y + 1][x] === "." &&
      m[y + 1][x] !== "W"
    ) {
      k.unshift([y + 1, x]);
    }

    // lên
    if (y - 1 >= 0 && x >= 0 && m[y - 1][x] === "." && m[y - 1][x] !== "W") {
      k.unshift([y - 1, x]);
    }

    // trái
    if (y >= 0 && x - 1 >= 0 && m[y][x - 1] === "." && m[y][x - 1] !== "W") {
      k.unshift([y, x - 1]);
    }

    m[y][x] = "W";
  }

  return check;
}
