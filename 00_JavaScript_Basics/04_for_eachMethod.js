//* to get started with forEach(), remember this thing first=> it's an array method, not a loop in javascript.
const fruits=['apple','banana','cherry'];

fruits.push('grapes',"orange","papaya");
fruits.forEach(element => {
    // console.log(element);
});
// output:
// apple
// banana
// cherry
// orange
// grapes

// console.log(fruits.join(' '))
//* outpur: => apple banana cherry orange grapes
function printMe(element){
    // console.log(element);
}
fruits.forEach(printMe);//* remember, pass the reference to the function,
//*  no need to execute it by including parantheses(in our case=> fruits.forEach(printMe())) <== wrong
// output:
// apple
// banana
// cherry
// grapes
// orange

//* lets see another interesting thing about forEach()

fruits.forEach((element, index, array)=>{
// console.log(element, index, array);
})
//* output:=>
//* apple 0 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* banana 1 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* cherry 2 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* grapes 3 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* orange 4 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* element, index, array, are just reference variables and can be renamed.

// lets try it
fruits.forEach((element,key,myArr)=>{
    // console.log(element,key,myArr);
})

//* output:=>
//* apple 0 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* banana 1 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* cherry 2 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* grapes 3 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* orange 4 [ 'apple', 'banana', 'cherry', 'grapes', 'orange' ]
//* element, index, array, are just reference variables and can be renamed.

//* lets learn it with array of objects

const courses= [
    {courseID: 'J001',
    course: 'Java'
},
{courseID: 'JS001',
    course: 'Javascript'
},
{courseID: 'CPP001',
    course: 'C++'
},
{courseID: 'PY001',
    course: 'Python'
}
];

// lets see how to access the object's properties and their values
courses.forEach((elements)=>{
// console.log(elements.courseID);
})

/* output:=>
* J001
* JS001
* CPP001
* PY001
 */

// if you want to retrieve the entire aray then it's the old way
courses.forEach((elements)=>{
    // console.log(elements);
    })

    /* output:=>
*  { courseID: 'J001', course: 'Java' }
*  { courseID: 'JS001', course: 'Javascript' }
*  { courseID: 'CPP001', course: 'C++' }
*  { courseID: 'PY001', course: 'Python' }
     */
//* The forEach() method in JavaScript does not return anything.
//* It is a built-in array method used for iterating over the elements of an array 
//* and performing a specified action for each element.

//* If you need to transform an array or produce a new array based on the
//* elements of the original array, you can use other array methods like map(), filter(), or reduce(). 
//* These methods return a new array or a calculated value based on the elements of the original array.