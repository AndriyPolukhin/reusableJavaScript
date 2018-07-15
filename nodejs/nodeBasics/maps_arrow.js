const task = [

    {
"name": "Write for Envato Tuts+",
"duration": 120

},
{
"name": "work out",

"duration": 60


},
{
"name":"Procrastinate on Duolingo",
"duration":240


}
];
let task_names = [];

// MAP

for
(let i = 0, max = task.length; i <max; i += 1) {
task_names.push(task[i].name);
}

console.log(task_names)

task_names = [];
console.log(task_names)

task.forEach(task => task_names.push(task.name))
task_names = [];

task_names = task.map((task,index,array) => task.name);
task_names = []

task_names = task.map(task => task.name)


const map = function (array, callback) {
    let new_array = [];

    array.forEach(function (element, index, array) {
        new_array.push(callback(element));
    });

    return new_array;
};


const the_task_names = map(tasks, function(task) {
    return task.name;
});


// FILTER

let difficult_tasks = [];

task.forEach(function (task) {
    if (task.diration >= 120) {
        difficult_tasks.push(task);
    }
});


let difficult_tasks = task.filter(function(task) {
    return task.duration >= 120;
});

let difficult_tasks = task.filter(task => task.duration >= 120);



const filter = function (array, callback) {

    let filtered_array = [];

    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);
        }
    });

    return filtered_array;
};


// REDUCE

let numbers = [1,2,3,4,5], total = 0;

numbers.forEach(function (number) {
    total += number;

});

let total = [1,2,3,4,5].reduce(function (previous, current) {
    return previous + current;
}, 0);


let total_time = 0;

task.forEach(function (task) {
    total_time += (+task.diration);
});


let total_time = task.reduce(function (previous, current) {
    return previous + current;
}, 0);

let total_time = task.reduce((previous, current) => previous + current);


const reduce = function (array, callback, initial) {
    let accumulator = initial || 0;

    array.forEach(function( element ){
        accumulator = callback(accumulator, array[i]);
    });

    return accumulator;
};








































