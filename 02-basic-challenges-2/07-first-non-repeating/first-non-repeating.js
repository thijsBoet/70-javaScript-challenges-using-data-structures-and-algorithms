// function findFirstNonRepeatingCharacter(str) {
//     const charCount = {};

//     for (char of str) {
//         charCount[char] = charCount[char] + 1 || 1;
//     }

//     for (char of str) {
//         if(charCount[char] === 1) {
//             return char;
//         }
//     }
//     return null;
// }

function findFirstNonRepeatingCharacter(str) {
    const charCount = new Map();

    for (char of str) {
        charCount.set(char, charCount.get(char) + 1 || 1);
    }

    for (char of str) {
        if(charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}

module.exports = findFirstNonRepeatingCharacter;
