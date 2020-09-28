// Implementing Array.prototype.map()

class ExtendedMapFunctionality extends Array {
  map(arr, mapFcn) {
    const resultArr = [];
    for (let i of arr) {
      resultArr.push(mapFcn(i));
    }
    return resultArr;
  }
}

const emf = new ExtendedMapFunctionality();
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  emf.map(arr1, (x) => {
    return x + 40;
  })
);
