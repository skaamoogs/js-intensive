Promise.resolve()
  .then(() => console.log("a: 1"))
  .then(() => {
    setTimeout(() => console.log("timeout 2"));
    console.log("a: 2");
  })
  .then(() => {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 3");
  });

new Promise((res, rej) => {
  console.log("b");
  rej(new Error("123"));
})
  .then(console.log("b 1"))
  .then(
    () => console.log("b 2"),
    () => console.log("b")
  )
  .catch(() => console.log("b 3"))
  .then(() => console.log("b 4"));

/**
 * 1. Создается промис1 и тут же резолвится.
 * 2. Создается промис2. Код внутри промиса выполняется синхронно
 * сразу же после создания промиса. В консоль выводится "b".
 * 3. В очередь микрозадач попадает console.log('a:1')
 */
