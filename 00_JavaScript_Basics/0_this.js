const outerObj = {
    name: 'Outer Object',
    outerFunction: function() {
      console.log(`Outer Function - My name is ${this.name}`);
      
      const innerObj = {
        name: 'Inner Object',
        innerFunction: () => {
          console.log(`Inner Function - My name is ${this.name}`);
        }
      };
      
      innerObj.innerFunction();
    }
  };
  
  outerObj.outerFunction();
// * In an arrow function, this is not dynamically bound; it is lexically scoped.
// * The arrow function captures the 'this' value from its surrounding scope,
// * which is the global scope in this case. 
// * Hence, this.name inside the arrow function becomes undefined.

  /*
   * In this example, we have an object outerObj with a method outerFunction.
   * Inside outerFunction, we define another object innerObj with its own method innerFunction.
   * Notice that innerFunction is an arrow function.
   * 
   * 
   */
  /*
   * When we call outerObj.outerFunction(), the first console.log inside outerFunction logs "Outer Function - 
   * My name is Outer Object", and then we call innerObj.innerFunction(). Inside innerFunction,
   * we have the console.log statement that logs "Inner Function - My name is ${this.name}".
   * However, since innerFunction is an arrow function, this inside the arrow function captures the value of 
   * 'this' from its surrounding lexical scope, which is outerFunction in this case. 
   * This means that the value of this inside innerFunction refers to the outerObj object,
   * not the innerObj object.
   * As a result, when we run the code, we see that the output shows "Inner Function - My name is Outer Object",
   * indicating that this.name inside innerFunction is referring to the name property of outerObj.
   * This behavior can be useful when working with nested objects or closures, as it allows 
   * the inner function to access variables and properties from its surrounding scope without the need for explicit binding.
   */

  