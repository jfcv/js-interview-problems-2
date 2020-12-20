

function arraySubset(superset, subset) {

    let superSet = Array.from(new Set(superset));

    for (let i = 0; i < subset.length; i++) { //O(n)
        if(!superSet.includes(subset[i])) { //O(n)
            return false;
        } else {
            let index = superSet.lastIndexOf(subset[i]); //O(n)
            superSet.splice(index,1);
        }
    }
    return true;
}


//Time Complexity: O(n^2) : nested loops 

//Space Complexity: O(n) -> linear space : superSet array


console.log(
    arraySubset([2,1,3],[1,2,3]),
    arraySubset([2,1,1,3],[1,2,3]),
    arraySubset([1,2],[1,2,3]),
    arraySubset([1,2,3],[1,2,2,3]),
    arraySubset([1,2,3],[1,1,1])
);