function avgLengthRepeat (arr) {
    const avgLength = Math.round(arr.join('').length / arr.length)
    return arr.map(str => str[0].repeat(avgLength))
}