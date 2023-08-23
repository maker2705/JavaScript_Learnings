//* for...of loop
/* syntax: for(variable of iterable_object){
    //*code goes here....    
}
    */ 
   const fruits=['apple','banana','cherry'];

for(const fruit of fruits){
    // console.log(fruit);
}
/* * output: 
*   apple
*   banana
*   cherry 
 */
// const [index, fruit]=[1,2]; //* destructuring of an array, but always initialize them when using like this.

//* to iterate objects we use for...in loop. We can't use for...of loop on javascripts objects ,
//* because it's run only on iterable objects(by 'objects',I am  not referring javascript objects here.)

const obj={
    apple: 'fruit',
    potato: 'vegetable',
    table:'furniture'
}

for (const key in obj) {
    // console.log(key);
}
// output:
// apple
// potato
// table 

//* now lets run the for...in loop on an array
const apples=['red','green','black'];

for (const color in apples) {
    // console.log(color);
}

//* output:
//* 0
//* 1
//* 2
//* so we that it returned the keys/indices of the array.
//* so how to print the values using the for...in loop. lets see
for (const color in apples) {
    // console.log(apples[color]);
}

//* output:
//* red
//* green
//* black

fruits.push('grapes',"orange");
// console.log(fruits);
//* output: => [ 'apple', 'banana', 'cherry', 'orange', 'grapes' ]
for (const iterator of fruits) {
    // console.log(iterator);
}
// output:
// apple
// banana
// cherry
// orange
// grapes

