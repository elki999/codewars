function well(x){
  let count = 0
  for (elem of x) {
    if (elem == 'good') {count++}
  }
  if (count ==1 || count == 2) { return 'Publish!'}
  else if (count > 2) {return 'I smell a series!'}
  else {return 'Fail!'}
    
  }