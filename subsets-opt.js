

function arraySubset(superset, subset) { // m, n

    if (subset.length > superset.length) {
        return false;
    }

    let count = {};

    for (let i = 0; i < superset.length; i++) { // O(m)
        if (count[superset[i]] === undefined) {
            count[superset[i]] = 1;
        } else {
            count[superset[i]]++;
        }
    }

    for (let j = 0; j < subset.length; j++) { // O(n)
        
        if(count[subset[j]] === undefined) {
            return false;
        }
        
        if(count[subset[j]] === 0) {
            delete count[subset[j]];
        } else {
            count[subset[j]]--;
        }
        
    }

    return true;
}


//Time Complexity: O(m + n)

//Space Complexity: O(m)


console.log(
    
    arraySubset([2,1,3],[1,2,3]),
    arraySubset([2,1,1,3],[1,2,3]),
    arraySubset([1,2],[1,2,3]),
    arraySubset([1,2,3],[1,2,2,3]), 
    arraySubset([1,2,3],[1,1,1]) 
);