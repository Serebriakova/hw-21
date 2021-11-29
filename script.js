// indexOf

// function indexOfMy(searchElem, fromIndex = 0, array) {
//   if (Array.isArray(array)) {
//     if (fromIndex >= array.length) {
//       return -1;
//     } else if (fromIndex < 0) {
//       fromIndex = array.length + fromIndex;
//     }
//     for (let i = fromIndex; i < array.length; i++) {
//       if (searchElem === array[i]) {
//         return i;
//       }
//     }
//     return -1;
//   }
// }
// let arr = [4, 5, 15, 8, 4, 7, 15, 3, 2, 9];

// console.log(indexOfMy(5, 3, arr));

// ------------------------------------------------------------------------------
// lastIndexOf

// function lastIndexOfMy(searchValue, fromIndex = array.length, array) {
//   if (fromIndex < 0) {
//     fromIndex = 0;
//   } else if (fromIndex > array.length) {
//     fromIndex = array.length;
//   }
//   for (let i = fromIndex; i >= 0; i--) {
//     if (searchValue === array[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [4, 5, 15, 8, 4, 7, 15, 3, 2, 9];
// console.log(lastIndexOfMy(15, 9, arr));

// ------------------------------------------------------------------------------
// find

// function findMy(callback, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
//   return;
// }

// function even(element, index, array) {
//   if (element % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let arr = [7, 5, 15, 23, 4, 7, 15, 3, 1, 9];
// console.log(findMy(even, arr));

// ------------------------------------------------------------------------------
// findIndex

// function findIndexMy(callback, array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] === undefined) {
//       continue;
//     } else if (callback(array[i], i, array)) {
//       return i;
//     }
//   }
//   return -1;
// }

// function even(element, index, array) {
//   if (element % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let arr = [7, , 5, 15, 22, 5, 7, 15, 3, 1, 9];
// console.log(findIndexMy(even, arr));
// ------------------------------------------------------------------------------

// includes

// function includesMy(searchElement, fromIndex = 0, array) {
//   if (fromIndex >= array.length) {
//     return false;
//   } else if (fromIndex < 0) {
//     fromIndex = array.length + fromIndex;
//   } else if (array.length + fromIndex < 0) {
//     fromIndex = 0;
//   }
//   for (let i = fromIndex; i < array.length; i++) {
//     if (searchElement === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// let arr = [7, 5, 15, 22, 5, 7, 15, 3, 1, 9];
// console.log(includesMy(22, 3, arr));
// ------------------------------------------------------------------------------

// every

// function everyMy(callback, array) {
//   if (array.length === 0) {
//     return true;
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === undefined) {
//       continue;
//     } else if (!callback(array[i], i, array)) {
//       return false;
//     }
//   }
//   return true;
// }

// function numberPositive(currentValue, index, array) {
//   if (currentValue > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let arr = [7, , 5, 15, -22, 5, 7, 15, 3, 1, 9];
// console.log(everyMy(numberPositive, arr));
// ------------------------------------------------------------------------------

// some

// function someMy(callback, array) {
//   if (array.length === 0) {
//     return false;
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === undefined) {
//       continue;
//     } else if (callback(array[i], i, array)) {
//       return true;
//     }
//   }
//   return false;
// }

// function isBigEnough(element, index, array) {
//   return element > 100;
// }

// let arr = [7, 5, 15, -22, 5, 7, 15, 3, 1, 9];
// console.log(someMy(isBigEnough, arr));
