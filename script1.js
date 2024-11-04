function findLargestFour(arr) {

    arr.sort((a, b) => b - a);

    return arr.slice(0, 4);
  }
  
  const inputArray = [2, 4, 6, 5, 3, 1, 7, 9, 10, 8];
  const outputArray = findLargestFour(inputArray);
  console.log(outputArray); 