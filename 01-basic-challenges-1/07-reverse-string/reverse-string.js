function reverseString(string) {
  // let reversedString = '';
  // for (let i = string.length - 1; i >= 0; i--) {
  //   console.log(string[i]);
  //   reversedString += string[i]
  // }
  // return reversedString;
  
  // return string.split('').reverse().join('');

  return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

module.exports = reverseString;
