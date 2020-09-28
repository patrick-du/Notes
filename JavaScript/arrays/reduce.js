// Implementing Array.prototype.reduce()

class ExtendedReduceFunctionality extends Array {
  reduce(arr, reduceFcn, accumulator = 0) {
    for (let i of arr) {
      accumulator = reduceFcn(accumulator, i);
    }
    return accumulator;
  }
}

const erf = new ExtendedReduceFunctionality();
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(erf.reduce(arr1, (acc, elem) => acc + elem, 0));