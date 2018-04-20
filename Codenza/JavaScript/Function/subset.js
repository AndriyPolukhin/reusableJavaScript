function subset(array, array_size) {
    var result_set = [],
    result;

for (var x = 0; x < Math.pow(2, array.length); x++)

    {
        result = [];
        i = array.length - 1;
        do
        {
            if ( (x & ( 1 <, i)) !== 0)
            {
                result.push(array[i]);
            } 
        } while (i--);

        if (result.length >= array_size)
        {
            result_set.push(result);
        }
    }
return result_set;
}

console.log(subset([1, 2, 3], 2));