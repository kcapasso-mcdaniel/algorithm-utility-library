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

// Factorialize a Number - multiply number by each consecutive number minus one
// A1: newNum represents that starting point of the consecutive numbers that will be multiplied
// A2:
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

// Return Largest Numbers in Arrays
// A1: set an empty array that we will push the largest number to
// A2: iterate through the array to access the sub arrays beginning with the index of (0)
// A3: iterate through the sub array beginning with the index of (1) to find the largest number reducing one step and increasing the speed
// A4: push the largest number to the new array
// R: a new array containing the largest numbers from each sub array
function largestNumber(arr) {
   var newArr = [];
   for (let i = 0; i < arr.length; i++) {
      var largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
         if (arr[i][j] > largestNumber) largestNumber = arr[i][j];
      }
      newArr.push(largestNumber);
   }
   console.log(newArr);
   return newArr;
}

// Slice a String
// A1: slice examines the targeted element of a given string to see if it exisits within the string
// R: new string
function confirmEnding(str, target) {
   var newStr = str.slice(str.length - target.length) === target;
   console.log(newStr);
   return newStr;
}

// Repeat a String
// A1: using a for loop we run the function through the string according to the given number
// R: string repeated according to the parameters given
function repeatStringNumTimes(str, num) {
   var newStr = "";
   for (let i = 0; i < num; i++) {
      newStr += str;
   }
   return newStr;
}

// // Truncate a String
// //
// //
// function truncateString(str, num) {
//    if (str.length > num) {
//       return str.slice(0, num) + "...";
//    } else {
//       return str.slice(0, num);
//    }
// }

// // Finders Keepers
// //
// //
// function findElement(arr, func) {
//    let num = 0;
//    console.log(num);
//    return arr.filter(func)[0];
// }
// console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0));

// Boolean
// A1: find if the given variable has a boolean value
// R: true or false
// function booWho(bool) {
//    return typeof bool === "boolean";
// }

// booWho(null);
