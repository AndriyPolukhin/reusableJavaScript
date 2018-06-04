// 1. set an object that we work with
const dataObject = {
    0: {
        "id": 5,
        "name": "Basecamp",
        "city": "Chicago",
        "state": "IL",
        "url": "https://basecamp.com/"
    },
    1: {
        "id": 17,
        "name": "Google",
        "city": "Mountain View",
        "state": "CA",
        "url": "https://google.com"
    }
};

// 2. Cache of the template
const template = document.getElementById("template-list-item");
// 3. Get the content of the template
const templateHTML = template.innerHTML;
// 4. Final HTML variable as empty string
let listHTML = "";

/*
// 5. Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (let key in dataObject) {
    listHTML += templateHTML
        .replace(/{{id}}/g, dataObject[key]["id"])
        .replace(/{{name}}/g, dataObject[key]["name"])
        .replace(/{{city}}/g, dataObject[key]["city"])
        .replace(/{{state}}/g, dataObject[key]["state"])
        .replace(/{{url}}/g, dataObject[key]["url"])
}
*/
/*
// 6. ALTERNATIVE LOOP 1
for (var key in dataObject) {
    listHtml += templateHtml.replace(/{{id}}/g, dataObject[key].id)
        .replace(/{{name}}/g, dataObject[key].name)
        .replace(/{{city}}/g, dataObject[key].city)
        .replace(/{{state}}/g, dataObject[key].state)
        .replace(/{{url}}/g, dataObject[key].url);
}
*/

// 7. Converting object to an array
const dataArray = Object.keys(dataObject).map(k => dataObject[k]);
// loop through the array dataArray, replace placeholder tags
// with actual data, and generate final HTML
for (let i = 0; i < dataArray.length; i++) {
    listHTML += templateHTML
        .replace(/{{id}}/g, dataArray[i]["id"])
        .replace(/{{name}}/g, dataArray[i]["name"])
        .replace(/{{city}}/g, dataArray[i]["city"])
        .replace(/{{state}}/g, dataArray[i]["state"])
        .replace(/{{url}}/g, dataArray[i]["url"]);
}


// 6. Replace the HTML of #list with final HTML
document.getElementById("list").innerHTML = listHTML;