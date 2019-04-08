function solution(N, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const row = N;
  // const col = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  const col = ["B", "C", "D", "E", "F", "G", "H", "J"];

  let seats = [];
  let s = S.split(" ");

  for (let i = 1; i < row + 1; i++) {
    for (let j = 0; j < col.length; j++) {
      seats.push(i + col[j]);
    }
  }


  let pairs = [];
  for (let i = 0; )



  let fourSeats = 0;

  console.log(seats);
  // console.log(s);

  return row;
}

console.log(solution(2, "1A 2F 1C"));
// console.log(solution(1, ""));
// console.log(solution(40, "1A 3C 2B 40G 5A"));

const set = [
  "1A",

  "1B",
  "1C",
  "1D",
  "1E",
  "1F",
  "1G",
  "1H",
  "1J",

  "1K",
  "2A",

  "2B",
  "2C",
  "2D",
  "2E",
  "2F",
  "2G",
  "2H",
  "2J",

  "2K"
];
