function removeDupes (arr) {
    return arr.map(word=>word.split('').filter((l,i,a)=> l!=a[i-1]).join(''))
}