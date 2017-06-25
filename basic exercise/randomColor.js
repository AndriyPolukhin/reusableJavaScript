function init() {
    //Change the TAG where you want to change the HTML text
    var h1tags = document.getElementsByTagName('h1');
    h1tags[0].onclick = changeColor;
}



function changeColor() {
    this.innerHTML = "Click Again!";

    var randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    this.style.color = randomcolor;
}


onload = init;
