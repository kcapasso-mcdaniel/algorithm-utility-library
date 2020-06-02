// Convert Celsius to Fahrenheit
// A1: using the mathematical conversion of celsius to fahrenheit
// R: the fahrenheit temperature
function convertMe(celsius) {
   let fahrenheit = (celsius * 9) / 5 + 32;
   console.log(fahrenheit);
   return fahrenheit;
}

// Reverse the order of an string
// A1: we must split the array, reverse the order of the elements, then join them back together
// R:  reserver Array
// function reverseMe(string) {
//    return string.split("").reverse().join("");
// }
function reverseMe(string) {
   var splitStr = string.split("");
   console.log(splitStr);
   var reverseStr = splitStr.reverse();
   console.log(reverseStr);
   var newArr = reverseStr.join("");
   return newArr;
}

// Factorialize a Number
// A1: multiply the input number by each consecutive number beginning with 2
// R: the product of the newNum multiplied by each consecutive number
function factorialize(num) {
   let newNum = 1;
   for (let multiplyBy = 2; multiplyBy <= num; multiplyBy++) {
      newNum *= multiplyBy;
   }
   return newNum;
}

// Find the Longest Word in a String
// A1: in order to compare something like a sentence we must first split the elements before we can compare them
// A2: the sort function is used to compare the elements to each other
// R: numerical value of the longest element of the string
function longestElement(string) {
   var strSplit = string.split(" ");
   var words = strSplit.sort(function (word1, word2) {
      var length1 = word1.length;
      var length2 = word2.length;
      length2 - length1;
   });
   var result = words.length[0].length;
   return result;
}

// Return Largets Numbers in Arrays
