// function encode(s) {
//   let rs = [];
//   function deQuy(s) {
//     if (rs.length === s.length) {
//       return s;
//     }
//     let chars = s.split("");
//     chars.push(chars.shift());
//     rs.push(chars.join(""));
//     return deQuy(chars.join(""));
//   }
//   deQuy(s);

//   z = rs.sort();
//   index = z.indexOf(s);

//   return [z.map((i) => i[i.length - 1]).join(""), index];
// }

function decode(s, i) {
  chars = s.split("").sort().join("");

  let rs = chars[i];
  lastChar = s[i];
  let rsArr = [];
  for (let k = 0; k < s.length; k++) {
    if (k !== i) {
      rsArr.push({ f: s[k], l: chars[k] });
    }
  }
  console.log(rsArr);
  let count = 0;

  for (let j = 0; j < s.length - 3; j++) {
    let index = rsArr.findIndex((ele) => ele.f === rs[count]);
    // console.log(rs, "***************************");

    rs = rs + rsArr.find((ele) => ele.f === rs[count]).l;
    rsArr = [...rsArr.slice(0, index), ...rsArr.slice(index + 1)];
    // console.log(rsArr);
    count = count + 1;
  }

  console.log(rs);
}

// decode("nnbbraaaa", 4);
decode("ww MYeelllloo", 1);

// encode("bananabar");

// { f: 'a', l: 'n' },
// { f: 'a', l: 'n' },
// { f: 'a', l: 'b' },
// { f: 'a', l: 'b' },
// { f: 'b', l: 'a' },
// { f: 'n', l: 'a' },
// { f: 'n', l: 'a' },
// { f: 'r', l: 'a' }
