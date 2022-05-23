function correct(string)
{
	let string1 = string.replaceAll(5, 'S')
  let string2 = string1.replaceAll(0, 'O')
  let string3 = string2.replaceAll(1, 'I')
  return string3
}
