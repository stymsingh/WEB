function doFirst(){
    barSize=550;
    /*bar size is the size of the default bar*/
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    bar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');

    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){
        myMovie.pause();
        playButton.innerHTML = 'Play';
        window.clearInterval(updateBar);
    }else{
        myMovie.play();
        playButton.innerHTML = 'Pause';
        updateBar = setInterval(update, 500);
    }
}

function update(){
    if(!myMovie.ended){
        var size = parseInt(myMovie.currentTime*barSize/myMovie.duration);
        progressBar.style.width = size + 'px';
    }

    else{
        progressBar.style.width = '0px';
        /*as the video starts again so set it to 0px*/

        playButton.innerHTML = 'Play';/*change text to play*/

        window.clearInterval(updateBar);
        /*stop updating the bar*/
    }
}

function clickedBar(e){
    /*e is the cursor position*/
    if(!myMovie.paused && !myMovie.ended){

        /*to get the x position of the mouse*/
        var mouseX = e.pageX-bar.offsetLeft;


        /*offset length basically means how left from the bar the cursor is*/
        /*this generally calculates the x position of the mouse and stores it*/
        var newtime = mouseX*myMovie.duration/barSize;


        /*calculates the new starting time for the video*/
        myMovie.currentTime = newtime;


        /*now the movie plays from the new time*/
        progressBar.style.width = mouseX + 'px';
    }
}

window.addEventListener('load', doFirst, false);