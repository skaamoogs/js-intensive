function deepEqual(obj1, obj2) {
  if (fullTypeOf(obj1) !== fullTypeOf(obj2)) {
    return false;
  }

  if (typeof obj1 !== "object" || obj1 === null) {
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    return Object.keys(obj1).every((prop) => deepEqual(obj1[prop], obj2[prop]));
  }

  return false;
}

function fullTypeOf(val) {
  return Object.prototype.toString
    .call(val)
    .split(" ")[1]
    .toLowerCase()
    .slice(0, -1);
}
