function doFirst () {
    var button= document.getElementById('button');
    button.addEventListener("click", save, false);
}

function save () {
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    sessionStorage.setItem(one, two);

    display(one);
}

function display (one) {
    var rightbox = document.getElementById("rightbox");
    var two = sessionStorage.getItem(one);
    rightbox.innerHTML = "name of the variable is: "+one+"<br /> Value: "+two;
}

window.addEventListener("load", doFirst, false);
