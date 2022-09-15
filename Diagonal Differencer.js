
function diagonalDifference(arr) {
    // Write your code here
  let principalDiagonal = 0;
let secondaryDiagonal = 0;

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
       
        if(i == j){
            let element = arr[i][j];
            principalDiagonal += element; 
        }
    
        if((i + j) == (arr.length - 1)){
            let element = arr[i][j];
            secondaryDiagonal += element;
        }
    }
}

console.log("principalDiagonal:" + principalDiagonal);
console.log("secondaryDiagonal:" + secondaryDiagonal);
return Math.abs(principalDiagonal - secondaryDiagonal);
}
