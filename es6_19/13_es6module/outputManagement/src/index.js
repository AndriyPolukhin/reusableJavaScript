import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');


  element.innerHTML = _.join(['Press', 'me', 'Please Now'], ' ');

  btn.innerHTML = 'Click me!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// document.body.append(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe Module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}