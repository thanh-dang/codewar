function smaller(arr) {
  // sortArr = arr.sort((a, b) => b - a);
  let count = [];
  let min = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]] += 1;
    }
  }

  let rs = 0;
  sumArray = [];
  xxx = [];
  for (let i = 0; i < arr.length; i++) {
    sumArray[i] = rs;
    rs = rs + (count[i] === undefined ? 0 : +count[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(count[arr[i]]);
    if (count[arr[i]] > 0) {
      xxx[i] = sumArray[arr[i]];
      count[arr[i]] = count[arr[i]] - 1;
      console.log(count[arr[i]], "-----------------------");
    } else {
      xxx[i] = 0;
    }
  }
  console.log(xxx);
}

smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]);
