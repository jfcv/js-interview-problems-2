

function allAnagrams(strings) { // s = length of strings, a = length of array

    const sorted = strings.map(str => str.split('').sort().join('')); 
    // O(a) * O(s + s * log(s) + s)
    // O(a) * O(s * log(s))

    for (let i = 0; i < sorted.length; i++) { //O(a)
        if(sorted[i] !== sorted[0]) {
            return false;
        }
    }
    return true;
}

//Time Complexity: O(a) * O(s * log(s))

//Space Complexity: O(a * s)

console.log(
    allAnagrams(['abcd','bdac','cabd']),
    allAnagrams(['abcd','bdXc','cabd']),
    allAnagrams(['abcd','bdac','cabd']),
    allAnagrams(['abcd','bdXc','cabd']),
);