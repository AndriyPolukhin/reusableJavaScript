function columnNames(n) {
  let result = [];


  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let len = alphabet.length;
  const full = Math.ceil(n / len);
  const part = n - len * (full - 1);
  const letters = alphabet.slice(0, full);

  if (n < len) {
    for (let i = 0; i < n; i++) {
      result.push(alphabet[i]);
    }
  } else {
    result.push(alphabet);
    for (let i = 0; i < letters.length - 1; i++) {
      if (i == letters.length - 2) {
        len = part;
      }
      for (let y = 0; y < len; y++) {
        result.push(letters[i] + alphabet[y]);
      }
    }
  }
  result = [].concat(...result);


  return result;
}

console.log(columnNames(5));
console.log(columnNames(55));

/**
 * A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, AA, AB, AC, AD, AE, AF, AG, AH, AI, AJ, AK, AL, AM, AN, AO, AP, AQ, AR, AS, AT, AU, AV, AW, AX, AY, AZ, BA, BB, BC
 */
