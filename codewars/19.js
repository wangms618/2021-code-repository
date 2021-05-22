// 方向缩减
// 题解 给出前进方向，进行化简 
// 例  [南北] --> [] 、 [南北南东北] --> [南东北]  、 [南北北东西南] --> [] 
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
const letter = {
  "NORTH": "SOUTH",
  "SOUTH": "NORTH",
  "EAST": "WEST",
  "WEST": "EAST"
}
let stack = []
function dirReduc(arr) {
  // console.log(letter[arr[0]]); // SOUTH
  for (let i = 0; i < arr.length; i++) {
  }
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
