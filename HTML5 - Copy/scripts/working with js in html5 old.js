/*query selector for a single elememt*/

function getStuff (argument) {
    document.querySelector('#tuna').onclick=talk;
    /* scans d entire document and selects the very first element with id=tuna.*/
    /* it then says that whenever the element is clicked, it calls the talk function.*/
}


function talk(){
    alert("yoyo satyam!!!");
}
window.onload=getStuff;
/*whenever everything of the webpage loads, call the getstuff function*/


