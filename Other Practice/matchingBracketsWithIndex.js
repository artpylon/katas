// Given a string containing brackets and an the index for a single bracket, return the
// index of the matching bracket.

// STEPS
// parse the string and count number of each type of bracket.
// evaluate whether the count of each bracket type is even or odd
// if even, they are matched, if odd, they are not matched....

// However, this would not cover cases where they are even but not placed correctly...

// the difference between indecies of brackets must be odd

"{()}", 1 -> (

var matchingBracesWithIndex = function (str, position) {
  //identify input bracket
  var inputBracket = str.charAt(position)
  // transform string to an array
  var arr = str.split('')

  var targetIndex
  var previousIndecies = []

  switch (inputBracket) {
    case "{":
      for (var i = position + 1; i < arr.length; i++) {
        if (arr[i] === "}") {
          targetIndex = i
        } else targetIndex = false
      }
      break
    case "}":
      for (var i = 0; i < position - 1; i++) {
        if (arr[i] === "{") {
          previousIndecies.push(i)
        } else targetIndex = false
      }
      targetIndex = Math.max.apply(Math, previousIndecies)
      break
    case "[":
      for (var i = position + 1; i < arr.length; i++) {
        if (arr[i] === "]") {
          targetIndex = i
        } else targetIndex = false
      }
      break
    case "]":
      for (var i = 0; i < position - 1; i++) {
        if (arr[i] === "[") {
          previousIndecies.push(i)
        } else targetIndex = false
      }
      targetIndex = Math.max.apply(Math, previousIndecies)
      break
    case "(":
      for (var i = position + 1; i < arr.length; i++) {
        if (arr[i] === ")") {
          targetIndex = i
        } else targetIndex = false
      }
      break
    case ")":
      for (var i = 0; i < position - 1; i++) {
        if (arr[i] === "(") {
          previousIndecies.push(i)
        } else targetIndex = false
      }
      targetIndex = Math.max.apply(Math, previousIndecies)
  }
  return targetIndex
}
