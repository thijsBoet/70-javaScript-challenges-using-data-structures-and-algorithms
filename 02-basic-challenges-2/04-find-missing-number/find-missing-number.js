function findMissingNumber(nums) {
  const n = nums.length + 1
  const total = n * (n + 1) / 2
  const sum = nums.reduce((acc, value) => acc + value)
  return total - sum;
}

module.exports = findMissingNumber;
