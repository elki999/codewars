//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) return 0;
  let newArr = array.sort((x,y) => x-y).slice(1, array.length-1)
  return newArr.reduce((arr,c) => arr + c, 0)
}