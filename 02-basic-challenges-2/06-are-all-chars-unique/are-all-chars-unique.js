function areAllCharactersUnique(string) {
    // return string === [...new Set(string)].join('');

    // const charCount = {};
    // for ( const char of string) {
    //     if (charCount[char]) {
    //         return false;
    //     } 
    //     charCount[char] = true;
    // }
    // return true;

    const charSet = new Set();

    for (const char of string) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

module.exports = areAllCharactersUnique;
