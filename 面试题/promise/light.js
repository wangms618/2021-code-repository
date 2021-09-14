function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}

const light = function (times, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb()
      resolve()
    }, times)
  })
}
const step = function () {
  Promise.resolve().then(() => {
    return light(3000, red)
  }).then(() => {
    return light(1000, green)
  }).then(() => {
    return light(2000, yellow)
  }).then(() => {
    return step()
  })
}
step()
