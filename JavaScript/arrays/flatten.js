// Implementing Array.prototype.flat()

class ExtendedFlatFunctionality extends Array {
  flat(arr) {
    if (arr === null || arr.length === 0) return [];
    const newArr = [];
    flatHelper(newArr, arr);
    return newArr;
  }
}

const flatHelper = (newArr, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatHelper(newArr, arr[i]);
    } else if (arr[i] !== null) {
      newArr.push(arr[i]);
    }
  }
};

const eff = new ExtendedFlatFunctionality();
const arr1 = [1, [2, [3], 4], [5]];
const arr2 = [[[], [[2]]], [[[[5]], [8], 10]], [12]];
console.log(eff.flat(arr1));
console.log(eff.flat(arr2));
