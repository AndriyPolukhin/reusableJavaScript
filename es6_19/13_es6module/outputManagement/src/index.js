import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'there', 'webpack'], ' ');
  return element;
}

document.body.append(component());