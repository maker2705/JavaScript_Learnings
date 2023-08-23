##Common mistakes

Here are some common mistakes to watch out for when composing promise chains. Several of these mistakes manifest in the following example:
JS.

// Bad example! Spot 3 mistakes!

doSomething()
  .then(function (result) {
    // Forgot to return promise from inner chain + unnecessary nesting
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());
// Forgot to terminate chain with a catch!


The first mistake is to not chain things together properly. This happens when we create a new promise but forget to return it. As a consequence, the chain is broken — or rather, we have two independent chains racing. This means doFourthThing() won't wait for doSomethingElse() or doThirdThing() to finish, and will run concurrently with them — which is likely unintended. Separate chains also have separate error handling, leading to uncaught errors.
 
The second mistake is to nest unnecessarily, enabling the first mistake. Nesting also limits the scope of inner error handlers, which—if unintended—can lead to uncaught errors. A variant of this is the promise constructor anti-pattern, which combines nesting with redundant use of the promise constructor to wrap code that already uses promises.

The third mistake is forgetting to terminate chains with catch. Unterminated promise chains lead to uncaught promise rejections in most browsers. See error handling below.

A good rule of thumb is to always either return or terminate promise chains, and as soon as you get a new promise, return it immediately, to flatten things:

JS
Copy to Clipboard

doSomething()
  .then(function (result) {
    // If using a full function expression: return the promise
    return doSomethingElse(result);
  })
  // If using arrow functions: omit the braces and implicitly return the result
  .then((newResult) => doThirdThing(newResult))
  // Even if the previous chained promise returns a result, the next one
  // doesn't necessarily have to use it. You can pass a handler that doesn't
  // consume any result.
  .then((/* result ignored */) => doFourthThing())
  // Always end the promise chain with a catch handler to avoid any
  // unhandled rejections!
  .catch((error) => console.error(error));


please break this 