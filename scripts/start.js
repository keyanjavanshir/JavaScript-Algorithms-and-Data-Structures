// Run using node scripts/start.js

// My basic Javascript course


// Declaring variables
var someName
let anotherName

// Storing values
var number
number = 7

// Assigning values to of one variable to another
var myWorld
myWorld = "World"

var myHello
myHello = "Hello" + ", " + myWorld + "!"


// Initializing variables with the Assignment Operator
var a = 9

// Declare String Variables
var myFirstName = "Keyan"
var myLastName = "Javanshir"

// Understanding Uninitialized Variables
var a = 5
var b = 10
var c = "I am a"

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Unlike var, when you use let, a variable with the same name can only be declared once.

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp" // Common to use UPPERCASE for const variables
let fact = "is cool!"
fact = "is awesome!" 

/* Const values are as the name implies.. constant. That means they remain unchangable after assigning a value.

Another note is that to use uppercase notation for immutable values, and lowercase/camelcase for mutable values.*/

// Add Two Numbers with JavaScript
const sum = 10 + 10

// Subtract One Number from Another with JavaScript
const difference = 45-33

// Multiply Two Numbers with JavaScript
const product = 8*10

// Divide One Number by Another with JavaScript
const quotient = 66/33

// Increment a Number with JavaScript
let myInc = 87
myInc++

// Decrement a Number with JavaScript
let myDec = 11
myDec--

// Create Decimal Numbers with JavaScript
let myDecimal = 5.7

// Multiply Two Decimals with JavaScript
const doubleDec = 10.5 * 5.2

// Divide One Decimal by Another with JavaScript
const doubleQuot = 4.4 / 2.0

// Finding a Remainder in JavaScript
const remainder = 11%3

// Compound Assignment With Augmented Addition
let d = 8
d += 9

// Compound Assignment With Augmented Subtraction
d -= 9

// Compound Assignment With Augmented Multiplication
d *= 5

// Compound Assignment With Augmented Division
d /= 3

// Escaping Literal Quotes in Strings
let myStr = "I am a \"double quoted\" string inside \"double quotes\"."

// Quoting Strings with Single Quotes
// const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

let myLink = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
let myEscape = "FirstLine\n\t\\SecondLine\nThirdLine"

// Concatenating Strings with Plus Operator
let concatenate = "This is the start. " + "This is the end."

// Concatenating Strings with the Plus Equals Operator
let concPlus = "This is the first sentence. "
concPlus += "This is the second sentence."

// Constructing Strings with Variables
let myName = "Keyan"
let myStr = "My name is " + myName + " and I am doing very well, thank you!"

// Appending Variables to Strings
let someAdjective = "challenging but fun!"
let myStr = "Learning to code is "
myStr += someAdjective 

// Find the Length of a String
let lastNameLength = 0;
const LAST_NAME = "Lovelace"

lastNameLength = LAST_NAME.length // equals 8

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = 0
firstLetterOfLastName = LAST_NAME[0] // equals L

// Understand String Immutability
let myString = "Jello World"
myStr = "Hello World"

// Use Bracket Notation to Find the Nth Character in a String
let thirdLetterOfLastName = 0

thirdLetterOfLastName = LAST_NAME[2]

// Use Bracket Notation to Find the Last Character in a String
let lastLetterOfLastName = 0
lastLetterOfLastName = LAST_NAME[LAST_NAME.length-1]

// Use Bracket Notation to Find the Nth-to-Last Character in a String
let secondToLastLetterOfLastName = LAST_NAME[LAST_NAME.length-2]

// Word Blanks
let myNoun = "dog";
let myAdjective = "big";
let myVerb = "ran";
let myAdverb = "quickly";

let wordBlanks = "My " + myNoun + " ran into a " + myAdjective + " pussy." 
wordBlanks+= "The pussy " + myVerb + " ran away " + myAdverb + "."

// Store Multiple Values in one Variable using JavaScript Arrays
let customer = ["John", 0]

// Nest one Array within Another Array
let stores = [["Kvickly", 8260], ["Netto", 8000]]

// Access Array Data with Indexes
let myArray = [50, 60, 70]
let myData = myArray[0]

// Modify Array Data With Indexes
let citiesInDenmark = ["Aarhus", "Copenhagen", "Odense"]
citiesInDenmark[0] = "Aalborg"

// Access Multi-Dimensional Arrays With Indexes
let multiArray = 
    [5,2,3]
    [0,2,3]
    [8,2,1]
    [[7, 2, 1], 11, 12]

multiArray[2][2]    // equals 3
multiArray[3][0][2] // 1

// Manipulate Arrays With push()
let petArray = [["Max", "Dog", 2], ["Felicity", "Cat", 7]]
petArray.push(["Squirtle", "Turtle", 1])

