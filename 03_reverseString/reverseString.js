const reverseString = function(word) {
    string = "";
    for (let i = word.length -1; i >= 0; i--) {
        string += word.charAt(i);
    } 
    return string;
};
reverseString("hello");

const reverseString2 = function(word) {
    string = "";
    for (let i = word.length -1; i >= 0; i--) {
        string += word.charAt(i);
    } 
    return string;
};
reverseString2("hello there");

const reverseString3 = function(word) {
    string = "";
    for (let i = word.length -1; i >= 0; i--) {
        string += word.charAt(i);
    } 
    return string;
};
reverseString3('123! abc! Hello, Odinite.');


const reverseString4 = function(word) {
    string = "";
    for (let i = word.length -1; i >= 0; i--) {
        string += word.charAt(i);
    } 
    return string;
};
reverseString4('');

// Do not edit below this line
module.exports = reverseString;
