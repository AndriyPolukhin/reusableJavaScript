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
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=db8bccaa0d0b6f3205c80c763b51ed2a";
    xmlhttpweather.open("GET", url, true);
     
    xmlhttpweather.send();

    xmlhttpweather.onreadystatechange = function()
    {
        var output = "";
        var mainWeather = "";
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
            
            
            output += "<p><b>Latest Weather Updates at: <br>" + location + "   </b></p>";
            output += "<table><tr><td>Description</td><td>" + description +"</td></tr>";
            output += "<tr><td>Temperature</td><td id='tempF'>" + temperature; 
            output += "<a id='temp_switch' class='button'> C</a></td></tr>";
            output += "<tr><td>Pressure</td><td>" + pressure + " hpa</td></tr>";
            output += "<tr><td>Humidity</td><td>" + humidity + " %</td></tr>";
            output += "<tr><td>Wind Speed</td><td>" + windSpeed + " m/s</td></tr>";
            output += "<tr><td>Icon</td><td id='icon'>" + icon + "</td></tr>";
            output += "</table>";

            var weather = document.getElementById("weather");
            weather.innerHTML = output; 
            
            
           
            
            weather.addEventListener("click", function (event) {
                event.stopPropagation();
                changeTemp(temperatureF);
            }); 

            // MAIN WEATHER DESCIPTION
            mainWeather = weatherInfo.weather[0].main;
            if(mainWeather) {
                colorWeather(mainWeather);
            }



        }
    }    
}
function onError(error) {
    switch (error.code) {
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

// THIS FUNCTION IS FOR CHANGING THE BACKGROUND AND THE ICON FOR THE WEATEHR FORECAST
var bodyBg;
var iconCh;
function colorWeather(mainWeather) {
    bodyBg = document.getElementById("body");
    iconCh = document.querySelector("td#icon");
    var color = mainWeather;

    
    if(color != "Hurracane") {
    
    switch(color)
        {
            case "Clouds":
                bodyBg.className = "clouds";
                iconCh.innerHTML = "<i class='fas fa-cloud'></i>";
                break;
            case "Rain":
                bodyBg.classList.add("rain");
                iconCh.innerHTML = "<i class='fas fa-tint'></i>";
                break;
            case "Snow":
                bodyBg.classList.add("snow");
                iconCh.innerHTML = "<i class='fas fa-snowflake'></i>";
                break;
            case "Extreme":
                bodyBg.classList.add("extreme");
                iconCh.innerHTML = "<i class='fas fa-hotjar'></i>";
                break;
            case "Mist":
                bodyBg.classList.add("mist");
                iconCh.innerHTML = "<i class='fas fa-cloudversify'></i>";
                break;
            case "Clear":
                bodyBg.classList.add("clear");
                iconCh.innerHTML = "<i class='fas fa-skyatlas'></i>";
                break;
            case "Sunny":
                bodyBg.classList.add("sunny");
                iconCh.innerHTML = "<i class='fas fa-sun'></i>";
                break;
            default:
                bodyBg.classList.add("default");
                iconCh.innerHTML = "<i class='fas fa-cloudversify'></i>";
                break;
        }
    }
}


// THIS CHANGES THE TEMPERATURE WITH A CLICK ON A INDICATOR LINK
function changeTemp(temperatureF) {
    var tempF_base = temperatureF;
    var tempSwitch = document.querySelector("a#temp_switch.button");
    var tempData = document.querySelector("td#tempF");
    var tempSwitchText = tempSwitch.innerText;

    if (tempSwitchText === " F") {
        var tempC = Math.round((tempF_base - 273.15) * 100) / 100;
        tempData.innerHTML = tempC + "<a id='temp_switch' class='button'> C</a>";
    } else if (tempF_base > 100) {
        tempData.innerHTML = "";
        tempData.innerHTML = tempF_base + "<a id='temp_switch' class='button'> F</a>"; 
    } 
}



