var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
ourRequest.onload = function () {

    document.write(ourRequest.reponseText);

};

ourRequest.send();
