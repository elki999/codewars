function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let letter of str) {
      if (vowels.includes(letter)) {
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }