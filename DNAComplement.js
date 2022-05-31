//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    const NewStrand = {
      'A' : 'T',
      'T' : 'A',
      'C' : 'G',
      'G' : 'C'
    }
    
    return dna.split('').map(x => NewStrand[x]).join('')
  }