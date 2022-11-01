function transformString(str) {
    let reversedStr = str.split(' ').reverse().join(' ')
    let transformedStr = reversedStr.split('').map(l => l === l.toUppercase() ? l.toLowerCase() : l.toUpperCase() ).join('')
    return transformedStr
}
//const transformStr = str => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUppercase() ? l.toLowerCase() : l.toUpperCase() ).join('')