//multiply each unique number from sub arrays by total of other sub arrays (2 unique x 1 unique x 2 unique)
function solve(arr) {
    //use set to get total unique values
    //map to return new arrays of number of unique values in sub arrays
    return arr.map(subarray=>new Set(subarray).size).reduce((a,c) =>a*c,1)
}

const solve = arr =>arr.reduce((a,c) => a * new Set(c).size, 1)