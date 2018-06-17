import {
  cube
} from './math.js';

function component() {

  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack',
    '5 cubed is qual to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());