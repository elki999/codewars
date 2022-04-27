function sameCase(a, b){
    if ((/[a-zA-Z]/).test(a) ==false || (/[a-zA-Z]/).test(b) ==false) {return -1}
    else if (a===a.toLowerCase() && b===b.toLowerCase()) {return 1}
    else if (a===a.toUpperCase() && b===b.toUpperCase()) {return 1}
    else if (a!=a.toLowerCase() || b!=b.toLowerCase()) {return 0}
    
    
  }