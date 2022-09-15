

function lonelyinteger(a) {
    // Write your code here
 let sortedArray = a.sort()
    let size = sortedArray.length;
    console.log(sortedArray);

    if(sortedArray[0] !== sortedArray[1]) {
        return sortedArray[0];
    }

    if(sortedArray[size - 1] !== sortedArray[size - 2]) {
        return sortedArray[size - 1];
    }

    for(let i = 1; i < sortedArray.length - 1; i++) {
        if(sortedArray[i] !== sortedArray[i-1] && sortedArray[i] !== sortedArray[i+1]) {
            return sortedArray[i];
        }
    }
}
