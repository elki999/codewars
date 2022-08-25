String.prototype.toJadenCase = function () {

    let arr = this.toLowerCase().split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    return arr
  };