//Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
    arr.sort((a,b) => b-a)
    let sum = 0
    for (i=0; i<arr.length-1; i++) {
     sum += arr[i] - arr[i+1]
    }
    return sum
  }