function comp(array1, array2) {

  if (array1 === null || array1 === false || array2 === null || array2 === false;) {
    return false}

  if (
    (array1.some(function (num) {
    num === null || num < 0 || num === false || num === true})) ||
    (array2.some(function (num) {
    num === null || num < 0 || num === false || num === true}))
    ) {
    return false}

  if (array1.length !== array2.length) {
    return false}

  let sqFind = []

  array1.every(function (num) {
    let square = num*num

    function isSquare(element) {
      return element === square
    }

    sqFind.push(array2.find(isSquare))
  })

  function isTrue(element) {
    if (element) {
      return true}
   }

  if (sqFind.every(isTrue)) {
      return true}
}
