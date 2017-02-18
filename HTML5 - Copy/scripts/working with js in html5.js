
/*querySelector forr multiple elements*/

function getStuff (argument) {
    var list = document.querySelectorAll('#tuna');
    for(var i=0; i<list.length;i++)
    {
        list[i].onclick= talk;
    }

}

function talk()
{
    alert("yoyo satyam!!!");
}
window.onload=getStuff;
