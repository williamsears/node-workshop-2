var word = "DecodeMTL";

function firstLetter(string, ret) {
     ret(string[0]);
     

}

firstLetter(word, function(word) {
    console.log(word);
});

function lastLetter(string, ret) {
    ret(string[string.length -1]);
    
}

lastLetter(word, function(word) {
    console.log(word)
});