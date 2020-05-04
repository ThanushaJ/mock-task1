// concat("ABC", "DEF"); // 'ABCDEF'
// concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
// concat([], []); //=> []

function concat(arg1, arg2) {
  if (typeof arg1 !== typeof arg2) return -1;

  if (typeof arg1 === "string" || typeof arg1 === "number") {
    let result = arg1 + arg2;
    return result;
  }

  if (typeof arg1 === "object") {
    let result = [];
    // arg1.forEach((element) => {
    //   result.push(element);
    // });

    // arg2.forEach((element) => {
    //   result.push(element);
    // });

    //using Array Destructuring

    result = [...arg1];
    result.push(...arg2);

    return result;
  }
}
