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
  let arr = []
  arr = str

  str = arr.reverse()
  
  return str;
}

reverseString("hello");