Function.prototype.myBind = function (thisArg, ...args) {
  return function (...params) {
    this(...args, ...params);
  };
};

function f() {}

f.myBind();
