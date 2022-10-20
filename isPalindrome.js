function isPalindrome(line) {
    let line1 = line.toString()
    let line2 = line1.split('').reverse().join('');
    return line1 === line2
  }