// INSTRUCTIONS

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
// #Input
//
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
//
// #Output
//
// The middle character(s) of the word represented as a string.

// PLANNING
// Return the middle character of a word. If # of letters is even, return both middle
// characters
// Answer should be a string

// STEPS
// 1. Get character count
// 2. Declare midpoints, answer
// 3. Determine is count is odd or even
// 4. Push characters at midpoints for even and odd cases

function getMiddle(s) {
  const length = s.length
  const evenM = s.length / 2
  const evenMTwo = evenM - 1
  const oddM = ((s.length + 1) / 2) - 1
  let answer = ''
  if (length % 2 === 0) {
    answer += s.charAt(evenMTwo)
    answer += s.charAt(evenM)
  } else {
    answer += s.charAt(oddM)
  }
  return answer
}
