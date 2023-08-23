
const mySymbol= Symbol("myKey");
const person={
  name:"Ankit",
  age: 25,    
  Job: "Jobless",
  [mySymbol]: "myKey",
  interests: ["Android","Web Dev","Java"]
};
// for(let keys in person){
// console.log(keys + ": "+person[keys]);
// }

// for(let keys of Object.getOwnPropertySymbols(person)){
// console.log(keys, ": ", person[keys]);
// }
// console.log(person);

person.greeting=function(){
  console.log(`Hellow,${person.name}`);
}
person.greeting();
// outpu=> Hellow,Ankit

// lets get some more info on objects 
// Most of the times we get the data from the database in the form of arrays of objects.
/*
eg., const users=
[
  
  {name:"Ankit",age: 25,Job: "Jobless"},{name:"Ankit",age: 25,Job: "Jobless"},
  {name:"Ankit",age: 25,Job: "Jobless"}
]

so the above is an array of objects
*/
// lets seee how to access it with different methods and will see the data type of the outputs

const googleUser={
  id: '123@gmail.com',
  name: 'abc',
  isLoggedIn: false,
  lastLoggedIn:'Sunday'
}
console.log(Object.keys(googleUser));
//*the above code wil print the keys of the object=> [ 'id', 'name', 'isLoggedIn', 'lastLoggedIn' ]
//*the output will be of datatype: array[]


console.log(Object.values(googleUser));
//*the output will be of datatype: array[]=> [ '123@gmail.com', 'abc', false, 'Sunday' ]
// *console.log(Object.entries(googleUser));

// *the output will be of array of key-value arrays
//[
//   [ 'id', '123@gmail.com' ],
//   [ 'name', 'abc' ],
//   [ 'isLoggedIn', false ],
//   [ 'lastLoggedIn', 'Sunday' ]
// ] 


// *lets learn about de-structuring of Objects

const course={
  courseID: 'JS01',
  courseName: 'Javascript',
  price: 999,
  duration:'1 Month'
}
//* Now suppose we have to access "courseName" s
//* then we will access it like : => console.log(course.courseName);
//* but in case of using it multiple times it make the l=code look weird 

//  we have a solution
//* const {courseName}=course;
//* console.log(courseName);

//* Now we can always use courseName to print it.

//* there is another way to do it, when you want to name that particular property something else.

const{courseName:corse}=course;
console.log(corse);



// * lets learn about functions

function add(number1, number2){
console.log(number1+number2);
}
add(); //=> NaN
add(["3"],[5]); //*=>35
add(2,[5]); //* => 25
add(2,"5"); //*=> 25
add(2,5); //*=>7
add([],[]); //*=> will print a space
add(3,"a"); //*=>3a
add(3,"null"); //*=> 3null
add(3,null); //*=> 3 treats null as zero(0).
//* lets learn something more 
//* add(3,5); => 8 


const result=add(3,5);
console.log("result: ",result);
//*lets check the results 
//* it will give=> undefined
// * add function does not explicitly return a value.
//* When a function does not have a return statement or explicitly returns a value, 
//* it implicitly returns undefined.


// * lets move further
function multiply(num1,num2){
  return num1*num2
}

multiply(2,3);





function loginUser(username)
{
  return `${username} just logged in`;
} 
//* loginUser('ankit');
//*  if we run and see thee output, it will give/print nothing.
//* because we never asked the returned value to be printed, we just returned it.
//* lets print it
console.log(loginUser('ankit'));



//* lets see another example to understand this:
function multiply(num1,num2){
const result= num1*num2;
return result
}
console.log(multiply(2,3));

function subtract(num1,num2){
  const result= num1-num2;
  console.log(result);
  }
  subtract(2,4)
 /*
  *In the multiplication function, we used console.log() to
   *display the result of the multiply function call.
   *This is because the function multiply returns a value,
   *but if you don't do anything with that returned value
   *(e.g., assign it to a variable or use it in an expression), it won't be automatically displayed. 
   
   In the second function (i.e., subtract), you're not explicitly returning any value.
    Instead, you are using console.log() inside the function to directly display the result 
    of the subtraction. Since you are logging the result directly within the function,
    there is no need to wrap the function call in console.log() when you invoke subtract(2, 4).
  */


