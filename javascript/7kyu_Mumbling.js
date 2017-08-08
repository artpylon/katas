// INSTRUCTIONS

// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//PLANNING
	// this function is passed a string of letters
  // it should return the letters in the same order, however:
  // Each letter should be multiplied by it's position in the string
  // i.e. if 'b' is the 2nd letter, there should be 2 b's
  // the first of each new letter should be capitalized
  // a dash should separate each letter in the sequence
  // the return should be a string

// STEPS
// 1. Capitalize the string
// 2. Split the string by character
// 3. Multiply each letter by its (index + 1)
// 4. Lowercase the multiplied strings
// 5. Slice the last character from the multiplied string
// 6. Concat its capitalized letter with it's multipled string
// 7. Join the substrings with a dash
// 8. Return a string

function accum(s) {

  let array = s.split('')
  let answer = ''
  let i = 0
  while (i < array.length) {
    let mid_answer = array[i].toUpperCase()
    answer += mid_answer

    var n = i
    while (n > 0) {
      answer += array[i].toLowerCase()
      n--
    }

    if (i != array.length - 1) {
      answer += '-'
    }
    i++
  }
  return answer
}
