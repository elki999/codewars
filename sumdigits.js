function sumDigits(number) {
    let newNum = Math.abs(number)
    let arr = Array.from(String(newNum), Number)
    const sum = arr.reduce((prev, curr) => prev + curr)
    return sum
  }
  