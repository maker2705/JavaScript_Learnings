const { JSDOM } = require('jsdom');
const fs = require('fs');
const { log } = require('console');

const html = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

const element = document.getElementById('myDiv');

// console.log(element);
//* output: => HTMLDivElement {} 

const className = document.getElementById('myDiv').className;
// console.log(className);
//* output: => container //it returned the class Name of the element whose id is 'myDiv'

let innerHTML = document.getElementById('myDiv').innerHTML
//* console.log(innerHTML);
/* 
//*go and check the html code of this element
* output:=>
<p id="paragraph" class="content">This is a paragraph.</p>
    <button id="myButton" class="btn">Click me</button>
    <ul id="myList" class="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul> 

*/
// * innerHTML can also be used to change the content
document.getElementById('myDiv').innerHTML='<h1> Now I am a hading</h1>'
