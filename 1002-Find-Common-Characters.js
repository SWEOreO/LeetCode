// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Solution 1 - word.every
var commonChars = function (words) {
    let res = [];
    for (let wo of words[0]) {
        if (words.every((word) => word.includes(wo))) {
            res.push(wo);
            words = words.map((word) => word.replace(wo, ""));
        }
    }
    return res;
};




// Solution 2
var commonChars = function(words) {
    
    let charFreqs = new Map();
    // initialize charFreqs with the first word
    
    for (let char of words[0]) {
        
        charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
    }
    
    // iterate through the rest of the words
    for (let i = 1; i < words.length; i++) {
        
        let wordFreqs = new Map();
        
        for (let char of words[i]) {
            
            wordFreqs.set(char, (wordFreqs.get(char) || 0) + 1);
        }
        
        // update charFreqs with the intersection of wordFreqs
        for (let [char, freq] of charFreqs) {
            
            if (wordFreqs.has(char)) {
                charFreqs.set(char, Math.min(freq, wordFreqs.get(char)));
            }
            
            else {
                
                charFreqs.delete(char);
            }
        }
    }
    
    // convert charFreqs to an array of characters
    let result = [];
    
    for (let [char, freq] of charFreqs) {
        
        for (let i = 0; i < freq; i++) {
            
            result.push(char);
        }
    }

    return result;
};