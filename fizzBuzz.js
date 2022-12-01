function fizzBuzz(num) {
    for (let i=1; i<=num; i++) {
        if(i%6 === 0) { console.log('FizzBuzz')}
        else if (i%2===0) {console.log('Fizz')}
        else if (i%3 ===0) {console.log('Buzz')}
        else {console.log(i)}
    } 
}