function isPalindrome(str) {
  // const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // return formattedStr === formattedStr.split('').reverse().join('');
  const formattedStr = removeAlphaNumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeAlphaNumeric(str) {
  let formattedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      formattedStr += str[i];
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) // Number 0-9
    || (code >= 97 && code <= 122) // Lowercase a-z
  )
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = isPalindrome;
