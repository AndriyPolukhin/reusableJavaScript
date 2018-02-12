window.onload = function()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enableHighAccuracy: true,
            maximumAge: 60*1000,
            timeout: 5*60*1000
        });
    }
    else {
        document.getElementById("weather").innerHTML = "Your browser does not support HTML5 Geolocation";
    }
}

function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var xmlhttpweather = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=db8bccaa0d0b6f3205c80c763b51ed2a";
    xmlhttpweather.open("GET", url, true);
     
    xmlhttpweather.send();

    xmlhttpweather.onreadystatechange = function()
    {
        var output = "";
        if(xmlhttpweather.readyState == 4 && xmlhttpweather.status == 200)
        {
            var jsonResponse = xmlhttpweather.responseText;
            var weatherInfo = JSON.parse(jsonResponse);
            /* DATA FROM THE JSON Response Text */
            var location = weatherInfo.name;
            var description = weatherInfo.weather[0].description;
            var temperatureF = weatherInfo.main.temp;
            var temperature = Math.round((weatherInfo.main.temp - 273.15)*100)/100;
            var pressure = weatherInfo.main.pressure;
            var humidity = weatherInfo.main.humidity;
            var windSpeed = weatherInfo.wind.speed;
            var icon = weatherInfo.weather[0].icon;
            
            


            output += "<p><b>Latest Weather Updates: " + location + "</b></p>";
            output += "<table><tr><td>Description</td><td>" + description +"</td></tr>";
            output += "<tr><td>Temperature</td><td id='tempF'>" + temperature + " o".sup() +  "<span id='temp_switch'>C</span></td></tr>";
            output += "<tr><td>Pressure</td><td>" + pressure + " hpa</td></tr>";
            output += "<tr><td>Humidity</td><td>" + humidity + "</td></tr>";
            output += "<tr><td>Wind Speed</td><td>" + windSpeed + " m/s</td></tr>";
            output += "<tr><td>Icon</td><td>" + icon + "</td></tr>";
            output += "</table>";

            document.getElementById("weather").innerHTML = output;
            document.getElementById("temp_switch").addEventListener("click", changeTemp()); 

        }
    }

    
}



document.getElementById("weather").addEventListener("onload", "div", "span", changeTemp()); 

function changeTemp() {
    var current = document.getElementById("temp_switch");
    var tempChange = document.getElementById("tempF");
    var switchC = 'F';
    var temperature = tempChange.innerText;
    if (current == switchC) {
        current.innerHTML = "C";
        tempChange.innerHTML = Math.round((tempChange.innerText - 273.15) * 100) / 100;;
    } else {
        current.innerHTML = "F";
        tempChange.innerHTML = temperature;
    }
}


function onError(error)
{
    switch(error.code)
    {
        case PERMISSION_DINIED:
            alert("User denied premission");
            break;
        case TIMEOUT:
            alert("Geolocation timeout");
            break;
        case POSITION_UNAVAILABLE:
            alert("Geolocation information is not available");
            break;
        default:
            alert("Unknown error");
            break;
    }
}

