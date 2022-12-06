function findJewels(jewels, stones){
    const map = {} //jewels go here
    let count = 0
    for (const jewel of jewels){
        map[jewel] = true // map through and create obj that has jewels, true items
    }
    for (const stone of stones){
        if (map[stone]) {
            count++
        }
    
    }
    return count
}