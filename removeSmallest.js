function removeSmallest(numbers) {
    const lowest = numbers.indexOf(Math.min(...numbers))
   return numbers.filter((_, index) => index != lowest)
  }
  