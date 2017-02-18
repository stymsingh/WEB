function doFirst () {
   var x = document.getElementById('canvas');
   canvas = x.getContext('2d');
   canvas.font = "bold 22px Tahoma";
   canvas.textAlign = "start";

   /*canvas.fillText("start", 10,30);
   canvas.translate(100,150);
   canvas.fillText("end", 0,0);
   canvas.rotate(1);
   canvas.fillText("rotate", 0,0);
   canvas.scale(1.5,4);
   canvas.fillText("scaled", 0, 20);*/

   /*saving and restoring canvas

   canvas.save();
   canvas.fillText("start", 10,30);
   canvas.rotate(1);
   canvas.fillText("end", 60,10);
   canvas.restore();
   canvas.fillText("restoring", 10,30);

   */

  /*
  images on the canvas
   */

   var image = new Image();
   image.src="images/saty.png";
   image.addEventListener("load", function(){canvas.drawImage(image, 0,0,x.width, x.height)}, false);

}

window.addEventListener("load", doFirst, false);