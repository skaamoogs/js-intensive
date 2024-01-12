function logIndexWithDelay(arr) {
  const delay = 3000;
  setTimeout(
    function log(i) {
      console.log(i);
      if (i >= arr.length - 1) {
        return;
      }
      setTimeout(log, delay, i + 1);
    },
    delay,
    0
  );
}

logIndexWithDelay([10, 12, 15, 21]);
