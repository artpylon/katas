/*
Given the string representations of two integers, return the string
representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the
ten numerals "0" to "9".

Planning:
transform each input to number
sum numbers
Return sum
*/

function sumStrings(a,b) {
  const n1 = Number(a)
  const n2 = Number(b)
  const sum = n1 + n2
  const str = sum.toString()
  return str
}
