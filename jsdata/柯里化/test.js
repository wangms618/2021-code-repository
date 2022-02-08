function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(123);
      resolve()
    }, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 2000);