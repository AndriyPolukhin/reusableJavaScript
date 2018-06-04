const template = document.getElementById("template-list-item");
const templateHtml = tempalte.innerHTML;

// Ajax call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        // on Success
        if (xhr.state == 200) {
            // convert to JSON string response to an Object
            var dataObject = JSON.parse(xhr.responseText);
            document.getElementById("list").innerHTML = listCreateHtml(dataObject);
        }
    }
}

xhr.open("GET", "/url/to/get-data", true);
xhr.send();

function listCreateHtml(dataObejct) {
    var listHtml = "";

    for (key in dataObject) {\
        listHtml += templateHtml
            .replace(/{{id}}/g, dataObject[key]["id"])
            .replace(/{{name}}/g, dataObject[key]["name"])
            .replace(/{{city}}/g, dataObject[key]["city"])
            .replace(/{{state}}/g, dataObject[key]["state"])
            .replace(/{{url}}/g, dataObject[key]["url"]);
    }
}


/*
// jQuery used like this
$.ajax({
    type: "GET",
    url: "/url/to/get-data/",
    dataType: "json",
    success: function (dataJSON) {
        // Convert JSON string response to an Object
        var dataObject = JSON.parse(dataJSON);

        document.getElementById("list").innerHTML = listCreateHtml(data);
    }
});

*/