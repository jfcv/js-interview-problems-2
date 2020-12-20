function arraySubset(superset, subset) { // m, n

    if (subset.length > superset.length) {
        return false;
    }

    let count = new Map(); //using Maps !

    for (let i = 0; i < superset.length; i++) { // O(m)
        if (!count.has(superset[i])) {
            count.set(superset[i], 1);
        } else {
            count.set(superset[i], count.get(superset[i]) + 1);
        }
    }

    console.log(count);

    for (let j = 0; j < subset.length; j++) { // O(n)
        
        if(!count.has(subset[j])) {
            return false;
        }
        
        if(count.get(subset[j]) === 0) {
            count.delete(subset[j]);
        } else {
            count.set(subset[j], count.get(subset[j]) - 1);
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
    arraySubset([1,2,3],[1,1,1]),
    arraySubset([{}, 'azul', 1, 2, 'loku'], ['azul', 1, 'loku', 2])
    // it doesn't work with objects : WHY ?
);