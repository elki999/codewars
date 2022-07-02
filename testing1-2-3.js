var number=function(array){
    if (array.length === 0) {return []}
    else {return array.map((e,i) => `${i+1}: ${e}`)}
  }