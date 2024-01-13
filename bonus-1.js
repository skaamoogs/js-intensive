Promise.resolve()
  .then(function a1() {
    console.log("a: 1");
  })
  .then(function a2() {
    setTimeout(() => console.log("timeout 2"));
    console.log("a: 2");
  })
  .then(function a3() {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 3");
  })
  .then(function a4() {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 4");
  });

new Promise(function b(res, rej) {
  console.log("b");
  rej(new Error("123"));
})
  .then(console.log("b 1"))
  .then(
    function b2res() {
      console.log("b 2");
    },
    function b2rej() {
      console.log("b");
    }
  )
  .catch(function b3() {
    console.log("b 3");
  })
  .then(function b4() {
    console.log("b 4");
  });
