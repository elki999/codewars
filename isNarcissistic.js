//A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number.

function isNarcissistic(n) {
    let str = n + ''
    let arr = str.split('').map(Number)
    let newArr = arr.map((num)=>num**str.length)
    let sum = newArr.reduce((a,c) => a+c, 0)
    return sum === n
  }