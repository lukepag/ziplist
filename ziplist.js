const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const combined = [];
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i]);
    combined.push(arr2[i]);
  }
  return combined;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
