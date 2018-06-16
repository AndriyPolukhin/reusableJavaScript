 // Lodash, now inported form the script
 import _ from 'lodash';
 import './style.scss';
 import Icon from './icon.jpg';
 import Data from './data.xml';

 function component() {
   const element = document.createElement('div');



   element.innerHTML = _.join(['Hello', 'there', 'webpack'], ' ');
   element.classList.add('hello');

   // Add the image ot our existing div.
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

   console.log(Data);

   return element;
 }

 document.body.append(component());