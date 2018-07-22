let FCC_User = {

    username: 'awesome_coder',

    followers: 572,

    points: 1741,

    completedProjects: 15

};


let userData = FCC_User.followers;
userData = FCC_User['followers'];

console.log(userData);


let nestedObject = {
    id: 2834282397432,
    date: 'December 31, 2018',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13
        }
    }
};


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 25,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory("apples"));
