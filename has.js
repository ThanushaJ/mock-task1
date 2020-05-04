let hasInbuilt = (prop, obj) => {
  return obj.hasOwnProperty(prop);
};

let has = (prop, obj) => {
  for (let key in obj) {
    if (key === prop) return true;
  }
  return false;
};
