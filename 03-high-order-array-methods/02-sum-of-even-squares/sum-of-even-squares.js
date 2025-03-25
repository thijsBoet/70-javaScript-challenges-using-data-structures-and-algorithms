function sumOfEvenSquares(array) {
    return array
        .filter(num => num % 2 === 0)
        .map(num => num * num)
        .reduce((sum, num) => sum + num, 0)
}

module.exports = sumOfEvenSquares;
