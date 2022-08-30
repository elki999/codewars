function removeUrlAnchor(url){
    let anchor = url.includes('#')
    if (anchor == false) {return url}
    else {return url.slice(0, url.indexOf('#'))}
    
  }