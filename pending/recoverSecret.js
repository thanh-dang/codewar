const triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

// whatisup;

let triplets = (triplets) => {
  const a = new Set();
  triplets.forEach((ele) => {
    a.add(ele[0] + ele[1]);
    a.add(ele[1] + ele[2]);
  });
  console.log(a);
};

triplets(triplets1);
