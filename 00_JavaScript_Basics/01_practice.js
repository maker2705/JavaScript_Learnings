num1=3;
num2='3';
num3=7.5
num4='5.5'
// console.log(parseInt(num2)+num1); =>6

console.log(num1+parseInt(num3));//=> 10
const string='Ankit'

console.log(`hello!, I am ${string}`);

// string='JavaScript';
// console.log(string); //* output:=> TypeError: Assignment to constant variable.

//* write a function that accepts string and first lists out 
//* its each vowel in new line and then consonants in new lines
function vowelsAndConsonants(anyString){

    let vowel="";
    let consonant="";
  for(let i =0;i<anyString.length; i++)
  {
    let char=anyString[i].toLowerCase();
    if("aeiou".includes(char)){
        vowel+=char+"\n";
    }
    else consonant+=char+"\n";
  }  
  console.log(vowel+consonant);
}

console.log(0===false)
console.log(false==='')
console.log(false===0)
console.log(1===true)
console.log(0==='')
//* aboove all are false 

//* below ones are all true 
console.log(0==false)
console.log(false=='')
console.log(false==0)
console.log(1==true)
console.log(0=='')




//* clearInterval and setInterval

//* function startMe(){
//*     const sayingHello=setInterval(startMe,2000);
//*     console.log('Hello',Date.now());
//* }
//*       function stopMe(){
//*         clearInterval(sayingHello);
//*       }


//*         document.querySelector('#start').addEventListener('click', (event) => {
//*             startMe();
//*         })
//*         document.querySelector('#stop').addEventListener('click', (event) => {
//*             stopMe();
//*         })

console.log(console.log('hello',console.log(undefined)));
//* outpur: =>
// undefined
// hello undefined
// undefined