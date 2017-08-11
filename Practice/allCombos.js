// Given a two-dimensional array of strings, return all possible combination of words.
//
// Example:
// ['grey','black']
// ['fox','dog']
// ['jumped','ran','growled']
//
// Return:
// grey fox jumped
// grey fox ran
// grey fox growled
// black fox jumped
var a1 = ['grey', 'black']
var a2 = ['fox', 'dog']
var a3 = ['jumped', 'ran', 'growled']

var combos = function () {
  var len1 = a1.length
  var len2 = a2.length
  var len3 = a3.length
  for (var i = 0; i < len2; i++) {
    console.log(2 + a1[0] + " " + a2[i] + " " + a3[i])
    for(var m = 1; m < len3; m++) {
      console.log(3 + a1[0] + " " + a2[i] + " " + a3[m])
    }
  }
  for (var i = 0; i < len2; i++) {
    console.log(2 + a1[1] + " " + a2[i] + " " + a3[i])
    for(var m = 1; m < len3; m++) {
      console.log(3 + a1[1] + " " + a2[i] + " " + a3[m])
    }
  }
}

// Online solution

const flatten = (arr) => [].concat.apply([], arr);

const product = (...sets) =>
  sets.reduce((acc, set) =>
    flatten(acc.map(x => set.map(y => [ ...x, y ]))),
    [[]]);
