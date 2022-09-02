function removeDuplicateWords (s) {
    let arr = s.split(' ')
    return Array.from(new Set(arr)).join(' ')
    
  }
  