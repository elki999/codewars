function find_average(array) {
    return array.reduce((prev, cur) => prev + cur, 0) / array.length
      
  }