// Title Case a String

const titleCase = (str) => {
    str = str.toLowerCase().split('');
    str = str.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    str = str.join('');
    return str;
}
console.log(titleCase("hello"));


// ES 5 version

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');

  str = str.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  str = str.join(' ');

  return str;
}
console.log(titleCase("hello"));