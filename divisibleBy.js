//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    const newArr = []
    numbers.forEach((num) => { if (num%divisor===0) {newArr.push(num)}
      
    } )
    return newArr
      
  }