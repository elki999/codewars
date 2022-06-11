function oddOrEven(array) {
    const sum = array.reduce((a, c) => a + c, 0)
    
   if (sum % 2 === 0) {return 'even'} 
   else {return 'odd'}
 }