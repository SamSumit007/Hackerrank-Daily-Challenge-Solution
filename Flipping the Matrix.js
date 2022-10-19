


function flippingMatrix(matrix) {
     let sum = 0;
    let QuadSize = matrix.length/2;
  
    for(let i = 0; i < QuadSize; i++){
      for(let j = 0; j < QuadSize; j++){
       let q1 = matrix[i][(2 * QuadSize) - j - 1];
       let q2 = matrix[i][j];
       let q3 = matrix[(2 * QuadSize) - i - 1][j];
       let q4 = matrix[(2 * QuadSize) - i - 1][(2 * QuadSize) - j - 1];
        
        sum+= Math.max(q1, q2, q3, q4);
      }
    }
  
    return sum;

}
