// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

function strCount(str, letter){  
    return str.split('').filter((x) => letter === x).length
  }