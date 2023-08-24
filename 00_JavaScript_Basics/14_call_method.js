/*Call(). Definition:
 * The call() method is used in JavaScript to execute a function within the context
 * of a given instance or object. 
 * This means you can invoke a function while associating it with a specified object,
 * allowing the function to access the properties and methods of that object.
 */

// * lets do it with an example 

//* suppose I have a function named and I want to execute it within the context of an object named "vehicle"
function showDetails(){
console.log(this.name) ;  
}
showDetails();
  /*output:
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
      duration: 75.29240000247955,
      nodeStart: 4.387700006365776,
      v8Start: 11.67280000448227,
      bootstrapComplete: 56.606199994683266,
      environment: 31.20489999651909,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1692798474286.993
  },
  fetch: [AsyncFunction: fetch]
}
   */

console.log(this);
//output: {}
// * if I run this now then its answer will be global object
// * (e.g., window in a browser environment or Object [global {...}] in Node.js), 
// * cause it's been executed in the global context, so it will show global object and
// * its different properties and methods.

const vehicle = {
    type: 'car',
    name: 'Mustang',
    model: 'Boss 429',
    color: 'black',
}
showDetails.call(vehicle)
// output: Mustang


// lets take another example 