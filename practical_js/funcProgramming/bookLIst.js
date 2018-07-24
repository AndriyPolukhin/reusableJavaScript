// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

function add(books, bookName) {
  let a = [];
  a.push(...books);
  a.push(bookName);

  return a;
}

function remove(books, bookName) {
  let a = [];
  a.push(...books);
  let index = a.indexOf(bookName);
  if (index >= 0) {
    a.splice(index, 1);
    return a;
  }
}

var newBookList = add(bookList, "A Brief History of Time");

var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
console.log(bookList);
