

function allAnagrams(strings) {

    // a = array, s = strings

    //saving the strings as vectors into the copyStrings vector
    let copyStrings = []; 
    for (let j = 0; j < strings.length; j++) { //O(a)  
        copyStrings[j] = strings[j].split('');
    }

    //using the 1st position from the copyStrings vector as template
    let tempAnag = copyStrings[0];

    //saving those values from temAnag into an object
    let tempChars = {}
    for (let i = 0; i < tempAnag.length; i++) { //O(s)
        tempChars[tempAnag[i]] = true;
    }

    //counts the letter's frequencies for each strings
    let freqs = new Array(copyStrings.length).fill(0); // O(a)

    for (let k = 0; k < copyStrings.length; k++) { //O(a)

        let anagrams = copyStrings[k];
        for (let m = 0; m < anagrams.length; m++) { //O(s)
            if (tempChars[anagrams[m]]) {
                freqs[k]++;
            }
        }
    }

    //compares the frequencies for each strings with original template length
    for (let n = 0; n < freqs.length; n++) { //O(a)
        if(freqs[n] !== tempAnag.length) {
            return false;
        }
        
    }

    return true;

}

//Time Complexity: O(a * s)

//Space Complexity: O(a) + O(s)

console.log(
    allAnagrams(['abcd','bdac','cabd']),
    allAnagrams(['abcd','bdXc','cabd']),
    allAnagrams(['abcd','bdac','cabd']),
    allAnagrams(['abcd','bdXc','cabd']),
);