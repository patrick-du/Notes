const bubbleSort = (arr) => {
  let isSorted = false;
  let arrLength = arr.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  return arr;
};

const arr1 = [9, 3, 5, 7, 1];
console.log(bubbleSort(arr1)); // ==> [1, 3, 5, 7, 9]
