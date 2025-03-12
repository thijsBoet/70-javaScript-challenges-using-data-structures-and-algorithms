function removeDuplicates(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
  
  return [...new Set(array)];

  return Array.from(new Set(array));
}

module.exports = removeDuplicates;
