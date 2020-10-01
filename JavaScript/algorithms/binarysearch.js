// Binary Search Implementation

const binarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

const arr1 = [1, 3, 5, 7, 9];
console.log(binarySearch(arr1, 5));     // ==> 2
console.log(binarySearch(arr1, -1));    // ==> null
