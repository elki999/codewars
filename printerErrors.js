function printerError(s) {
    let base = s.length + ''
    const errors  = s.split('').filter((err) => {return ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].indexOf(err) !== -1})
    let nom = errors.length + '/'
    return nom + base
  }