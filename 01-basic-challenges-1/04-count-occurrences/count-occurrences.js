function countOccurrences(string, char) {
  // let occurrence = 0;
  // for (let i = 0; i < string.length; i++) {
  //   if(string[i] === char) occurrence++;
  // }

  // return occurrence;

  return string.split(char).length -1;
}

module.exports = countOccurrences;