// Manipulate Arrays With pop()
let winnerTeams = [["Siam", 5], ["AKA", 10], ["MKB", 1]]
let removedFromWinnerTeams = winnerTeams.pop()

// Manipulate Arrays With shift()
let simpleArray = [["Taj Mahal", 0], ["Graves", 1]]
let removedFirstFromArray = simpleArray.shift()

// Manipulate Arrays With unshift()
let currentStorage = [["Milk", 0], ["Cheese", 1], ["Bread", 0]]
currentStorage.unshift(["Chicken Breast", 1]) 

// Shopping List
let myList = [["Cheese", 2], ["Milk", 1], ["Meat", 1], ["Bread", 1], ["Soda", 1]]

// Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World")
}
reusableFunction()

// Passing Values to Functions with Arguments
function functionWithArgs(args1, args2) { // Could also be functionWithArgs(x, y)
    console.log(args1+args2)
}
functionWithArgs(3, 10)

// Return a Value from a Function with Return
function timesFive(args){
    return 5*args
}
let timesFive = (args) => {return 5*args} // arrow method

// Local Scope and Functions
function myLocalScope() {
    var myVar = "Hello"
    console.log('inside myLocalScope', myVar)
}
myLocalScope()      // Will display myVar
console.log(myVar)  // ReferenceError: myVar is not defined, as it is only defined in the local scope of the specific funtion.

// Global vs. Local Scope in Functions
let outerWear = "T-Shirt"

function myOutfit() {
    let outerWear = "sweater"
    return outerWear    // Instances with variables having same names. Local scope takes precedence over global scope. 
}

// Understanding Undefined Value returned from a Function
let sum = 0

function addFive() {
    sum += 5 // Will add to the global variable 'sum' but the returned value is undefined.
}

// Assignment with a Returned Value
let processed = 0

function processedArg(num) {
    return (num + 7) / 5
}
processed = processedArg(7) // Returns 2

// Stand in Line
funtion nextInLine(arr, item) {
    arr.push(item) 
    // I wrote nextInLine.push(item) instead... Focus on parameters. Not possible to call a function inside itself. 
    item = arr.shift()
    return item
}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}

// Comparison with the Equality Operator
function testEqualVal(val) {
    if(val == 12){
        return "Equal"
    }
    return 'Not Equal'
}

// Comparison with the Strict Equality Operator
function testEqualVal(val) {
    if(val == 7){
        return "Equal"
    }
    return 'Not Equal'
}

testEqualVal('7') // returns Not Equal as '7' is a string

// Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal"
    }
    return "Not Equal"
  }
  
  compareEquality(10, "10") // Not equal, using strict equality operator. 

// Comparison with the Inequality Operator
funtion testNotEqual(val){
    if(val != 99){
        return 'Not Equal'
    }
    return 'Equal'
}

// Comparison with the Greater Than Operator
function testGreaterThan(val){
    if(val > 100) {
        return "Over 100"
    }
}

// Comparison with the Greater Than Or Equal To Operator
function testGreaterThanOrEqual(val){
    if(val >= 20){
        return "20 or Over"
    }

    if(val >= 10){
        return "10 or Over"
    }
    
    return "Less than 10"
}

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if(val >= 25 && val <= 50) {
        return "Yes"
    }

    return "No"
}

// Comparisons with the Logical Or Operator
function testLogicalOr(val){
    if(val<10 || val>20) {
        return "Outside"
    }

    return "Inside"
}

// Introducing Else Statements
function testElse(val){
    let result = ""

    if (val > 5) {
        result = "Bigger than 5"
    } else {
        result = "5 or Smaller"
    }

    return result
}

// Introducing Else If Statements
function testElseIf(val){
    if(val > 10) {
        return "Greater than 10"
    } else if(val < 5) {
        return "Smaller than 5"
    } else {
        return "Between 5 and 10"
    }
}

// Logical Order in If Else Statements
function orderMyLogic(val) { 
    // Functions are executed from top to bottom
    // Be careful of what statement comes first.
    if (val < 5) {
        return "Less than 5"
    } else if ( val < 10) {
        return "Less than 10"
    } else {
        return " Greater than or equal to 10"
    }
} 

// Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0] // 'Hole-in-One!'

    } else if (strokes <= par - 2) {  // if par-strokes is bigger than or equal to 1
        return names[1] // 'Eagle'

    } else if (strokes == par - 1) {
        return names[2] // 'Birdie -- one less than the holes par

    } else if (strokes == par) {
        return names[3] // 'Par

    } else if (strokes == par + 1) {
        return names[4] // 'Bogey' -- one over the holes par

    } else if (strokes == par + 2) {
        return names[5] // 'Double Bogey' -- two over the holes par

    } else {
        return names[6] // 'Go Home' -- threee oveer the holes par
    }
}

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = ""
    
    switch(val){

        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"
            break
    }

    return answer
}

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = ""

    switch(val) {
        case "a":
            answer = "apple"
            break
        case "b":
            answer = "bird"
            break
        case "c":
            answer = "cat"
            break
        default:
            answer = "stuff"
            break
    }
}

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = ""

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
    }

    return answer
}

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = ""

    switch(val) {
        case "bob":
            answer = "Marley"
            break
        case 42:
            answer = "The Answer"
            break
        case 1:
            answer = "There is no #1"
            break
        case 99:
            answer = "Missed me by this much!"
            break
        case 7:
            answer = "Ate Nine"
            break
    }

    return answerr
}

// Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b
}

// Return Early Pattern for Functions
function abTest(a, b) {
    if(a < 0 || b < 0) {
        return // returns undefined
    }
}

// Counting Cards
let count = 0

function cc(card) {
    let regex = /[JQKA]/

    if(card>1 && card<7) {
        count++
    } else if (card == 10 || regex.test(card)){
        count--
    }

    if(count>0){
        return count + " Bet"
    } else {
    return count + " Hold"
    }
}

// Build JavaScript Objects
const myDog = {
    name: "Max",
    legs: 4,
    tails: 1,
    friends: ["Jackson", "Emily"]
}

// Accessing Object Properties with Dot Notation
let dogName = myDog.name
let dogFriends = myDog.friends

// Accessing Object Properties with Bracket Notation
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

let entreeValue = testObj['an entree']
let drinkValue = testObj['the drink']

// Accessing Object Properties with Variables
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 16
const player = testObj[playerNumber]

// Updating Object Properties
myDog.name = "Something Else" // Access object variable and change it

// Add New Properties to a JavaScript Object
myDog.bark = "woof"

// Delete Properties from a JavaScript Object
delete myDog.bark

// Using Objects for Lookups
function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }

    result = lookup[val]

    return result;
  }

// Testing Objects for Properties
function checkObj(obj, checkProp) {

if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
} 

    return "Not Found";
 }

// Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  }
  
  const gloveBoxContents = myStorage.car.inside["glove box"]

// Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine", // I want to find this.
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1]

  //Record Collection
  const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value){

    if(prop !== "tracks" && value !== ""){
        records[id][prop] = value
    } else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
        records[id][prop] = [value]
    } else if(prop === "tracks" && value !== ""){
        records[id][prop].push(value)
    } else if(value === ""){
        delete records[id][prop]
    }

    return records
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Iterate with JavaScript While Loops
const myArray = []

let i = 5
let minusOne = (-1)

while(i > (variable)){
    myArray.push(i)
    i--
}

// Iterate with JavaScript For Loops
const myArray = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i)
}

// Iterate Through an Array with a For Loop
const myArray = [2, 3, 4, 5, 6]
let total = 0

for(let i = 0; i < myArray.length; i++){
    total += myArray[i]
}

// Nesting For Loops
function multiplyAll(arr){
    let product = 1
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){ // Targetting index of array. I did arr.length[i] which targets the length, not the sub-array which is found in the index.
        product *= arr[i][j]
      }
    }
  
    console.log(product)
    return product
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

 // Iterate with JavaScript Do...While Loops
 const myArray = []
 let i = 10

 do{
     myArray.push(i)
     i++
 } while (i < 10) 

// Replace Loops using Recursion
 function sum(arr, n){
    if(n <= 0 ) {
      return 0
    } else {
      return sum(arr, n-1) + arr[n-1]
    }
  }

// Profile Lookup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  // The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
  
  // If both are true, then return the "value" of that property.
  
  // If name does not correspond to any contacts then return the string No such contact.
  
  // If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
  
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop]
        } else {
          return "No such property"
        }
      }
    }
  
    return "No such contact"
    
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");

// Generate Random Fractions with JavaScript
function randomFraction(){

    let randomNumber = Math.random()

    return randomNumber
}

// Generate Random Whole Numbers with JavaScript 
function randomWholeNumber() {
    return Math.floor(Math.random() * 10)
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax){

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

// Use the parseInt Function
function convertToInteger(str) {
    let result = parseInt(str)

    return result
}

// Use the parseInt Function with a Radix
function convertToInteger(str) {
    let result = parseInt(str, 2)
  
    return result
  }

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal"
}

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
        : "zero"
}

// Use Recursion to Create a Countdown
function countdown(n) {
    if(n < 1) {
      return []
    } else {
      let array = countdown(n-1)
      array.unshift(n)
      return array
    }
}

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  
    if(endNum - startNum === 0){
      return [startNum]
    } else {
      let numberArray = rangeOfNumbers(startNum, endNum-1)
      numberArray.push(endNum)
      return numberArray
    }
  }

// 