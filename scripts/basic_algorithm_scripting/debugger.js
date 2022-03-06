function findLongestWordLength(str) {
  let arr = str.split(" ")
  let largest_Str = ""

  arr.forEach(item => {
    console.log(item.length)
    if(item.length > largest_Str.length) {
      largest_Str = item
    }
  });

  // Because largest_Str is an empty variable, its length is = 0
  // During the first forEach loop it is therefore set to the
  // first element. Afterwards a comparson of words is initiated
  // for each item in the array.

  console.log(largest_Str) // log word
  return largest_Str.length // return length, not word
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
