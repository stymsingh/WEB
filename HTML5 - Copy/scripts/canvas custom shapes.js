function doFirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');

    canvas.strokeRect(100,100,100,100);
    canvas.beginPath();
    canvas.moveTo(10,10);
    canvas.lineTo(50,50);
    canvas.lineTo(50,10);
    canvas.lineTo(10,10);
    canvas.fill();


    /*canvas.strokeRect(50,50,100,100);
    canvas.beginPath();
    canvas.moveTo(75,75);
    canvas.lineTo(125,75);
    canvas.lineTo(125,125);
    canvas.closePath();
    canvas.fill();*/

    /*canvas.beginPath();
    canvas.moveTo(2,0);
    canvas.lineTo(7,4);
    canvas.lineTo(6,6);
    canvas.lineTo(0,1.5);
    canvas.closePath();
    canvas.fill();*/

}

window.addEventListener('load', doFirst, false);