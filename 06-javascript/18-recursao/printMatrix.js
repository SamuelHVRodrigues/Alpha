const matrix = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11, 11+1, "thirteen", 14.1, {"number": "fifteen"}, true]
]

let line = 0;
let column = 0;

function printMatrix(matrix, line, column) {

    if(matrix[line][column]) {
        console.log(matrix[line][column]);
        return printMatrix(matrix, line, column+1);
    } else if(matrix[line+1]) {
        return printMatrix(matrix, line+1, 0);
    } else {
        return false;
    }

}

printMatrix(matrix, 0, 0);