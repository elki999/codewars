//Given an integral number, determine if it's a square number:

var isSquare = function(n){
    let x = Math.sqrt(n)
    if (Number.isInteger(x)) {return true}
    else {return false}
  }