// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with

const inventors = [
 {
     first: 'Albert',
     last: 'Einstein',
     year: 1879,
     passed: 1955
 }, {
     first: 'Isaac',
     last: 'Newton',
     year: 1643,
     passed: 1727
 }, {
     first: 'Galileo',
     last: 'Galilei',
     year: 1564,
     passed: 1642
 }, {
     first: 'Marie',
     last: 'Curie',
     year: 1867,
     passed: 1934
 }, {
     first: 'Johannes',
     last: 'Kepler',
     year: 1571,
     passed: 1630
 }, {
     first: 'Nicolaus',
     last: 'Copernicus',
     year: 1473,
     passed: 1543
 }, {
     first: 'Max',
     last: 'Planck',
     year: 1858,
     passed: 1947
 }, {
     first: 'Katherine',
     last: 'Blodgett',
     year: 1898,
     passed: 1979
 }, {
     first: 'Ada',
     last: 'Lovelace',
     year: 1815,
     passed: 1852
 }, {
     first: 'Sarah E.',
     last: 'Goode',
     year: 1855,
     passed: 1905
 }, {
     first: 'Lise',
     last: 'Meitner',
     year: 1878,
     passed: 1968
 }, {
     first: 'Hanna',
     last: 'Hammarström',
     year: 1829,
     passed: 1909
 },
    { 
        first: 'Andriy', 
        last: 'Polukhin', 
        year: 1985, 
        passed: 2150 },
    { 
        first: 'Anastasia', 
        last: 'Polukhina (Tsukrova)', 
        year: 1989, 
        passed: 2150}
];

 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William', 'Andriy, Polukhin', 'Anastasia, Polukhina'];

 //Array.prototype.filter()
 // 1. Filter the list of inventros for those who were born in the 1550's
 
    // 1.1 Old way
    const fifteen = inventors.filter(function(inventor) {
        if(inventor.year >= 1500 && inventor.year < 1600) {
            return true; // keep it!
        }
    });

    // 1.2 updated styling
    const fifteen2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

    // 1.3 remembering
    const fifteen3 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    // console.log(fifteen);
    // console.table(fifteen2); // This is a cool hack!

 // Array.prototype.map()
 // 2. Give us an array of the inventrors' first and last names
    const fullNames = inventors.map(inventor => `${inventor.first}  ${inventor.last}`);
    // console.table(fullNames);

    // remembereing
    const fullName2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);


 // Array.prototype.sort()
 // 3. Sort the inventors by birthdate, oldest to youngetst
    // 3.1 Full function
    const ordered = inventors.sort(function(a, b) {
        if(a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });

    // 3.2 Shorted version
    const ordered2 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    // console.table(ordered2);

    // remembering
    const ordered3 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);


 // Array.prototype.reduce()
 // 4. How many year did all the inventors live?
    //4.1 WIth a for loop
    var totalYears = 0;
    for(var i = 0; i < inventors.length; i++) {
        totalYears += inventors[i].year;
    }
    // console.log(totalYears);

    // 4.2 Using reduce
    const totalYears2 = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

    // remembering
    const totalYears3 = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);

    console.log(totalYears2);
 // 5. Sort the inventors by year lived
    // 5.1 Long version
    const oldest = inventors.sort(function( a, b) {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        if(lastGuy > nextGuy) {
            return -1;
        } else {
            return 1;
        }
    });
    // 5.2 Shorter version
    const oldest2 = inventors.sort((a,b) => {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    });

    // console.table(oldest2);

    // remembering
    const oldest3 = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.yaer;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    });
 // 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
 // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

 /*
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));

    const de = links
                .map(link => link.textContent)
                .filter(streetName =>streetName.includes('de'));

    console.table(de);
*/
 // 7. Sort Exercise
 // Sort the people alphabeticaly by last name
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        
        return aLast > bLast ? 1 : -1;
    });
    console.table(alpha);

    // remembering
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');

        return aLast > bLast ? 1 : -1;
    })
 //8. Reduce Exercise
 // Sum the instances of each of therse
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

 const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
 }, {});

 console.table(transportation);

 // remembering

 const transortation2 = data.reduce(function(obj, item) {
     if(!obj[item]) {
         obj[item] = 0;
     }
     obj[item]++;
     return obj;
 }, {});