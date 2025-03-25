// function highestScoringWord(string) {
//     const words = string.split(" ");

//     const wordScores = words.map((word) => {
//         let score = 0;
//         for (const letter of word) {
//             score += letter.charCodeAt(0) - 96;
//         }
//         return score;
//     });

//     let highestScore = 0
//     let highestIndex = 0

//     for (let [index, score] of wordScores.entries()) {
//         if(score > highestScore) {
//             highestScore = score;
//             highestIndex = index
//         }
//     }

//     return words[highestIndex];
// }

function highestScoringWord(string) {
  const words = string.split(" ");

  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });

  let highestScore = Math.max(...scores);
  let highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}

module.exports = highestScoringWord;
