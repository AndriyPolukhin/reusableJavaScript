import {
  cube
} from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {

  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack',
    '5 cubed is qual to exact ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());