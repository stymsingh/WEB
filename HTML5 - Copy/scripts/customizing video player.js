function doFirst () {
	barSize = 600;
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');

	/*creating event listeners*/

	playButton.addEventListener('click' , PlayOrPause, false);
	bar.addEventListener('click' , clickedBar, false);
}

function PlayOrPause(){
	if(!myMovie.pause && !myMovie.ended){
		myMovie.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
		/*means stop updating the bar*/
	}

	else{
		myMovie.play();
		playButton.innerHTML='Pause';
		updateBar = setInterval(update,500)
		/*updateBar is a variable*/
		/*setinterval is a js method that is used when a function has to be caled again and again.*/
		/*setinterval takes as parameter the function to be called and after how much time the function
		 has to be called in millisecond*/
	}
}

function update()
{
	if(!myMovie.ended){
		var size = parseInt(myMovie.currentTime*barSize/myMovie.duration);
	/*parseint take an integer and convert it into an integer*/
	/*how to access css from js*/
		progressBar.style.width = size+'px';
	}
	else{
		progressBar.style.width = '0px';
		playButton.innerHTML = 'Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e)
/*e is going to be the position of the cursor*/
	{
		if(!myMovie.pause && !myMovie.ended){
		var mouseX = e.pageX-bar.offsetLeft;
	 /*the bar is the defult bar*/
	 /*the function calculates the x position of the mouse and stoe it in mouseX*/

	 	var newTime = mouseX * myMovie.duration/barSize;
	 	myMovie.currentTime = newTime;
	 	progressBar.style.width = mouseX+'px';
	 }
}

window.addEventListener('load', doFirst, false);
