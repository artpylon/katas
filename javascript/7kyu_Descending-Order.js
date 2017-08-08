// // INSTRUCTIONS
// // Your task is to make a function that can take any non-negative integer as a
// argument and return it with it's digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.
// //
// // Examples:
// //
// // Input: 21445 Output: 54421
// //
// // Input: 145263 Output: 654321
// //
// // Input: 1254859723 Output: 9875543221

// PLANNING
// Create function to take any non-negative number and return its digits
// in descending order.

// STEPS
//

function descendingOrder(n){
  for(var r = 0; n; n = Math.floor(n / 10)) {
      r *= 10;
      r += n % 10;
  }
  return r;
}
