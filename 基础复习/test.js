var arr = new Array(30);
arr.fill(1);

function asyncForEach(array, handler) {
  var t = setInterval(function () {
    if (array.length === 0) {
      clearInterval(t);
    } else {
      handler(arr.shift());
    }
  }, 0);
}

// 异步遍历，是逐行出现的，防止了阻塞
// asyncForEach(arr, function (value) {
//   console.log(value);
// })

//同步遍历，可以发现一瞬间出现，容易阻塞
arr.forEach(function (value, index, arr) {
  console.log(value);
});