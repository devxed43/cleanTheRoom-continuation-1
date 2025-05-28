let input = [
  "1",
  "1",
  "1",
  2,
  10,
  20,
  33,
  84,
  "1",
  2,
  2,
  "2",
  "3",
  1,
  3,
  3,
  3,
  "2",
  "3",
];

input.sort((a, b) => a - b);

let strArr = [];
let numArr = [];
let combo = [];

for (let num of input) {
  if (typeof num === "string") {
    strArr.push(num);
  }
}

for (let num of input) {
  if (typeof num === "number") {
    numArr.push(num);
  }
}

// console.log("strs:", strArr);
// console.log("nums:", numArr);

if (strArr.length > 0 && numArr.length > 0) {
  combo.push(strArr, numArr);
}

console.log("combo:", combo);

// I pushed two arrays in above
// now I flattened them
let flatten = combo.flat(10);
console.log("flattened array:", flatten);

// I've targetted strings
let getStrings = flatten.filter((values) => typeof values === "string");
console.log("flattened strings:", getStrings);

// my thinking: loop over i and j, compare, if equal, create new array and push i and j into there
// This gives me multiple arrays grouped
// I need one array with sub arrays grouped

// for (let i = 0; i < getStrings.length; i++) {
//   for (let j = i + 1; j < getStrings.length; j++) {
//     if (getStrings[i] === getStrings[j]) {
//       let group = [];
//       group.push([getStrings[i], getStrings[j]]);
//       console.log('flat str group:', group.flat(100))
//     }
//   }
// }

// ['1', '1', '1', '1']

const test = ["1", "1", "3", "2", "3", "4", "4"];
const grouped = test.reduce((acc, val) => {
  // chcks if value is in the accumulator
  if (acc[val]) {
    // if seen already(duplicate), it appends the duplicates along with the value
    acc[val] = [...acc[val], val];
  } else {
    // else if not already seen(original), returns our value like normal
    acc[val] = [val];
  }
  //   we return our accumulator, which is our collection of values and duplicates
  return acc;
}, []);

console.log(grouped);
