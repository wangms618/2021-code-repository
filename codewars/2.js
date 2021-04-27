// likes [] // must be "no one likes this" length == 0
// likes ["Peter"] //must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // "Max,John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // Alex,Jacob and 2 other like this

const likes = names => {
  switch (names.length) {
    case 0:
      return " no one likes this "; break;
    case 1:
      return names[0] + " likes this "; break;
    case 2:
      return names[0] + " and " + names[1] + " like this "; break;
    case 3:
      return names[0] + " , " + names[1] + " and " + names[2] + " like this "; break;
    case 4:
      return names[0] + " , " + names[1] + " and "+ (names.length-2) +" other like this ";
      
    
  }
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));