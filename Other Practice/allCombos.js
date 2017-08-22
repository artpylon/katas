/*
RESPONSE:

My initial approach to this problem was to use a series of for
loops. However, I could not work out how to account for a variable number
of input arrays that might have different numbers of elements in each array.

I am including below 2 unsuccessful attempts and notations to show
my thinking behind them. In each of these I stopped work part way through
because I knew I was on the wrong path without bringing the concept to
completion.

One approach I pursued was to first analyze the arguments to find the number
of arguments, the length of each and total number possible combinations. I hoped
to use this within for loops to produce the correct answer.
*/

var combos = function (vectors) {
  // find number of arguments
  var numberArgs = arguments.length

  // create array with argument lengths
  var lengths = []
  for (var i = 0; i < numberArgs; i++) {
    lengths.push(arguments[i].length)
  }

  // find possible combinations from argument lengths
  var combinations = lengths.reduce(function (a,b) {
    return a * b
  })

  var products = []
  // create subarrays within products with elements from first input array
  // the number of subarrays created with each element should correspond to
  // the number of combinations that include contain that element.
  for (var i = 0; i < arguments[0].length; i++) {
    for (var j = 0; j < combinations/arguments[0].length; j++)
    products.push([arguments[0][i]])
  }

  // starting with the 2nd argument, loop through the arguments elements and add
  // those to the products subarrays
  for (var i = 1; i < numberArgs; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      products[j].push(arguments[i][j])
    }
  }
  return products
}

/*
Next, I decided to simplify the problem and work with defined inputs.

The solution below does not return all the correct answers and the result
contains duplicates. I included the number in the console log for debugging
purposes, so I could easily see which for loop printed which combinations.

I tinkered with this, but could not produce the correct result.
I tried various changes, such as moving the for loops and changing the iterators.
*/

var a1 = ['grey', 'black']
var a2 = ['fox', 'dog']
var a3 = ['jumped', 'ran', 'growled']

var combos = function () {
  var len1 = a1.length
  var len2 = a2.length
  var len3 = a3.length
  for (var i = 0; i < len2; i++) {
    console.log(1 + a1[0] + " " + a2[i] + " " + a3[i])
    for(var m = 1; m < len3; m++) {
      console.log(2 + a1[0] + " " + a2[i] + " " + a3[m])
    }
  }
  for (var i = 0; i < len2; i++) {
    console.log(3 + a1[1] + " " + a2[i] + " " + a3[i])
    for(var m = 1; m < len3; m++) {
      console.log(4 + a1[1] + " " + a2[i] + " " + a3[m])
    }
  }
}

/*
After feeling as though I was not using the right approach for the problem,
I went to the web to look for ideas.
I searched "javascript all combinations from 3 arrays". This yeilded only
solutions that required recursion, however one of these mentioned
"cartesian product" as the name for this type of problem, so I then
searched for "javascript cartesian product without recursion". This search
returned the solution below which I tested using the sample set data and found
that it works.

// http://eddmann.com/posts/cartesian-product-in-javascript/
*/

var flatten = (arr) => [].concat.apply([], arr);

var product = (...sets) =>
  sets.reduce((acc, set) =>
    flatten(acc.map(x => set.map(y => [ ...x, y ]))),
    [[]])

console.log(product(a1,a2,a3))

/*
My next step was to pick apart this solution to better understand how it works.
First, I pulled out all the methods and operators and opened the mozilla javascript
docs for each. I am familiar with these, but I wanted to have examples and correct
syntax on hand.
Next, I parsed the product function, line by line, and added annotations. See below:

Take an empty array, and merge it with all the arrays passed to the
function, and return the result. This should flatten the array by 1 dimension.
If an empty array is provided, an empty array should be returned.

const flatten = (arr) => [].concat.apply([], arr);

const product = (...sets) =>

reduce multiple array arguments to an array of arrays, each containing one
of the possible combinations.
reduce method is given an initial value of [[]]

  sets.reduce((acc, set) =>

flatten is passed to reduce as callback function.
This should reduce the result of the inner function by 1 dimension

    flatten(

Map function used to create a new array with each y element of the set being
evaluated mapped to each element of the accumulator.

    acc.map(x => set.map(y => [ ...x, y ]))),
    [[]]);

I found it helpful to think through the result of the flatten function
each time it was executed by the reduce method.

FIRST EXECUTION:
this first time through, the inner map function would be set.map(y => ...[], y)
the result of this would be [[['grey'], ['black']]]
When flatten function is applied, this becomes, [['grey'], ['black']]

SECOND EXECUTION:
the result would be [[[ 'grey', 'dog'], ['grey', 'cat']], [['black', 'dog'], ['black', 'cat']]]
After flatten, [[ 'grey', 'dog'], ['grey', 'cat'], ['black', 'dog'], ['black', 'cat']]

Conclusion:

While I was unable to devise a solution without outside sources, I feel confident
that having thoroughly reseached and tested the found solution, I could implement it.
This is often the process I take to learn new skills. For example, I challenge myself
to solve 5 new katas a week. For each one, I set a timer for 30 minutes and attempt
to get a working solution without turning to outside sources for the answer. If I
haven't solved it when the time is up, I find a suitable solution and work through that
until I understand it. I've found this very helpful to my learning process.

I believe this is a key trait of developers who produce functional code quickly: realize
when you are spinning your wheels and try a different approach. That might be
solving a simpler problem first or researching how others have solved the same problem
before.
*/
