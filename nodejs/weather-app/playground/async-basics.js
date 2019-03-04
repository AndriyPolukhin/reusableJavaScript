/*
* ASYNC BASIS
*/

console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback first timeout');
}, 2000);

setTimeout(() => {
  console.log('It works second timeout');
}, 0);

console.log('Finishing app');

