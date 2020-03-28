// https://levelup.gitconnected.com/javascript-interview-questions-arrays-246a1a125752
// Array JS Interview Questions

// map method
const map = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};

// filter method
const filter = (arr, callback) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
};

// reduce method
const reduce = (arr, reduceCallback, initialValue) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  let val = initialValue || 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    val = reduceCallback(val, arr[i]);
  }
  return val;
};

// arguments object
function logArgs() {
  console.log(arguments);
}

logArgs(
  1,
  2,
  3,
  4,
  5
); /* [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } */

// convert into array using spread operator
function logArgsArr() {
  console.log([...arguments]);
}

logArgsArr(1, 2, 3, 4, 5); /* [ 1, 2, 3, 4, 5 ] */

// with arrow functions
const logArgsArrow = (...args) => {
  console.log(args);
};

logArgsArrow(1, 2, 3, 4, 5); /* [ 1, 2, 3, 4, 5 ] */

// to add element at start of an array
// unshift method
const arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);

// spread operator
let arr1 = [2, 3, 4];
arr1 = [1, ...arr1];
console.log(arr1);

// add element to end of the array
// push method
const arr2 = [2, 3, 4];
arr2.push(1);
console.log(arr2);

// spread operator
let arr3 = [2, 3, 4];
arr3 = [...arr3, 1];
console.log(arr3);
