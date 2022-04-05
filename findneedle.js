/*Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

should return "found the needle at position 5"*/

function findNeedle(arr){
    const needle = arr.findIndex(word => word === 'needle')
    return (`found the needle at position ${needle}`  )
}

console.log(findNeedle(['bear', 'shirt', 'needle', 'word']))

//cleaner
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }