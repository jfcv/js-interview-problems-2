

function rotate90(mat) {

    console.log(mat);

    // c = columns, r = rows

    let rotMatrix = [];
    let rowVector = [];

    for (let j = 0; j < mat[0].length; j++) { // O(c)
        for (let i = mat.length - 1; i >= 0; i--) { // O(r)
            let row = mat[i];
            rowVector.push(row[j]); 
        }
        rotMatrix.push(rowVector);
        rowVector = [];
    }
    return rotMatrix;
}


function rotate180(mat) {
    return rotate90(rotate90(mat));
}


function rotate270(mat) {
    return rotate90(rotate180(mat));
}


//Time Complexity: O(c * r)

//Space Complexity: O(c * r)


console.log(
    // rotate270([[1,2,3],[4,5,6],[7,8,9]]),
    // rotate90([[1,2],[4,5],[7,8]]),
    rotate270([[1,2],[3,4]]),
);