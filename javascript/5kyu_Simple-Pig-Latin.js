/*
Move the first letter of each word to the end of it, then add 'ay'
to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

Planning:
split the string on spaces into a new array
for each element rotate the first letter to the end
push the rotated elements to a new array
join the new array to a string with "ay " as separator, excluding the last instance

*/
function pigIt(str){
  let a1 = str.split(' ')
  let a2 = []
  a1.forEach( function (value, index, array) {
    let lastIndex = value.length
    let endLetters = value.substring(1, lastIndex)
    let string = endLetters + value[0] + 'ay '
    return a2.push(string)
  })
  let string = a2.join('')
  let newString = string.replace(/\s+/g,' ').trim()
  return newString
}
