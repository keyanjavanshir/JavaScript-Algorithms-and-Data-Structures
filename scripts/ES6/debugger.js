arr1 = [["Jersey", 3], ["Brooklyn", 2], ["Ashley", 1]]
arr2 = [["Jersey", 1], ["Brooklyn", 3], ["Ashley", 2]]
arr3 = [["Jersey", 2], ["Brooklyn", 1], ["Ashley", 3]]
arr4 = [["Jersey", 3], ["Brooklyn", 2], ["Ashley", 1]]
arr5 = [["Jersey", 1], ["Brooklyn", 2], ["Ashley", 3]]

function calcArr(...arr){
  // Take in every array
  // Add the values together
  // Find the average
  // Push one final array
  let result = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5]


  return result
}