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