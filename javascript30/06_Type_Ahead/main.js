// 1. Request the data source for the cities and states and store it in a const var
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 2. Create a const array for the data
const cities = [];

// 3. Use fetch api to retrive the data from the endpoint
fetch(endpoint)
    // 3.1 Transform the data to json format
    .then(blob => blob.json())
    // 3.2 using a spread operator push the data to the array cities[];
    .then(data => cities.push(...data));

// 4. Create a function to filter the data
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // 4.1  here we need to figure out if the city or state matches whar was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

// 5. Create a display function
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
                 
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}
// 5.1 You need to select the searchInput form the DOM
const searchInput = document.querySelector('.search');
// 5.2 You need to select the li suggestions li from the DOM
const suggestions = document.querySelector('.suggestions');

// 5.3 Add and EventListener
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// 6. Use a function to add commas to nubmers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}