function encodeDuplicates(str) {
    return str.toLowerCase().split('').map((l,i,a) =>a.indexOf(l)===a.lastIndexOf(l) ? '(' : ')').join('')
}

//letter, index, array