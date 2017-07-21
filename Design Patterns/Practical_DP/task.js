var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toSting', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable: true,
    configurable: true

})






console.log(task.toString());
