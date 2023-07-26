function reverseLetter(str) {
    // Regular expression to match only letters (a-z, A-Z)
    const lettersRegex = /[a-zA-Z]/g;
    // Extract only the letters from the input string and reverse them
    const reversedLetters = str.match(lettersRegex).reverse().join('');
    return reversedLetters;
    }