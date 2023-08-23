const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach( (clicked) =>{
    clicked.addEventListener('click', function(event){
        if(event.target.id === 'grey'){
            body.style.backgroundColor='grey'
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor=event.target.id;
        }
    });
//* or body.style.backgroundColor='event.target.id'. Because it holds the value='grey' taken from the id

}  )