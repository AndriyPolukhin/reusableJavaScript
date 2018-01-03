// giben two arrays, one being the source, the other to compare,
// return only the objects from the compare array


// (existing) provided by database

const projects = [
    {id: 'p1', name: 'project one'},
    {id: 'p2', name: 'project two'},
    {id: 'p3', name: 'project three'},
    {id: 'p4', name: 'project four'}
];

const selectedProjects = (arr) => {
    let result = [];

    projects.forEach((item) => {
        if( arr.includes(item.id)) {
            result.push(item.name);
        }
    });
    return result;
}

selectedProjects(['p1', 'p2']);


// version for older browsers

const selectedProjects = (arr) => {
    let result = [];

    projects.forEach((item) => {
        arr.forEach((arrItem) => {
            if (Object.values(item).indexOf(arrItem) > - 1) {
                result.push(item.name);
            }
        });
    });
    return result;
}

selectedProjects(['p1', 'p2']);