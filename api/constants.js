// TODO: change all mock data - except for async case, add solution

export const codeBlocksMigrationData = [
  {
    id: "asyncCase_1",
    title: "Async case",
    code: `async function fetchData(apiUrl) {
  // Your code here
}

// Example usage:
(async () => {
  try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();`,
    solution: `async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Example usage:
(async () => {
  try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();`,
    href: "codeBlocks/asyncCase_1",
  },
  {
    id: "arrayManipulationCase_1",
    title: "Array Manipulation case",
    code: `function filterEvenNumbers(numbers) {
  // Your code here
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log('Even numbers:', evenNumbers);
`,
    solution: `function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log('Even numbers:', evenNumbers);
`,
    href: "codeBlocks/arrayManipulationCase_1",
  },
  {
    id: "functionComposition1",
    title: "Function Composition",
    code: `function add(a, b) {
  // Your code here
}

function multiply(a, b) {
  // Your code here
}

function compose(func1, func2) {
  // Your code here
}

// Example usage:
const addAndMultiply = compose(add, multiply);
const result = addAndMultiply(3, 4);
console.log('Result:', result);
`,
    solution: `function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(func1, func2) {
  return (x) => func2(func1(x));
}

// Example usage:
const addAndMultiply = compose(add, multiply);
const result = addAndMultiply(3, 4);
console.log('Result:', result);
`,
    href: "codeBlocks/functionComposition1",
  },
  {
    id: "objectManipulation1",
    title: "Object Manipulation",
    code: `function mergeObjects(obj1, obj2) {
  // Your code here
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);
console.log('Merged object:', merged);
`,
    solution: `function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);
console.log('Merged object:', merged);
`,
    href: "codeBlocks/objectManipulation1",
  },
];

// module.exports = codeBLocksMigrationData;
// export default codeBlocksMigrationData;
export default codeBlocksMigrationData;
