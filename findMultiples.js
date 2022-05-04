//build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. 

function findMultiples(integer, limit) {
    const arr = []
    for (let i=1; i<=limit; i+=1)
      if (integer * i <= limit) {
        arr.push(integer*i)
      }
    return arr
  }
  