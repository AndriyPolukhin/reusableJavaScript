//Setup

var contacts = [
    {
        'firstName': 'Akira',
        'lastName': 'Laine',
        'number': '0543236543',
        'likes': ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '0994372684',
        'likes': ['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        'firstName': 'Sherlock',
        'lastName': 'Holmes',
        'number': '0487345643',
        'likes': ['Intiguing Cases', 'Violin']
    },
    {
        'firstName': 'Kristian',
        'lastName': 'Vos',
        'number': 'unknown',
        'likes': ['JavaScript', 'Gaming', 'Foxes']
    }
];

function lookUpProfile(firstName, prop) {
    var answer = 'No such contact';
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (!contacts[i].hasOwnProperty(prop)) {
            return 'No such property';
        }
    }
    return answer;
}

lookUpProfile('Akira', 'likes');
lookUpProfile('Kristian', 'lastName');
lookUpProfile('Sherlok', 'likes');
lookUpProfile('Bob', 'number');
lookUpProfile('Akira', 'address');
