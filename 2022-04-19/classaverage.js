//class average, is your score better



function betterThanAverage(classPoints, yourPoints) {
    // const scores = classsPoints, push yourPoints, then reduce and divide by scores.length
      const scores = classPoints.reduce((prev, curr) => prev + curr, 0) / classPoints.length
      return scores < yourPoints ? true : false
  }