//* lets learn something interesting about function overloading and overriding
//* Note: Unlike other programming languages, JavaScript does not support Function Overloading. 
//*this is becaue of hoisting feature in Javascript.
//* But, JavaScript does support the concept of method overriding.  
/*

*/

console.log(20, 40 ,50);
//* => 20 40 50
 function returnPrice(price){
  return price;
 }
console.log( returnPrice(20));
//* => 20
// what if I pass multiple values in the function, lets see

console.log( returnPrice(20, 40, 50));
//* => 20 
//*  In JavaScript,
//* it is possible to pass more arguments to a function
//* than the number of parameters specified in its definition.
//* The extra arguments are simply ignored by the function.

//* so how to solve it?=> we have an operator called rest(...),
//* yes, these three dots also represents the spread operator.
//* its recognition whether as spread or rest totally depends on its use-case
//* in our current case/example it'll be used as the 'rest'(...) operator.

function cartPrice(...cartItems){
  return cartItems;
}
console.log(cartPrice(200, 5000, 199));
//* lets run it. => [ 200, 5000, 199 ]
//* imagine if we do it like this
function cartPrices(val1, val2, ...cartItems){
  return cartItems;
}
//* now lets run the same code
console.log(cartPrices(200, 5000, 199));
//* => [ 199 ]

//* lets try one more
console.log(cartPrices(200, 5000, 199, 4000, 600));
//* => [ 199, 4000, 600 ]
/*
 *lets see how? 
 *the values 200 and 5000 (in e.g. :1) get stored in the variables 'val1' and 'val2'
 * and rest of the values get stored in the cartItems
 * in second function example (i.e., cartPrices()) the two variables 
 *  stored the starting two values and rest got stored in the variable 'cartItems'
 * and then returned as an array.
 */

//* lets see another case 

function cartItems(val1, val2,val3, ...cartItems){
  return cartItems;
}
console.log(cartItems('bag','mobile','watch'));
//* => [] ==> but why?
/* 
 * when all the three items got stored in the three (val1, val2, val3) variables
 * then the variable'cartItems left with nothing and it returned an empty array.'
 * 
 */


//* lets see objects with functions
//* lets define an object first:

const user1={
id: 'a001',
username: 'ankit',
isLoggedIn: false
}
//* lets create a function

function handleObject(anyObject){
console.log(`username is ${anyObject.username} and the ID is ${anyObject.id}`);
}
handleObject(user1)
//* output=> username is ankit and the ID is a001
//* But here we knew the variables properties names of objects and all. 
//* In the scenarios where we don't know about the exact structure or property names 
//* we use conditional cheques or safe access techniques to handle such situations


//* Lets learn something interesting about hoisting 

/* 
*Hoisting in JavaScript is a behavior where function and variable declarations 
*are moved to the top of their containing scope during the compilation phase, 
*before the actual execution of the code. 
*This means that you can call a function or use a variable before it is declared in your code. 
*/


//* lets see an example

sayHello(); //* Output:=> "Hello!"
function sayHello() {
  console.log("Hello!");
}
/* 
*In this example, the function sayHello() is called before its declaration,
*but it still works due to hoisting. During the compilation phase, 
*the function declaration is moved to the top, allowing it to be called before its actual position in the code.
*/

//* lets learn a simple concept about hoisting and how it affects function

//* lets create a function

console.log(addOne(5)); //* => 6
function addOne(num){
  return num+1;
}
//* addOne(5);
//* now lets move this addOne() function call above its function definition and log it to the console.
//* lets write a similar function but lets store it in a variable

console.log(addTwo(5));
const addTwo= function(num){ //* we refer this type of function as 'expression'
  return num+2;
}

// *addTwo(5); //* we haven't asked to print the result so no output
//* now that we have run and saw that addOne() is returning 6 as its output,
//* lets try to do the same with addTwo() i.e., move it above its declaration
//* now when we run it shows:=> ReferenceError: Cannot access 'addTwo' before initialization
//* but when we did it with adddOne(5), it worked. So, why not with addTwo(5)
/* 
* This depends upon how you declare the function. In the first one 
* we normally declared the function addOne but in second one we also stored it in a variable
* that's where the difference comes.
*/