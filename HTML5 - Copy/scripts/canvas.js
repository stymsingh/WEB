function doFirst () {
    var x= document.getElementById('canvas');
    canvas=x.getContext('2d');
    var g=canvas.createLinearGradient(0,0,100,100);
    g.addColorStop(0,"blue");
    g.addColorStop(1,"red");
    canvas.fillStyle = g;
    canvas.fillRect(0,0,100,100);
}

/*call the function as soon as the window is loaded*/
window.addEventListener("load",doFirst, false);
