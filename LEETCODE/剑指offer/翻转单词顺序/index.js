var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};

let arr = "  hello world!  "
console.log(reverseWords(arr));