function getComponent() {
  return import ( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    let element = document.createElement('div');
    let _ = _.default;

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})