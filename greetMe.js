var greet = function(name) {
    let capital = name.charAt(0).toUpperCase()
    let properName = capital + name.slice(1).toLowerCase()
    return "Hello" + ' ' + properName + '!'
    
  
  };