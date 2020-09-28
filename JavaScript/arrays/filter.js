// Implementing Array.prototype.filter()

class ExtendedFilterFunctionality extends Array {
  filter(arr, predicateFcn) {
    const resultArr = [];
    for (let i of arr) {
      if (predicateFcn(i)) {
        resultArr.push(i);
      }
    }
    return resultArr;
  }
}

const eff = new ExtendedFilterFunctionality();
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  eff.filter(arr1, (x) => {
    return x > 5;
  })
);
