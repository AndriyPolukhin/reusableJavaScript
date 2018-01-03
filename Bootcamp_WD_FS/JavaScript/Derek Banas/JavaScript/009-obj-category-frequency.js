/**
  A real-world implementation of the last algorithm '008-letter-frequency'. Given an array of objects, create a new object that lists the frequency that the property 'category' occurs.
*/

const obj = [
    {id: 1, category: "fish" },
    {id: 2, category: "chiken" },
    {id: 3, category: "beef" },
    {id: 4, category: "fish" },
    {id: 5, category: "vegi" },
    {id: 6, category: "chiken" },
    {id: 7, category: "BEEF" },
    {id: 8, category: "Beef" },
    {id: 9, category: "Chiken" },
    {id: 10, category: "chiken" },
    {id: 11, category: "fish" },
];

// refactored

const categoryFrequency = obj => {
  const newObj = {};

  for (let i = 0; i < obj.length; i++) {
    let category = obj[i].category.toLowerCase();
    newObj[category] = newObj[category] ? ++newObj[category] : 1;
  }
  return newObj;
};

console.log(categoryFrequency(obj));