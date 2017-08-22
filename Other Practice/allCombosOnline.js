// After feeling as though my homegrown attempts were not going to be successful
// I went to the web to look for ideas.
// I searched "javascript all combinations from 3 arrays". This yeilded only
// solutions that required recursion, however one of these mentioned
// "cartesian product" as the name for this type of problem, so I then
// searched for "javascript cartesian product without recursion". This search
// returned the solution below which I tested using the sample set data and found
// that it works.

// http://eddmann.com/posts/cartesian-product-in-javascript/
const flatten = (arr) => [].concat.apply([], arr);

const product = (...sets) =>
  sets.reduce((acc, set) =>
    flatten(acc.map(x => set.map(y => [ ...x, y ]))),
    [[]])

// My next step was to pick apart this solution to better understand how it works.
// First, I pulled out all the methods and operators and opened the mozilla javascript
// docs for each. I am familiar with these, but I wanted to have examples and correct
// syntax on hand.
// Next, I parsed the product function, line by line, and added annotations.

// Take an empty array, and merge it with all the arrays passed to the
// function, and return the result. This should flatten the array by 1 dimension.
// If an empty array is provided, an empty array should be returned.
const flatten = (arr) => [].concat.apply([], arr);

const product = (...sets) =>
// reduce multiple array arguments to an array of arrays, each containing one
// of the possible combinations.
// reduce method is given an initial value of [[]]
  sets.reduce((acc, set) =>

// flatten is passed to reduce as callback function.
// This should reduce the result of the inner function by 1 dimension
    flatten(

// Map function used to create a new array with each y element of the set being
// evaluated mapped to each element of the accumulator.
      acc.map(x => set.map(y => [ ...x, y ]))),
    [[]]);

// I found it helpful to think through the result of the flatten function
// each time it was executed by the reduce method.
// FIRST EXECUTION
// this first time through, the inner map function would be set.map(y => ...[], y)
// the result of this would be [[['grey'], ['black']]]
// When flatten function is applied, this becomes, [['grey'], ['black']]
// SECOND EXECUTION:
// the result would be [[[ 'grey', 'dog'], ['grey', 'cat']], [['black', 'dog'], ['black', 'cat']]]
// After flatten, [[ 'grey', 'dog'], ['grey', 'cat'], ['black', 'dog'], ['black', 'cat']]

// Conclusion:

// While I was unable to devise a solution without outside sources, I feel confident
// that having thoroughly reseached and tested the found solution, I could implement it.
// This is often the process I take to learn new skills. For example, I challenge myself
// to solve 5 new katas a week. For each one, I set a timer for 30 minutes and attempt
// to get a working solution without turning to outside sources for the answer. If I
// haven't solved it when the time is up, I find a suitable solution and work through that
// until I understand it. I've found this very helpful to my learning process.

// I believe this is a key trait of developers who produce functional code quickly: realize
// when you are spinning your wheels and try a different approach. That might be
// solving a simpler problem first or researching how others have solved the same problem
// before.
