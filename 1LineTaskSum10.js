const sum10 = (s) => {
  console.log(
    s
      .replace(/[a-z]/g, "")
      .replace(/\?\?\?(\d)\?\?\?/g, (_, e) => `???${e + e}???`)
  );
  return (
    s
      .replace(/[a-z]/g, "")
      .replace(/\?\?\?(\d)\?\?\?/g, (_, e) => `???${e + e}???`)
      .replace(/(\d)\?\?\?(\d)/g, (_, e, f) => (+e + +f == 10 ? "" : 1)) == ""
  );
};

sum10("arrb6???4xxbl5???eee5abc");
