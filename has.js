function hasInbuilt(prop, obj) {
  return obj.hasOwnProperty(prop);
}

function has(prop, obj) {
  for (let key in obj) {
    if (key === prop) return true;
  }
  return false;
}
