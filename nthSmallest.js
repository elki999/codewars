function nthSmallest(arr, n) {
    return arr.sort((a,b) =>a-b)[n-1]

}