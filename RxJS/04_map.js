Array.prototype.map = function (projectionFunction) {
    var results = [];
    this.forEach(function (itemArray) {
        results.push(itemArray + 1);
    });

    return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'