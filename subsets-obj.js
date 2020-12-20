

function arraySubset(superset, subset) {

    let superSet = Array.from(new Set(superset)); //array from set : unique elements

    supSetObj = {};
    freqs = {};

    for (let k = 0; k < superSet.length; k++) { //O(n)
        supSetObj[superSet[k]] = true;  //object from array : unique elements
        freqs[superSet[k]] = 0;         //object from array counter
    }

    for (let i = 0; i < subset.length; i++) { //O(n^2) : lastIndexOf

        if(supSetObj[subset[i]]) {      //comparing the subset vector
            let index = superSet.lastIndexOf(subset[i]); //index at the superSet array from element from the subset array
            freqs[superSet[index]]++;   //increasing the counter
        } else {
            return false;
        }
    }
    
    for (let j = 0; j < superSet.length; j++) { //O(n)
        if (freqs[superSet[j]] > 1) {
            return false;
        }
    }

    return true;
}


//Time Complexity: O(n^2)

//Space Complexity: O(n)


console.log(
    arraySubset([2,1,3],[1,2,3]),
    arraySubset([2,1,1,3],[1,2,3]),
    arraySubset([1,2],[1,2,3]),
    arraySubset([1,2,3],[1,2,2,3]), 
    arraySubset([1,2,3],[1,1,1]) 
);