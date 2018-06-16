import _ from 'lodash';

function component() {
  const element  = document.createElement('div');

  // Lodash, currently includes via a script, is required for this line to work
  // Lodash, now inported form the script

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.append(component());