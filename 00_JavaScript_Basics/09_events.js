// console.log('It worked');
// document.getElementById('owl').onclick = function(){
    //* not good practice to do it like this, use "addEventListener" instead of  "onclick"
    //     alert("owl clicked")
    //*  } 

     // attachEvent() //* old method
    // jQuery - onEventListener 
   //* jQuery method
/* //* important properties of event object
    * type, timestamp, defaultPrevented
    * target, toElement, srcElement, currentTarget,
    * clientX, clientY, screenX, screenY
    * altkey, ctrlkey, shiftkey, keyCode
    *
 */

    //  document.getElementById('images').addEventListener('click', function(e){
    //      console.log(e);
    //      console.log("clicked inside the ul");
    // }, false)
 /** */
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    // e.stopPropagation()
    // }, false)
    // document.getElementById('river').addEventListener('click', function(e){
    //     console.log("river is flowing");
    // e.stopPropagation()
    // }, false)
/** */
    // *document.getElementById('google').addEventListener('click', function(event){
    // *        event.preventDefault();
    // *        event.stopPropagation();
    // *        console.log('Google is clicked');
    // *}, false)
   
   
    // removeIt.parentNode.removeChild(removeIt)


    //* lets learn about 'event' variable in the callBackFunction in the addEventListener

   /*  'event' parameter in the callBackFn is a variable that represents the event object

   * It's commonly names as 'event', but we can choose any valid variable name.
   * This 'event' refers to a different events, in our specific case, it is 'click' event.
   * The event object in this case, will be an instance of the 'MouseEvent' object.
   * MouseEvent is a specific type of an event object that refpresents a user action involving a mouse click. 
   *  */

// *   lets see what will event return if we log it to the console.
// * I've attached an event listener to the element with id as 'images' (i.e. our <ul> element)
// * so whenever we click on the list it will log the event object to the console 
// * lets see the output
document.querySelector('#images').addEventListener('click', function(event){
    console.log(event);
}, false)
//* output:=> PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …} 
//* We got an object in the output named as 'PointerEvent'
//* lets learn about this 'PointerEvent'
//* => PointerEvents are DOM events 
//* Learn your notes to learn more about them.