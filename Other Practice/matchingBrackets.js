// return true if it were given "( ( { ( { [ ] } ) } ) )" where all brackets pair
// correctly as they would in a program, and return false for something
// like "( ( [ ] )" or "( [ ) ]".


var matchingBraces = function (str) {
  // transform string to an array
  var arr = str.split('')
  // setup variable to hold only the braces
  var brackets = []
  // loop through array and pull out the braces
  arr.forEach((char) => {
    if (char === "{" || char === "}" || char === "[" || char === "]" ||
      char === "(" || char === ")") {
        brackets.push(char)
      }
  })

  var len = brackets.length

  // if matched total braces must be even
  if (len % 2 !== 0) {
    return false
  }
  var last = len - 1
  // loop through half the array and check if other half is opposite brace
  for (var i = 0; i < ((len/2) - 1); i++) {
    switch (brackets[i]) {
      case "{":
        if (brackets[last - i] === "}") {
        } else {return false}
        break
      case "[":
        if (brackets[last - i] === "}") {
        } else {return false}
        break
      case "(":
        if (brackets[last - i] === ")") {
        } else {return false}
    }
  }
  // if all preceding code does not return false, return true
  return true
}
