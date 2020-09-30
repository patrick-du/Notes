// Implementing Array.prototype.forEach()

class ExtendedForEachFunctionality extends Array {
  forEach(arr, forEachFcn) {
    for (let i of arr) {
      forEachFcn(i);
    }
  }
}

const eff = new ExtendedForEachFunctionality();
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  eff.forEach(arr1, (x) => {
    console.log(x);
  })
);
