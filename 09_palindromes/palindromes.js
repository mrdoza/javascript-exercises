const palindromes = function (str) {

    const cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;

}

// Do not edit below this line
module.exports = palindromes;
