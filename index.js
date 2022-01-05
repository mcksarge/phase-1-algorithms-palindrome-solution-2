function isPalindrome(word) {
  // Write your algorithm here
  for (let firstIndex = 0; firstIndex < word.length/2; firstIndex++){
    let lastIndex = word.length - 1 - firstIndex;
    if (word[firstIndex] === word[lastIndex]) {
      return true
    } else {
      return false
    }
  }
}


/* 
  Add your pseudocode here
  
  if the first character and the last character match, move inwards.
  If all letters match, return true



*/

/*
  Add written explanation of your solution here

  Take the word argument, and do a FOR loop that iterates through half the characters of the string.

  add variable that contains word length starting from last character of string, minus i

  return true if characters match

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
