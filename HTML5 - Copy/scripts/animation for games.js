function doFirst () {
   var x = document.getElementById('canvas');
   canvas = x.getContext('2d');
   window.addEventListener("mousemove", satyam, false);
}

window.addEventListener("load", doFirst, false);

function satyam(e)
    /*e is the event*/
    {
       canvas.clearRect(0,0,600,400);/*to clear the entire canvas*/
       var xPos = e.clientX;
       var yPos = e.clientY;
       canvas.fillRect(xPos-50,yPos-50,100,100);
    /*xPos-50,yPos-50 to place the pointer in the center of the square*/
   }


