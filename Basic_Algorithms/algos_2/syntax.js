const companies = [
    {name: 'Company One', category: "Finance", start: 1981, end: 2003},
    {name: 'Company Two', category: "Retail", start: 1992, end: 2008},
    {name: 'Company Three', category: "Auto", start: 1999, end: 2007},
    {name: 'Company Four', category: "Retail", start: 1989, end: 2010},
    {name: 'Company Five', category: "Technology", start: 2009, end: 2014},
    {name: 'Company Six', category: "Finance", start: 1987, end: 2010},
    {name: 'Company Seven', category: "Auto", start: 1986, end: 1996},
    {name: 'Company Eight', category: "Technology", start: 2001, end: 2016},
    {name: 'Company Nine', category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 23];


// forEach() 
    companies.forEach(function(company) {
        // console.log(company.name);
    })

// filter()

    /*====================
     GET 21 and older 
     =====================*/
// 1. With a for loop
    let canDrink = [];
    for(let i = 0; i < ages.length; i++) {
        if(ages[i] >= 21) {
            canDrink.push(ages[i]);
        }
    }
// 2. Filter ES5
    /*const canDrink = ages.filter(function(age) {
        if(age >= 21) {
            return true;
        }
    });
    */
// 3. The ES6 Way
    // const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

    /*====================
     Filter the Retail Co
     =====================*/
// 1. ES 5 Way
/*
const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true;
    }
});
*/
// 2. ES 6 Way
const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

    /*====================
     Get the 80 comampneis
     =====================*/

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

    /*====================
     Get companies over 10y
     =====================*/
const lastedTenyears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenyears);

// map()

// 1. Create array of company names

// I way - oldway
const companyNames = companies.map(function(company){
    return company.name;
});
// console.log(companyNames);
/*
const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);
*/
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// 2. Square root the ages
const ageMap = ages
.map(age => Math.round(Math.sqrt(age)))
.map(age => age * 2);
// console.log(ageMap);


// sort()
    // 1. SOrted Companies
    /*
    const sortedCompanies = companies.sort(function(c1, c2) {
        if(c1.start > c2.start) {
            return 1;
        } else {
            return -1;
        }
    });
    */
    // console.log(sortedCompanies);

    // Sort shorter
  /*  const sortShort = companies.sort((a,b) => (a.start>b.start ? 1:-1));
    */// console.log(sortShort);


    // 2. Sort ages
    //const sortAges = ages.sort((a, b) => b - a);
    // console.log(sortAges);


// reduce()

// 1. Add all the numbers
/*
let ageSum = 0;
for (let i = 0; i < ages.length; i++)
{
    ageSum += ages[i];
}
console.log(ageSum);
*/

const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

const ageReduce = ages.reduce((total, age) => total + age, 0);
// console.log(ageReduce);


// 2. Total years for all companies
const totalY = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);
// console.log(totalY);

const totalReduce = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalReduce);


// COMBINE METHODS

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a -b)
    .reduce((a,b) => a + b, 0);

    console.log(combined);

