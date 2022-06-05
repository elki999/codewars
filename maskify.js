//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if( cc.length > 4) {
    let str1 = cc.slice(0, cc.length-4).split('').map(x => x = '#').join('')
    let str2 = cc.slice(cc.length-4, cc.length)
    
    return str1 + str2}
    else {return cc}
  }