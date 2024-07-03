// Defuse all of the Bombs!
Bomb.diffuse(42);

console.log(Bomb.diffuse());
console.log(Bomb);

console.log(Bomb.diffuse.toString());

for (let i = 0; i > 0; i++) {
  console.log(Bomb.diffuse(42));
}
while (Bomb.hint === "just keep trying") {
  console.log(Bomb.diffuse(42));
}

// console.log(global)
console.log(global);
console.log(Bomb.diffuse(global.BombKey));

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());
// Bomb.diffuse = function(){
//         try{
//           if(true){
//             next(step);
//           }
//         }catch(err){}
//       }
function diffuseTheBomb() {
  return true;
}
Bomb.diffuse();

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());
Bomb.diffuse(3.14159);

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());

let date = new Date();
date.setFullYear(date.getFullYear() - 4);
Bomb.diffuse(date);

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());

const obj = {
  key: 43,
};
Object.freeze(obj);

Bomb.diffuse(obj);

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());

let th = {
  a: true,
  func: function () {
    let i = this.a ? 9 : 11;
    this.a = !this.a;
    return i;
  },
};

let ok = function () {
  let a = true;
  this.ratOk = function () {
    let i = a ? 9 : 11;
    a = !a;
    return i;
  };
};
let Obj = function () {
  var flag = false;

  this.valueOf = function () {
    let i = flag ? 11 : 9;
    flag = true;
    return i;
  };
};
Bomb.diffuse(new Obj());

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());

let a = false;

const thanh = () => {
  let i = a ? 1 : 0.5;
  a = true;
  return i;
};

Math.random = thanh;
Bomb.diffuse(42);

console.log("--------");
console.log("--------");

console.log(Bomb);
console.log(Bomb.diffuse.toString());

Array.prototype.valueOf = function () {
  return this.reduce((a, b) => a + b, 0);
};
console.log(Array.prototype.valueOf.toString());
console.log([1, 2, 3] + [3] + [3, 4, 5, 6, 7, 8] == 42);
Bomb.diffuse(Buffer.from("yes", "ascii").toString("base64"));
