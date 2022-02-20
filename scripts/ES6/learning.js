// Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

// Mutate an Array Declared with const
const s = [5, 7, 2];

function editInPlace() {
  // Using s = [2, 5, 7] would be invalid
  let removeFromBack = s.pop()
  let placeInStart = s.unshift(removeFromBack) 

  return placeInStart

  // s[0] = 2 
  // s[1] = 5
  // s[2] = 7
}

console.log(editInPlace())

// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  }
  // FREEZE MATH_CONSTANTS
  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99
  } catch(ex) {
    console.log(ex)
  }
  return MATH_CONSTANTS.PI
}

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  return new Date()
}

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2)
}

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => {
  number + value
} 

// Use the Rest Parameter with Function Parameters
const sum = (...args) =>  {
  return args.reduce((a, b) => a + b, 0)
}

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES {
  yesterday: 75,
  today: 77,
  tomorrow: 80
}

const {today, tomorrow} = HIGH_TEMPERATURES