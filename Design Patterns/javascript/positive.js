/*
Write a function:
function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(A) {
  let baseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr = A;
  let holder = [];
  let answer = "";
  arr.forEach(a => {
    if (a >= 0) {
      holder.push(a);
    } else {
      answer = 1;
    }
  });

  holder.sort();

  baseArr.forEach(a => {
    if (holder.indexOf(a) !== -1) {
      holder.push(a);
    }
  });

  return answer.pop() + 1;
}

// a = [1, 3, 6, 4, 1, 2, -1, -2];
a = [1, 2, 3];
// a = [-1, -3];
// solution(a);

console.log(solution(a));
