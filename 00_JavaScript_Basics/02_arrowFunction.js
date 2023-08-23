//* to learn arrow functions we need to understand 'this' keyword a bit

/*
 * 'this' keyword refers to the current context.It means,
 * the value of 'this' keyword depends on in which context it appears:
 * function, class, or global
 * the function's 'this' keyword behaves differently in javascript compared to
 * other languages. It also has some differences between strict mode and non-strict mode.
*/

//* lets take an object to understand 'this' keyword

const user ={
    id: 'a001',
    username:'ankit',
    isLoggedIn: true,
    welcomeMessage: function(username){
        console.log(`we are happy to have you Mr. ${this.username} `);
    console.log(this);
    }

};
// * lets try to run this.
user.welcomeMessage();
//* output: => we are happy to have you Mr. ankit
user.username='Prashant';
user.welcomeMessage();
//* output: => we are happy to have you Mr. Prashant
//* I think it's understood, I changed the username's value and
//* 'this' keyword always refers to the current context.

//*lets check the context globally  
// console.log(this);//* output: => {} 
//* it returned an empty object.
/*
 * When we log this globally (console.log(this)), 
* it refers to the global object. In a Node.js environment or a non-strict mode in the browser, 
*the global object is typically represented by global or window respectively. 
*In this case, it appears as an empty object {}.(see line 39)
 */



//* lets check the context in the welcomeMessage function
//* we will run : console.log(this); inside the function and will see the output.
/*
 we are happy to have you Mr. ankit 
{
  id: 'a001',
  username: 'ankit',
  isLoggedIn: true,
  welcomeMessage: [Function: welcomeMessage]
}
we are happy to have you Mr. Prashant 
{
  id: 'a001',
  username: 'Prashant',
  isLoggedIn: true,
  welcomeMessage: [Function: welcomeMessage]
}

* lets try to break it

* at line'24': user.welcomeMessage(); It returned: => we are happy to have you Mr. ankit
* after executing the line '24' it executed the line'19' 
* at line'19' it returned the current context, i.e., 
*{
*  id: 'a001',
*  username: 'ankit',
*  isLoggedIn: true,
*  welcomeMessage: [Function: welcomeMessage]
*}, which is the current context referred by 'this' keyword
* 
*then it executed the line '26' and username got updated and
*line '27' executed and returned : => we are happy to have you Mr. Prashant
* then the line '19'  again executed and gave the current context which is now changed
*now the username is 'Prashant'
*so it returned: =>
*{
*  id: 'a001',
*  username: 'Prashant',
*  isLoggedIn: true,
* welcomeMessage: [Function: welcomeMessage]
*}

*/

//* till now we nearly understood'out the 'this' keyword and the context

//* we have check the context globally and in the function that has some values and variables defined.

//* lets check it in an empty function

function myFunction(){
    console.log(this);
}

// myFunction();
//* lets see the output:
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 40.91960000246763,
      nodeStart: 3.4995000027120113,
      v8Start: 6.829800002276897,
      bootstrapComplete: 30.66330000013113,
      environment: 16.41670000180602,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1689071138680.364
  },
  fetch: [AsyncFunction: fetch]
}
*/

//* now we have received numerous values in the context. lets try something different
function myFunct(){
    let username='ankit'
    console.log(this.username);
    //*lets see if we can print it or not 
} 
// myFunct();
//* output: => undefined

/*
*In the myFunct example, this.username logs undefined because there is no username property 
*defined in the current context. 
*In strict mode, accessing an undeclared variable will result in a ReferenceError.
*However, in our example, we are using it in a non-strict mode, so it simply returns undefined.
*/
//* so far we have learnt that the behavior of 'this' keyword depends on how the function is invoked.
//* It can vary in different contexts such as 
//* function calls, object methods, constructors, or arrow functions.


//* 