function splitify(str) {
  // Add your code below this line

  return str.split(/\s|\W/);

  // Add your code above this line
}

let a = splitify("Hello World,I-am code");

function sentensify(str) {
  // Add your code below this line

  return str.split(/\W/).join(" ");

  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  console.log(
    return title
      .split(/\s|\W/)
      .filter(w => Boolean(w))
      .join("-")
      .toLowerCase()
  );

  // console.log(title);
  // title.join("-").toLowerCase();
  // return title;
}
// Add your code above this line

// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

// console.log(winterComing);
urlSlug(" Winter Is  Coming");
