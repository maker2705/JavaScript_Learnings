//* ++++++++++++++++++++++++++++++++++++++ map() +++++++++++++++++++++++++++++++++++++++++++++ 

//* The map() method creates a new array populated with the 
//* results of calling a provided function on every element in the calling array.
// Parameters
// callbackFn
// A function to execute for each element in the array.
// Its return value is added as a single element in the new array.
// The function is called with the following arguments:

// 1. element
// The current element being processed in the array.

// 2. index
// The index of the current element being processed in the array.

// 3. array
// The array map() was called upon.

// 4. thisArg Optional
// A value to use as this when executing callbackFn

const numbers = [ 1,2,3,4,5,6,7,8,9,10 ];

// lets learn map()

let numbs = numbers.map( (num) => num + 10 )
//* console.log(numbs);
//*  [
//*   11, 12, 13, 14, 15,
//*   16, 17, 18, 19, 20
//* ]

// lets learn chaining
numbs = numbers
            .map( (num) => num*10 )
            .map( (num) => num+1 )
            .filter( (num) => num>=40 );

console.log(numbs);
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

