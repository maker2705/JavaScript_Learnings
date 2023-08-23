let firstPromise = new Promise((resolve, reject) => {

    console.log('This is my first Promise');

})

// console.log('first');

setTimeout( () =>{
console.log('inside async code')
},0)

console.log('3-first');
