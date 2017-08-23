/*
Planning
split input string into an array
for each element in the array, find match in code dictionary
if element is a space, return a space, or would that also be in the dictionary?
*/

decodeMorse = function(morseCode){
  let array = morseCode.split(' ')
  let translation = []
  array.forEach( function (value, index, array) {
    if (MORSE_CODE[value] === undefined) {
      return translation.push(" ")
    } else {
      return translation.push(MORSE_CODE[value])
    }
  })
  let string = translation.join('')
  let newString = string.replace(/\s+/g,' ').trim()
  return newString
}
