//Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32

    return fahrenheit;
  }
  
  convertToF(30);
  console.log(convertToF(30))

// Reverse a String
function reverseString(str) {
  let splitArr = str.split("")
  let reverseArr = splitArr.reverse()
  let joinArr = reverseArr.join("")

  let reversedString = joinArr


  return reversedString;
}

console.log(reverseString("Hello"))

// Factorialize a Number
function factorialize(num) {
  let product = 1
  
  if(num == 0){
    return 1
  } else {
    for(let i = 2; i <= num; i++){
      product *= i;
    }
  }

  return product;
}

console.log(factorialize(5));

// 