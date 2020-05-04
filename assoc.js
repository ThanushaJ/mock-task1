// const result = assoc("c", 3, { a: 1, b: 2 });
// console.log(result); //=> {a: 1, b: 2, c: 3}

function assoc(x, y, z) {
  let result = {};

  for (let key of Object.keys(z)) {
    result[key] = z[key];
  }
  result[x] = y;
  return result;
}
