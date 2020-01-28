// https://medium.com/better-programming/5-uses-of-the-es6-spread-operator-ef90bdff4d56
// ES 6 Spread Operator

// copying an array
let names = ["John", "James", "Ben"];
let newNamesArr = [...names];
console.log(newNamesArr);

// concatenate arrays
let arr1 = ["A", "B", "C"];
let arr2 = ["H", "I", "J"];
let result = [...arr1, ...arr2];
console.log(result);

// Spreading elements together with an individual element
let fruits = ["Apple", "Pineapple", "Banana"];
let newFruits = ["Mango", ...fruits];
console.log(newFruits);

// Spreading elements on function calls
var getNames = (f1, f2, f3) => {
  console.log(`Names: ${f1}, ${f2}, ${f3}`);
};
getNames(...names);

// Spread syntax for object literals
var obj1 = {
  id: 101,
  name: "John Doe"
};
var obj2 = {
  age: 25,
  country: "USA"
};

const employee = { ...obj1, ...obj2 }; // this is not deep copy
console.log(employee);
