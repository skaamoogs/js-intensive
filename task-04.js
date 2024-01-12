function doSmth() {
  return Promise.resolve("123");
}
doSmth()
  .then(function (a) {
    console.log("1", a); //
    return a;
  })
  .then(function (b) {
    console.log("2", b);

    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err);
  })
  .then(function (c) {
    console.log("4", c);
    return c;
  });

/**
 * 1. Промис promiseTwo резолвится со значением '123'.
 * 2. Выводится в консоль: '1' '123'.
 * Возвращается промис, который будет зарезолвлен со значением '123'.
 * 3. Выводится в консоль: '2' '123'. Возвращается промис,
 * которй будет отклонен со значением "321".
 * 4. Вызывается колбэк из catch, т.к. предыдущий промис был отклонен.
 * В консоль выводится "3" "321". Возвращается промис, который будет зарезолвлен
 * со значением undefined.
 * 5. В консоль выводится "4 undefined".
 */
