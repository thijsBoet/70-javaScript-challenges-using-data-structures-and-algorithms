function validAnagrams(str1, str2) {
  const charMap1 = str1.split('').reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  const charMap2 = str2.split('').reduce((acc, char) => {
		acc[char] = acc[char] + 1 || 1;
		return acc;
  }, {});

  return (
		Object.keys(charMap1).every(
			char => charMap1[char] === charMap2[char],
		) &&
		Object.keys(charMap2).every(char => charMap1[char] === charMap2[char])
  );
}

module.exports = validAnagrams;









