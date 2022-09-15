
function countingSort(arr) {
    // Write your code here
 let counts = Array(100).fill(0);
  arr.forEach(item => {++counts[item];});
  return counts;
}
