function sudoku(puzzle) {
  let row = [[], [], [], [], [], [], [], [], []];
  let col = [[], [], [], [], [], [], [], [], []];
  let square3x3 = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
  for (let rowIndex = 0; rowIndex < puzzle.length; rowIndex++) {
    for (let colIndex = 0; colIndex < puzzle[rowIndex].length; colIndex++) {
      if (puzzle[rowIndex][colIndex] !== 0) {
        let num = puzzle[rowIndex][colIndex] - 1;
        row[rowIndex][num] = true;
        col[colIndex][num] = true;
        square3x3[Math.floor(rowIndex / 3)][Math.floor(colIndex / 3)][
          num
        ] = true;
      }
    }
  }
  function logic(rowIndex, colIndex, puzzle) {
    if (rowIndex < 9 && colIndex < 9) {
      if (puzzle[rowIndex][colIndex] == 0) {
        for (let value = 0; value < 9; value++) {
          if (
            !row[rowIndex][value] &&
            !col[colIndex][value] &&
            !square3x3[Math.floor(rowIndex / 3)][Math.floor(colIndex / 3)][
              value
            ]
          ) {
            row[rowIndex][value] = true;
            col[colIndex][value] = true;
            square3x3[Math.floor(rowIndex / 3)][Math.floor(colIndex / 3)][
              value
            ] = true;
            puzzle[rowIndex][colIndex] = value + 1;
            let result = logic(rowIndex, colIndex + 1, puzzle);
            if (result) return result;
            col[colIndex][value] = false;
            row[rowIndex][value] = false;
            square3x3[Math.floor(rowIndex / 3)][Math.floor(colIndex / 3)][
              value
            ] = false;
            puzzle[rowIndex][colIndex] = 0;
          }
        }
        return undefined;
      } else {
        return logic(rowIndex, colIndex + 1, puzzle);
      }
    } else if (rowIndex < 9 && colIndex >= 9) {
      return logic(rowIndex + 1, 0, puzzle);
    } else {
      return puzzle;
    }
  }
  a = logic(0, 0, puzzle);
  console.log(a, "--------------------");
  return a;
}

sudoku([
  [0, 0, 9, 2, 0, 1, 3, 0, 0],
  [0, 1, 0, 0, 5, 0, 0, 9, 0],
  [6, 0, 5, 0, 0, 9, 4, 0, 8],
  [5, 0, 4, 0, 0, 3, 8, 0, 9],
  [0, 3, 0, 0, 9, 0, 0, 0, 0],
  [2, 0, 0, 8, 0, 7, 6, 0, 5],
  [9, 0, 0, 6, 0, 4, 7, 0, 1],
  [0, 7, 0, 0, 1, 0, 0, 4, 0],
  [1, 0, 3, 7, 0, 0, 0, 0, 2],
]);
// console.log(
//   sudoku([
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9],
//   ])
// );
