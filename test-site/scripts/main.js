/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/* Your heading text has now been changed to "Hello world!" using JavaScript.
You did this by first using a function called querySelector() to grab a reference to
your heading, and store it in a variable called myHeading. This is very similar to what
we did using CSS selectors. When wanting to do something to an element, you first need to
select it.

After that, you set the value of the myHeading variable's textContent property (which
represents the content of the heading) to "Hello world!". */

// Image switcher code

/*

You store a reference to your image element in the myImage variable. Next, you make this variable's
onclick event handler property equal to a function with no name (an "anonymous" function).
Now, every time this image element is clicked:

You retrieve the value of the image's src attribute.
You use a conditional to check whether the src value is equal to the path to the original image:
If it is, you change the src value to the path to the 2nd image, forcing the other image to be
loaded inside the <image> element.
If it isn't (meaning it must already have changed), the src value swaps back to the original
image path, to the original state.

*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// Personalized welcome message code
/*
 this takes references to the new button and the heading, storing them inside variables
 */
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


/*
This function contains a prompt() function, which brings up a dialog box, a bit like alert().
This prompt(), however, asks the user to enter some data, storing it in a variable after the
user presses OK. In this case, we are asking the user to enter their name. Next, we call on
an API called localStorage, which allows us to store data in the browser and later retrieve it.
We use localStorage's setItem() function to create and store a data item called 'name', setting
its value to the myName variable which contains the data the user entered. Finally, we set the
textContent of the heading to a string, plus the user's newly stored name.
 */
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

/*
This block first uses the negation operator (logical NOT, represented by the !) to check whether
the name data exists. If not, the setUserName() function is run to create it. If it exists
(that is, the user set it during a previous visit), we retrieve the stored name using getItem()
and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
 */

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

/*
Finally, put the below onclick event handler on the button. When clicked, the setUserName() function is run.
This allows the user to set a new name, when they wish, by pressing the button
 */
myButton.onclick = function() {
  setUserName();
}