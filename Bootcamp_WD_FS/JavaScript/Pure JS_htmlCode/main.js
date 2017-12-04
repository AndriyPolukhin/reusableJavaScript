var pElements = document.getElementsByTagName("p");

pElements[1].style.backgroundColor = "#edFeEd";

document.childNodes[1].style.backgroundColor = "#FAE8D7";

var samplDiv2 = document.getElementById("samplDiv2");

samplDiv2.childNodes[1].style.backgroundColor = "#F0FF00";

samplDiv2.childNodes[2].childNodes[1].style.backgroundColor = "#BFAFB2";


document.write("Node Type : ", samplDiv2.childNodes[1].childNodes[0].nodeType, "<br>");
document.write("Node Name : ", samplDiv2.childNodes[1].childNodes[1].nodeName, "<br>");

var logo = document.getElementById("logo2");

document.write("Logo has alt : ", logo.hasAttribute("alt"), "<br>");

logo.setAttribute("alt", "HELLO", "<br>");

document.write("Get Attributte : ", logo.getAttribute("alt"), "<br>");


var attribList = document.getElementById("logo2").attributes;

for (i = 0; i < attribList.length; i++) {
    document.write("Attribute : ", i, " : ", attribList[i].nodeName, " : ", attribList[i].nodeValue, "<br>");
}


var paragraph3 = document.createElement("p");

paragraph3.setAttribute("id", "paragraph3");
paragraph3.innerHTML = "THIS IS A NEW PARAGRAPH WITH A TEXT GENERATED WITH A USE OF JAVASCRIPT";

samplDiv2.appendChild(paragraph3);
samplDiv2.insertBefore(paragraph3, samplDiv2.childNodes[0]);
