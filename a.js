const a = {
  a: {},
  b: { a: "ádasd" },
};

if (!a.a) {
  console.log(a.b);
}
