
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix===undefined) return [];
    if (matrix.length==0) return [];
    for (var i = 1; i < matrix.length; i = i + 2) {
        matrix[i] = matrix[i].reverse();
    }
    return matrix.flat();
}
