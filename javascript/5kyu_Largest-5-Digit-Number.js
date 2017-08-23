/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number
found within the number given.. The number will be passed in as a string
of only digits. It should return a five digit integer. The number passed
may be as large as 1000 digits.

Planning:
Create a loop that searches through the array
and push all 5 digit sequences that begin with 9 then 8, etc. When at least 1
sequence is found, the loop should break.

Sort the array in ascending order, then return the last element of the sorted
array.
*/

function solution(digits){
  var str = digits
  var segments = []
  for(var i = 0; i < str.length - 4; i++) {
    let end = i + 5
    let segment = str.substring(i, end)
    let number = Number(segment)
    segments.push(number)
  }

  function sortNumber(a,b) {
    return a - b
  }

  let sorted = segments.sort(sortNumber)
  let last = sorted.length - 1
  return sorted[last]
}
