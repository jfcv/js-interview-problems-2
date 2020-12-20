

function singleMutation(str1, str2) {

    let chars = {};
    for (let i = 0; i < str1.length; i++) { //O(n)
        chars[str1[i]] = true;
    }

    let count = 0;
    let negCount = 0;
    for (let j = 0; j < str2.length; j++) { //O(n)
        if (chars[str2[j]]) {
            count++;
        } else {
            negCount++;
        }
    }

    //make sure there's no more than 1 substitution
    if(negCount > 1) {
        return false;
    }

    if (str1.length - count === 0 || str1.length - count === 1) {
        return true;
    }

}

//Time Complexity: O(n)

//Space Complexity: O(n) : chars obj

console.log(
    singleMutation('abcd', 'abc'),
    singleMutation('abcd', 'acd'),
    singleMutation('abcd', 'abcde'),
    singleMutation('abcd', 'abXcd'),
    singleMutation('abcd', 'abXd'),
    singleMutation('abcd', 'Xbcd'),
);