
let repetitions = 0;

function highestCount (array) {
let highestNum = Math.max.apply(null, array)
for (let index = 0; index < array.length; index += 1) {
  if (array[index] === highestNum) {
    repetitions += 1;
  }
}
console.log (highestNum)
console.log (repetitions)
return repetitions;
}

highestCount ([-2, -2, -1])