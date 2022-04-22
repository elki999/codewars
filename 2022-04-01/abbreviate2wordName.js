//start with string, change to initials with dot but no space
// break string into word 1 and word 2, slice at 0 index of each and concantenate with .
function initials(name){
    const abb = name.toUpperCase().split(' ').map(word=>word[0]).join('.')
    return abb

}

