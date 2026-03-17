# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Using the code block below, explain what it means for a function call to be an "expression that resolves/evaluates to a value."

```js
const double = (num) => {
  return num * 2;
};

const result = double(5);
```

In your response, make sure to cover the following details:

1. Explain what an "expression" is.
2. Explain how it is determined what value a function call will resolve/evaluate to.
3. Explain why function calls sometimes resolve/evaluate to `undefined`.

### Response 1

1. An expression is a equation that when written in code, will automatically evaluate the result of the operation between variables/numbers.

2. What the result of the inputed `num` times 2 is, `*` represents multiplication and were returning the result. In this case it'll result in 10 because 5\*2 is 10.

3. It can be undefined if what's passed in isn't a number or atleast something that can be converted to a number through type coercion. If you trying to do an mathematiacal expression with something that isn't a number it'll equate to undefined.

---

## Prompt 2

Analyze the following code. Then, fill in the template below with the callstack and the values of all variables at the moment when the `getFirstLetter()` function has just been called _for the first time_ but has NOT yet returned.

```js
const buildProfile = (firstName, lastName, age) => {
  const fullName = createFullName(firstName, lastName);
  const initials = extractInitials(firstName, lastName);
  const bio = `${fullName} (${initials}) - Age: ${age}`;
  return bio;
};

const createFullName = (first, last) => {
  const fullName = first + ' ' + last;
  return fullName;
};

const extractInitials = (first, last) => {
  const firstInitial = getFirstLetter(first); // <--- we're in this function call
  const lastInitial = getFirstLetter(last);
  return firstInitial + lastInitial;
};

const getFirstLetter = (name) => {
  // ***draw the callstack at this moment before the return***
  return name[0].toUpperCase();
};

const userProfile = buildProfile('reuben', 'ogbonna', 24);
console.log(userProfile); // reuben ogbonna (RO) - Age: 24
```

**Your response should include:**

1. A diagram of the callstack showing all functions currently executing (most recent calls at the top)
2. All variables in each scope with their current values
   - Use `waiting` for variables waiting to receive a value from a function call
   - Use `undefined` for variables not yet assigned a value

### Response 2

```
Callstack: (recent calls at the top)
---------------------------
[getFirstLetter           ]
[extractInitials           ]
[buildProfile           ]
[Global           ]


Variables by Scope:
---------------------------
Global Scope:
- buildProfile = function
- createFullName = function
- extractInitials = function
- getFirstLetter = function
- userProfile = waiting

buildProfile() scope:
- firstName = 'reuben'
- lastName = 'ogbonna'
- age = 24
- fullName = 'reuben ogbonna'
- initials = waiting
- bio = undefined

createFullName() scope:
- Already returned

extractInitials() scope:
- first = 'reuben'
- last = 'ogbonna'
- firstInitial = waiting
- lastInitial = undefined

getFirstLetter() scope:
- name = 'reuben'
```

---

## Prompt 3

These two code snippets look similar but behave differently. Explain what each one prints and WHY they produce different results. Use the proper scope terminology in your explanation. Feel free to run these code blocks.

Example A:

```js
let count = 0;

const incrementA = () => {
  count = count + 1;
};

incrementA();
console.log(count);
```

Example B

```js
let count = 0;

const incrementB = () => {
  let count = 0;
  count = count + 1;
};

incrementB();
console.log(count);
```

### Response 3

Example A will print 1 because the function `incrementA` will use the global variable `count`. Example B will print 0 because function `incrementB` has a variable inside of it's local scope called `count` so that's what we're incrementing. When we print in global scope, we print the `count` in the outer scope.

---

## Prompt 4

You need to remove a student's name from an array of enrolled students. Your coworker suggests two approaches:

```js
// Approach A:
const index = students.indexOf(nameToRemove);
students.splice(index, 1);

// Approach B:
const newStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i] !== nameToRemove) {
    newStudents.push(students[i]);
  }
}
```

Which approach would you choose and why? In your answer, identify at least one potential bug and explain the tradeoff between these approaches.

### Response 4

I would choose approach a because it's more readable and easier to understand. The trade off is `.indexOf()` will return -1 if the name isn't found which means our splice will remove the last student in the array if no matching name is found. This can be solved with a guard clause. Another tradeoff is mutating the original array, but this can be fine if you don't need to store the original array.

Solution B is harder to understand and goes through the process of creating a new array and pushing any values that isn't the student you want to remove into the new array.

---

## Prompt 5

Label the basic array methods below with a 1-sentence description of what they do. Indicate with `(mutating)` or `(non-mutating)` whether or not the method directly mutates the array

### Response 5

- `push(value)` - `(mutating)` Adding to end of array.
- `pop()` - `(mutating)` Removing from end of array.
- `shift()` - `(mutating)` Removing from front of array.
- `unshift(value)` - `(mutating)` Adding to front of array.
- `splice(index, deleteCount)` - `(mutating)` Deleting from array or inserting to array.
- `slice(start, end)` - `(non-mutating)` Creating a shallow copy from start index to the index before end.
