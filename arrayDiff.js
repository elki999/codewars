function arrayDiff(a,b) {
    //if (a.length ===0 || b.length === 0) {return a}
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n))

}