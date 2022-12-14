function ransomNote(note, zine){
    const noteWords = note.split(' ')
    const magazineWords = zine.split(' ')
    const magazineHash = {}
    let possible = true

    for(const word of magazineWords){
        magazineHash[word] = magazineHash[word] +1 || 1    }

    for(const word of noteWords) {
        if(magazineHash[word]){
            magazineHash[word]--
            if(magazineHash[word] < 0) return false
        } 
        else {
            return false
        }
    }
    return possible
}