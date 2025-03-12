function findMaxNumber(array) {
  // return Math.max(...array)

  let max = array[0]

  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > max) {
  //     max = array[i]
  //   }
  // }

  for (let number of array) {
    if (max < number) {
      max = number
    }
  }
  return max;
}

module.exports = findMaxNumber;
