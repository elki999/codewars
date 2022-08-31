var capitals = function (word) {
	return word.split('')
    .map((ltr, idx) => ltr == ltr.toUpperCase() ? idx : false)
    .filter(num => Number.isInteger(num))
};