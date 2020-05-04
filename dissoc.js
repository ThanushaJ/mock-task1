//dissoc("b", { a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}

function dissoc(prop, obj) {
  //   let result = {};
  let { ...result } = obj;
  if (obj.hasOwnProperty(prop)) {
    // for (let key in obj) {
    //   result[key] = obj[key];
    // }
    delete result[prop];
    return result;
  } else {
    return result;
  }
}
