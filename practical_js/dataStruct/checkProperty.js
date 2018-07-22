let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    for (let prop in obj) {
        console.log(prop);
        let a = obj.hasOwnProperty(prop);
        console.log(a);
    }
}

isEveryoneHere(users)

console.log(isEveryoneHere(users));