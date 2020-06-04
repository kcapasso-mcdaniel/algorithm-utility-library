// Convert Celsius to Fahrenheit
// A1: using the mathematical conversion of celsius to fahrenheit
// R: the fahrenheit temperature
function convertMe(celsius) {
   // conversion method from celsius to fahrenehit
   let fahrenheit = (celsius * 9) / 5 + 32;
   console.log(fahrenheit);
   // temperatrue in fahrenheit
   return fahrenheit;
}

// Reverse the order of an string
// A1: we must split the array, reverse the order of the elements, then join them back together
// R:  reserve Array
function reverseMe(string) {
   // split the string in order to manipulate it
   var splitStr = string.split("");
   console.log(splitStr);
   // reverse the order of the elements
   var reverseStr = splitStr.reverse();
   console.log(reverseStr);
   // join the elements back together into a string
   var newArr = reverseStr.join("");
   // new reverse ordered string
   return newArr;
}

// Factorialize a Number - multiply number by each consecutive number minus one
// A1: newNum is where the consecutive numbers begin
// A2: using a for loop we are iterate through the consecutive numbers and on each iteration the newNum is multiplied by 2
// R: new number
function factorialize(num) {
   // newNum represents the first number we test
   let newNum = 1;
   // 2 is used as the multiplier because it is the second number therefore the first number to be multiplied by
   for (let multiplyBy = 2; multiplyBy <= num; multiplyBy++) {
      newNum *= multiplyBy;
   }
   console.log(newNum);
   // return one number that is a result of it being multiplied by itself
   return newNum;
}

// Find the Longest Word in a String
// A1: in order to compare something like a sentence we must first split the elements before we can compare them
// A2: the sort function is used to compare the elements to each other
// R: numerical value of the longest element of the string
function longestElement(string) {
   // split the string to compare
   var strSplit = string.split(" ");
   // use sort to compare the length of the words
   var words = strSplit.sort(function (word1, word2) {
      var length1 = word1.length;
      var length2 = word2.length;
      // return the words sorted from largest to smallest
      return length2 - length1;
   });
   // gives us a number representing the number of characters in the longest word
   var result = words[0].length;
   console.log(result);
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
      var largestNumber = null;
      for (let j = 1; j < arr[i].length; j++) {
         if (arr[i][j] > largestNumber || largestNumber == null)
            largestNumber = arr[i][j];
      }
      newArr.push(largestNumber);
   }
   console.log(newArr);
   return newArr;
}

// Slice a String
// A1: slice examines the targeted element of a given string to see if it exisits within the string
// R: returns a boolean value of true or false
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
   console.log(newStr);
   return newStr;
}

// Truncate a String
// A1: using an if statement compare the length of the string to the target index number
// R1: if length is greater than number return slice portion of string with ("...") appended to it
// R2: if length is less than number return string
function truncateString(str, num) {
   if (str.length > num) {
      console.log(str);
      return str.slice(0, num) + "...";
   } else {
      console.log(str);
      return str.slice(0, num);
   }
}

// Finders Keepers
//A1: each element of an array is tested against the function
// R: the first element in the array that passes the function
function findElement(arr, func = (num) => num % 2 === 0) {
   let newArr = arr.filter(func);
   console.log(newArr);
   return newArr[0];
}

// Boolean
// A1: check is value is boolean
// R: return true if true or return false if not
function booWho(bool) {
   console.log(bool);
   return bool === true || bool === false;
}

// Title a Case Sentence - syntax is everything
function titleCase(str) {
   var newStr = str
      // make all characters lowercase
      .toLowerCase()
      // split the string up to manipulate the elements
      .split(" ")
      // make the first letter uppercase
      .map(function (letters) {
         return letters[0].toUpperCase() + letters.slice(1);
      });
   console.log(newStr);
   // return the sentence with the first letter of each word capitalized
   return newStr.join(" ");
}

// Slice and Splice
// given two arrays copy each element of the first array to the second array in order
function frankenSplice(arr1, arr2, n) {
   let newArray = [];
   // slice the elements of the second array beginning at 0 and ending at the value of n and push to newArray
   newArray.push(...arr2.slice(0, n));
   // push all the elements of the first array to the end of the newArray
   newArray.push(...arr1);
   // pushes the remaining elements of the second array beginning at the value of n
   newArray.push(...arr2.slice(n, arr2.length));
   // return the new array with the all elements
   return newArray;
}

// function frankenSplice(arr1, arr2, n) {
//    let localArr = arr2.slice();
//    localArr.splice(n, 0, ...arr1);
//    return localArr;
// }

// Falsey Bouncer
// A1: filter through an array for Falsey Values - [false, null, 0, "", undefined, and NaN]
// R: return true or false
function bouncer(arr) {
   console.log(arr);
   return arr.filter((falsey) => falsey);
}
console.log(bouncer([7, "ate", "", false, 9]));

// Where do I belong - return the index where the given num should go in a sorted array
// A1: first sort the given array
// A2: run for loop to determine at which index the given number belongs
// R1: return index position
// R2: if num falls at the end of the array must use length to get the value of the index
function getIndexToIns(arr, num) {
   arr.sort(function (a, b) {
      console.log(arr);
      return a - b;
   });
   for (let i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
         console.log(i);
         return i;
      }
   }
   return arr.length;
}

// Mutations - given two words find out if the second word contains all the letters of the first word
// A1: set variables to lowercase for ease of comparison
// A2: use a for loop to iterate through the letter
// R1: if the current letter does not exist in the first word return false
// R2: if the current letter does exist return true
function mutation(arr) {
   // set both words to lower case to compare
   let wordOne = arr[0].toLowerCase();
   let wordTwo = arr[1].toLowerCase();

   for (var i = 0; i < wordTwo.length; i++) {
      if (wordOne.indexOf(wordTwo[i]) === -1) return false;
   }
   return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

// Chunky Monkey - given array return two dimensional array based on the size
// A1: while loop runs while length of the array is greater than 0
// A2: splice at the first index to the given size
// R: the new array
function chunkArrayInGroups(arr, size) {
   let newArr = [];
   while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
   }
   return newArr;
}
