// Using one single line of JavaScript code, complete the following tasks on the array of integers below.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
integers.sort(function(a,b) {return b-a});
console.log("reverse sorted", integers);


// 2.  Remove any integers greater than 19.
var chaingingResult = integers.sort(function(a,b){return b-a}).filter(function(num){return num <19});
console.log("nothing over 19", chaingingResult);

// 3.  Multiply each remaining number by 1.5 and then subtract 1.
var newTotal = chaingingResult.map(function(x) {
  return (x * 1.5) -1
})
console.log("new total", newTotal);

// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.
var newSum = newTotal.reduce(function (j, k){return j+k})
console.log("new total", newSum)

