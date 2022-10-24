function nEvenNums(arr, num) {
    //filter out odd to create arry of even numbers and return last n even mumbers
    return arr.filter(n => % 2 ===0).slice(-num)

}