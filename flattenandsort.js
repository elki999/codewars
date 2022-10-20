function flattenAndSort(array) {
    let arr1 = array.flat(3)
    return arr1.sort((a,b) => a-b)
  }