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
