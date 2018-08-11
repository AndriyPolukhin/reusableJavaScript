const nums = [1, 2, 3, 4, 5];
// your own
const reduce = (arr, fn, initValue) => {
  let result = initValue;
  arr.forEach(item => result = fn(result, item));
  return result;
}
console.log(reduce(nums, (total, item) => total + item, 0))

// Simple SUM

const sum = nums.reduce((total, num) => total + num);;
console.log(sum);

// average

const values = [10.2, 15.4, 20.5];
const avg = values.reduce(
  (total, val, i, { length: len }) =>
    i === len - 1 ? (val + total) / len : val + total
);
console.log(avg);

// flat array
const arr2 = [1, 2, 3, [11, 12, 13], 4, 5, 6, [14, 15, 16]];
const flat = arr2.reduce((result, item) => result.concat(item), []);
console.log(flat);


// transform
const users = [{ id: 1, name: 'nir' }, { id: 2, name: 'andriy' }, { id: 3, name: 'anastasia' }, { id: 4, name: 'olga' }];
const map = users.reduce((result, user) => ({ ...result, [user.id]: user }), {});
console.log(map);

// count
const data = ['angular', 'react', 'react', 'ember', 'angular', 'vue', 'vue', 'angular', 'react', 'react'];
const results = data.reduce((result, entry) => {
  result[entry] ? result[entry] += 1 : result[entry] = 1;
  return result;
}, {});
console.log(results);

// price
const discount = price => price / 2;
const addTax = price => price * 0.2;
const giftWrap = price => price + 1;
const delivery = price => price + 12;

const total = [discount, addTax, giftWrap, delivery];
const pay = total.reduce((price, fn) => price = fn(price), 10);

console.log(pay);
