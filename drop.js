// drop(1, ["foo", "bar", "baz"]); //=> ['foo', 'baz']

let drop = (index, arr) => {
  let result = [];
  //   arr.forEach((element) => {
  //     result.push(element);
  //   });

  //using spread Operator
  result.push(...arr);
  result.splice(index, 1);
  return result;
};
