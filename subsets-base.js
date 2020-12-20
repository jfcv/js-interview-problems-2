

function arraySubset(superset, subset) { // m, n

    if (subset.length > superset.length) {
        return false;
    }

    for (let i = 0; i < subset.length; i++) { //O(n)
        let superIndex = superset.indexOf(subset[i]); //O(m)

        if(superIndex === -1) {
            return false;
        }

        delete superset[superIndex];
    }

    return true;
}


//Time Complexity: O(m * n)

//Space Complexity: O(1)


console.log(
    arraySubset([2,1,3],[1,2,3]),
    arraySubset([2,1,1,3],[1,2,3]),
    arraySubset([1,2],[1,2,3]),
    arraySubset([1,2,3],[1,2,2,3]), 
    arraySubset([1,2,3],[1,1,1]) 
);