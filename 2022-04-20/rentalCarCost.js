function rentalCarCost(d) {
    // if days >3 but <7 take 20 off total (d*40). If d>=7, then take 50 off total
    if (d>=3 && d<7) {return (d*40) - 20}
    else if (d>=7) {return (d*40) -50}
    else {return d*40}
  }