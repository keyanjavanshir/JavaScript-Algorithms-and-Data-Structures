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

// Use Destructuring Assignment to Assign Variables from Objects
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};


const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Becomes ->

const {today: { low: lowToday, high: highToday} } = LOCAL_FORECAST

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;

[a, b] = [b, a]

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {

  let [a, b, ...arr] = list

  return arr;
}

const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({min, max}) => (max + min) / 2.0

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  let failuresList = []

  for(let i = 0; i < arr.length; i++){
    failuresList.push(`<li class="text-warning">${arr[i]}</li>`)
  }

  return failuresList
}

const failuresList = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};

const createPerson = (name, age, gender) => (
  {name, age, gender}
)

// Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{uppercaseString, lowercaseString}

// Reuse JavaScript Code Using import
import {uppercaseString, lowercaseString} from './string_functions.js'

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js'

// Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// Import a Default Export
import subtract from './math_functions.js'

// Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

})

// Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer

    if(responseFromServer){
      resolve("We got the data")
    } else {
      reject("Data not received")
    }

    return responseFromServer
})

// Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true

  if(responseFromServer){
    resolve("We got the data")
  } else {
    reject("Data not received")
  }
})

makeServerRequest.then(result => {
  console.log(result)
})

// Handle a Rejected Promise with catch
makeServerRequest.catch(error => {
  console.log(error)
})