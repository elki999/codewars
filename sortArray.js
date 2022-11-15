function sortArray(arr) {
    const oddNums = arr.filter(n => n%2).sort((a,b) => a-b)
    return arr.map(n => n%2===0 ? n : oddNums.shift())

}