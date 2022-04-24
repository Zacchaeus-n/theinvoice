const duplicateArray = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const uniqueArray = [...new Set(duplicateArray)];

console.log(uniqueArray);