function countPositivesSumNegatives(input) {
    return ?;
}


/*Return an array, where the first element is the count of positives numbers 
and the second element is sum of negative numbers. 
0 is neither positive nor negative.*/

//Codewars DID NOT LIKE
function countPositivesSumNegatives (input) {
    if (input === null || input.length === 0){
      return []
    }
     const sumNeg =  input.reduce((x, y) => x + (y < 0 ? y : 0), 0)
    //return sumNeg
    const countPos = input.filter(num => num > 0).length
    //return countPos
    return [sumNeg, countPos]
  }

  //codewars liked
  return (input && input.length) ? [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((acc, cur) => acc + cur, 0)] : []

  