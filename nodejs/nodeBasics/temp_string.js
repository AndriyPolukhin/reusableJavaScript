const result = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var-on-top", "linebreak"],
skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
"use strict";
const resultDisplayArray = arr.map((a) => `<li class="text-warning">${a}</li>`);
return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)
const success = makeList(result.success);
success
const skipped = makeList(result.skipped);
skipped
