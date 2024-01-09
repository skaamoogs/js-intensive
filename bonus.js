Function.prototype.myBind = function (thisArg, ...args) {
  const wrapper = {
    ...thisArg,
    func: this,
  };

  return function (...params) {
    wrapper.func(...args, ...params);
  };
};
