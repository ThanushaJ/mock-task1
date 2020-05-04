// hasPath(["a", "b"], { a: { b: 2 } }); // => true
// hasPath(["a", "b"], { a: { b: undefined } }); // => true
// hasPath(["a", "b"], { a: { c: 2 } }); // => false
// hasPath(["a", "b"], {}); // => false

let hasPath = (path, obj) => {
  let keyList = [];
  let result = false;
  let finalKeys = getKeys(obj, keyList);
  finalKeys.forEach((element, index) => {
    if (path[index] === finalKeys[index]) {
      result = true;
    }
  });
  return result;
};

let getKeys = (obj, keyList) => {
  for (let key in obj) {
    keyList.push(key);

    if (typeof obj[key] === "object") {
      getKeys(obj[key], keyList);
    }
  }
  return keyList;
};
