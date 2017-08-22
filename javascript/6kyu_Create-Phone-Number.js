/*
Write a function that accepts an array of 10 integers (between 0 and 9), that
returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/

/*
PLANNING

Screen out bad input, such as: nulls, negatives, strings

Is there a good method to insert needed characters at specified index?

Else, perhaps make the array a string and use substring to add manipulate

Must return phone number as a string

*/

// Using splice

function createPhoneNumber(numbers){
  const badInput = function (element, index, array) {
    if (element === null || element === undefined || element < 0) {
      return true
    }
  }

  if (numbers.some(badInput)) {
    return console.alert("not a phone number")
  }

  const array = numbers

  array.splice(0, 0, '(')
  array.splice(4, 0, ')')
  array.splice(5, 0, ' ')
  array.splice(9, 0, '-')

  return array.join('')
}
