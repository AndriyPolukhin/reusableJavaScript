const LOCAL_FORECAST = {
today : { min: 72, max: 83 },
tomorrow : { min: 73.3, max: 84.6 }
};
function getMaxOfTomorrow(forecast) {
"use strict";
const { tomorrow: { max: maxOfTomorrow }} = forecast;
return maxOfTomorrow;
}
getMaxOfTomorrow(LOCAL_FORECAST)
