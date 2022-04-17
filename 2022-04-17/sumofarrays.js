function arrayPlusArray(arr1, arr2) {
    const arr1sum = arr1.reduce((prev, curr) => prev + curr, 0);
    const arr2sum = arr2.reduce((prev, curr) => prev + curr, 0);
    return arr1sum + arr2sum
  }