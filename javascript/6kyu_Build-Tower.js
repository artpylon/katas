/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
for example, a tower of 3 floors looks like below

[
  '   *   ', 1 - 6
  '  ***  ', 3 - 4
  ' ***** ', 5 - 2
  '*******'  0 - 7
]

Planning
every floor must be the same length
create empty tower array to hold floors
use for loop that runs nFloors number of times, each time adding to the previous
iteration
*/

function towerBuilder(nFloors) {
  let tower = []
  for (var i = 0; i < nFloors; i++) {
    if (i > 1) {
      let floor = "**" + tower[i-1]
      tower.push(floor)
    } else if (i === 1) {
      tower.push("***")
    } else if (i === 0 && nFloors === 1) {
      tower.push(tower.push(" * "))
    } else tower.push("*")
  }
  return tower
}

function towerBuilder(nFloors) {
  let tower = []
  let width = nFloors + nFloors - 1
  for (var i = 0; i < nFloors; i++) {
      let stars = i * 2 + 1
      let spaceSegment = (width - stars) / 2
      let floor = " ".repeat(spaceSegment) + "*".repeat(stars) + " ".repeat(spaceSegment)
      tower.push(floor)
  }
  return tower
}
