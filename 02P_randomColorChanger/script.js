function randNum(anyNumber){
    return Math.round(Math.random()*(anyNumber+1));
}
document.querySelector('button').addEventListener('click', function(event){
    const randomColor=`rgb(${randNum(255)},${randNum(255)},${randNum(255)})`;
    document.body.style.backgroundColor=randomColor
})