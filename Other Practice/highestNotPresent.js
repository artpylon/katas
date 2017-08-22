/*
a.) Given an array of integers (unsorted, not all positive), write a method to
find the largest positive integer not in the array. (If the input is [1, 2],
  return 3. If the input is [1,3], return 2. If the input is [-1,-1,0,2,2,2],
  return 1).

b.) What is the runtime of this method and what is the theoretical fastest speed?
*/
// Idea 1
// find lowest value
// find highest value
// loop through array return all integers not present to a new array
// return highest value of not present array

// Idea 2
// Sort the array ascending
// loop through array and check if next index is current index plus 1, if not,
// add that element to not present array


var array = [-1, 1, 5, 11]

var t0 = performance.now()

var highestNotPresent = function (array) {
  var ascending = array.sort(function(a, b){return a-b})
  var last = ascending.length - 1;
  var notPresent = []
  for (var i = last; i >= 0; i--) {
    if (ascending[i - 1] !== ascending[i] - 1 && notPresent.length === 0) {
      var missing = ascending[i] - 1
      notPresent.push(missing)
      break;
    }
  }
  return notPresent[0]
}


var t0 = performance.now()
var result = highestNotPresent(array)
var t1 = performance.now()

console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);


// idea 3

// sort the array
// find max
// loop through and find highest missing number

var array = [-2, 0, 1, 5]

var highestNotPresent = function (array) {
  var ascending = array.sort(function(a, b){return a-b})
  var maxNum = ascending[ascending.length - 1]
  var target

  for (var i = ascending.length - 1; i >= 0; i--) {
    var index = i - 1
    if (!ascending.includes(index)) {
      target = ascending[i] - 1
    }
  }
  return target
}
