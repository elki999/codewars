//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let age = dadYearsOld - (sonYearsOld*2)
    return age >=0 ? age : -1*age
  }