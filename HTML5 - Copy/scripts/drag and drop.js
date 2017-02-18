function doFirst () {
   mypic = document.getElementById('pic');
   mypic.addEventListener("dragstart",startDrag, false);
   mypic.addEventListener("dragend",endDrag, false);
   leftBox = document.getElementById('left_box');
   leftBox.addEventListener("dragenter", dragenter,false);
   leftBox.addEventListener("dragleave", dragleave,false);
   leftBox.addEventListener("dragover",function(e){e.preventDefault();} ,false);
   leftBox.addEventListener("drop",dropped ,false);
}

function endDrag (e) {
    pic = e.target;
    pic.style.visibility = 'hidden';
}

function dragenter (e) {
    e.preventDefault();
    leftBox.style.background = "SkyBlue";
    leftBox.style.border = "3px solid red" ;
}

function dragleave (e) {
    e.preventDefault();
    leftBox.style.background = "white";
    leftBox.style.border = "3px solid blue" ;
}


function startDrag(e){
    var code = '<img id="pic" src="images/saty.png" width= 125px height= 125px>';
    e.dataTransfer.setData('Text', code);
    /*to store info. on that event*/
}

function dropped (e) {
    e.preventDefault();
    leftBox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);
