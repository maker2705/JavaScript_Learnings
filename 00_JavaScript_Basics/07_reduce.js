//* The reduce() method executes a user-supplied "reducer" callback function
//* on each element of the array, in order, passing in the return value 
//* from the calculation on the preceding element.
//* The final result of running the reducer across all elements of the array is a single value.


const numbers = [1, 2, 3, 4];

let numb = numbers.reduce( 
                            function(accumulator,currentValue) {
    console.log(`acc:${accumulator} and currenctValue:${currentValue}`);
    //above line is to just to track the values of aacumulator and currentValue. 
                                return (accumulator+currentValue)
                                                               }, 3
                         );

// the 3 we types is the initial value for the accumulator.
console.log(numb);

const shoppingCart=[

{
    item: 'JS Course',
    price: 1000
},

{
    item: 'App Dev Course',
    price: 2999
},

{
    item: 'Data Science Course',
    price: 12999
},

{
    item: 'Web Development',
    price: 3999
}
]

let cartPrice = shoppingCart.reduce( (totalPrice, currenctValue) => totalPrice + currenctValue.price,0 )
console.log(cartPrice);