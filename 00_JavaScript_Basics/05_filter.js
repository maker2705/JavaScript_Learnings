//* If you need to transform an array or produce a new array based on the
//* elements of the original array, you can use other array methods like map(), filter(), or reduce(). 
//* These methods return a new array or a calculated value based on the elements of the original array.


/* Note:
 * filter(),<== it also takes the call-back function as its parameter.*/

const numbers = [ 1,2,3,4,5,6,7,8,9,10 ];

// lets see what the filter() method returns:
// I'll store it in variable.

const numbs = numbers.filter( (num) => num>4 );//* implicit return arrow function
/* explicit return: have to mentoin the 'return' statement.
 * const numbs = numbers.filter( (num) => {
*return num>4;
* } );
 */
// console.log(numbs);
//* only the elements who pass the callfbackFn test are added to the new array.
/* output:
 * [ 5, 6, 7, 8, 9, 10 ]
 */

// lets see another uses of filter() with an example:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
  ];

// lets filter out the books with history genre

let filteredBooks = books.filter( (book) => book.genre==='History' );
// console.log(filteredBooks);

//* output:=>
//* [
//*   {
//*     title: 'Book Three',
//*     genre: 'History',
//*     publish: 1999,
//*     edition: 2007
//*   },
//*   {
//*     title: 'Book Seven',
//*     genre: 'History',
//*     publish: 1986,
//*     edition: 1996
//*   }
//* ]


filteredBooks = books.filter( (book) => book.publish>1995 && book.genre==='History' );
console.log(filteredBooks);
//* [
//*     {
//*       title: 'Book Three',
//*       genre: 'History',
//*       publish: 1999,
//*       edition: 2007
//*     }
//*   ]




