function miniMaxSum(arr) {
    // Write your code here
 let sortedArray = arr.sort();

    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < sortedArray.length - 1; i++) {
        sum1 += sortedArray[i]
    }

    for(let i = 1; i < sortedArray.length; i++) {
        sum2 += sortedArray[i]
    }

    console.log(sum1, sum2)
}