function bump(x){
    let count = 0
    for (i=0; i<=x.length; i++) {
      if (x.charAt(i) == 'n') {
        count+=1
      }
    }
    if (count <= 15) { return "Woohoo!"}
    else {return "Car Dead"}
  }