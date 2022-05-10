function enough(cap, on, wait) {
    let answer = cap - on - wait
    if (answer > 0) {return 0}
    else {return Math.abs(answer)}
}