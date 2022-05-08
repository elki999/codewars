function getMiddle(s)
{
  if (s.length %2 != 0) {return s.charAt((s.length -1 ) / 2)}
  else if (s.length %2 == 0) {return s.substring((s.length/2)-1, (s.length/2)+1)}
  //determine odd/even string length. If odd return char at str.length -1 /2. If even need 2 char at length/2 1 and 
}