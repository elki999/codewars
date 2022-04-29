//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
    let newArr = x.map(Number)
    return newArr.reduce((prev, cur) => prev+cur, 0)
  
  }