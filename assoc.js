// const result = assoc("c", 3, { a: 1, b: 2 });
// console.log(result); //=> {a: 1, b: 2, c: 3}

function assoc(key, value, obj) {
  //   let result = {};

  //   for (let key of Object.keys(z)) {
  //     result[key] = z[key];
  //   }

  let { ...result } = obj;
  result[key] = value;
  return result;
}
