//Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
  
    const arr = s.split(' ').sort((a,b) => a.length-b.length)
    return arr[0].length
  }