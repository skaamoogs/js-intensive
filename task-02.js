const obj = { a: 1, b: { c: 2 } };

const objCopy1 = { ...obj };
const objCopy2 = Object.assign({}, obj);
const objCopy3 = Object.fromEntries(Object.entries(obj));
