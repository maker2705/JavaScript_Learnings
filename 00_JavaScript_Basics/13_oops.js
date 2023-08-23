const user = {
    username: 'a001',
    loginCount: 8,
    signedIn: true,
    getUserDetails: () =>{
        // console.log("Got the user details from the database");
        console.log(`Username: ${user.username}`);
        // console.log(`Username: ${this.username}`);
        // output:=> Username: undefined. 'this' doesn't bind with the context of arrow function 
        console.log(`Username: ${user.username}`)
    }
}
user.getUserDetails()



const obj = {
    name: 'John',
    greetArrow: () => {
    // console.log(`Hello, my name is ${this.name}`) 
     console.log(`Hello, my name is ${user.name}`);
    }
  };
  
  obj.greetArrow(); // Output: Hello, my name is undefined
//   In an arrow function, this is not dynamically bound; it is lexically scoped.
// The arrow function captures the 'this' value from its surrounding scope,
// which is the global scope in this case. 
// Hence, this.name inside the arrow function becomes undefined.

// constructor function
// In JavaScript, constructor functions are a way to create and initialize objects with a set of properties and methods.
// They act as blueprints for creating instances of objects that share the same structure and behavior.
// Constructor functions are an essential concept in JavaScript, especially when you want to create multiple objects of the same type.

