const reverseString = function(word) {
    string = "";
    for (let i = word.length -1; i >= 0; i--) {
        string += word.charAt(i);
    } 
    return string;
};
