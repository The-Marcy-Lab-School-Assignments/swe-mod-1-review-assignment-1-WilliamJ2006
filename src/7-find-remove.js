/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>
Because the target isn't found in the array, .indexOf defaults to -1, which is interpreted by .splice as the last element in the array.

*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  if (index === -1) {
    return arr;
  }
  arr.splice(index, 1);
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
