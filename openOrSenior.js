//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

function openOrSenior(data){
    // if x >= 55 && y>7 senior. else open
    return data.map(([x,y]) => (x>=55 && y>7) ? 'Senior' : 'Open')
  }