function maxCharacter(str) {
    let charMap = {},
        count = 0,
        maxChar = null

    for(const char of str){
        charMap[char] = charMap[char] +1 || 1
    }
    for (const char in charMap){
        if(charMap[char] >count){
            count = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}