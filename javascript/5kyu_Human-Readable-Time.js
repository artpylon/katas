/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

Planning
Use date library, like moment.js?
input divided by 60 would give me minutes with seconds remaining.
minutes divided by 60 would give me hours with minutes remaining.
use modulus to capture remainder seconds and minutes.
create formula to assemble desired format.

*/

function humanReadable(seconds) {
  const format = function (num) {
    return ("0"+num).slice(-2)
  }

  let minutes = Math.floor(seconds / 60)
  let secs = seconds % 60
  let hours =  Math.floor(minutes / 60)
  minutes = minutes % 60

  return format(hours) + ":" + format(minutes) + ":" + format(secs)

}
