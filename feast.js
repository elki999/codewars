function feast(beast, dish) {
    if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)) {return true}
    else {return false}
  
  }

  //Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.