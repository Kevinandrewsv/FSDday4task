//Do the below programs in anonymous function & IIFE
//anonymous function

//1. Print odd numbers in an array

let theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(() => {
  for (let number of theArray) {
    if (number % 2 != 0) {
      console.log(number);
    }
  }
})();

//anonymous function
// 2. Convert all the strings to title caps in a string array

let myString1 = ["welcome", "to the", "codekata session guvi"];
let myNewArray1 = [];

(() => {
  for (let myString of myString1) {
    if (myString.match(/ /gi)) {
      var myBContent = myString.split(" ");
      for (let i = 0; i < myBContent.length; i++) {
        myNewArray.push(
          myBContent[i][0].toUpperCase() + myBContent[i].slice(1)
        );
      }
    } else {
      myNewArray.push(myString.charAt(0).toUpperCase() + myString.slice(1));
    }
  }
})();

console.log(myNewArray1);

// 3. Sum of all numbers in an array

let mySumArray1 = [1, 2, 3, 4, 5];
let mySum1 = 0;

(() => {
  for (let myArray of mySumArray1) {
    mySum1 += myArray;
  }
})();

console.log(mySum1);

// 4. Return all the prime numbers in an array

var myPrimeArray1 = [2, 3, 6, 9, 27, 17, 177];
let sortArray1 = [];

(() => {
  for (let myPrime of myPrimeArray1) {
    let factor = 0;
    for (let i = 0; i <= myPrime; i++) {
      if (myPrime % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(myPrime);
    }
  }
})();

console.log(sortArray1);

// 5. Return all the palindromes in an array

let myString2 = ["civic", "ada", "string", "pap", "abcd"];

(() => {
  for (let myPal of myString2) {
    let myReverseString = myPal.split("").reverse().join("");
    if (myPal === myReverseString) {
      console.log(myPal);
    } else {
    }
  }
})();

// 6. Return median of two sorted arrays of the same size

let myArray01 = [11, 12, 13, 14, 15];
let myArray02 = [1, 2, 3, 4, 5];
let myArray03 = [];
let mySum2 = 0;

(() => {
  myArray03 = [...myArray01, ...myArray02];
  for (let myArray of myArray03) {
    mySum2 += myArray;
  }
})();

console.log(mySum2 / myArray03.length);

// 7. Remove duplicates from an array

(() => {
  let myWeekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "friday",
    "monday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    "monday",
  ];
  var mySeen = [...new Set(myWeekdays)];
  console.log(mySeen);
})();

//Do the below programs in arrow functions.
//arrow function
//1. Print odd numbers in an array

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myODDNum = () => {
  for (let number of myArray) {
    if (number % 2 != 0) {
      console.log(number);
    }
  }
};

myODDNum();

//arrow function
// 2. Convert all the strings to title caps in a string array

let myStringArray = ["welcome", "to the", "codekata session guvi"];
let myNewArray = [];
let myZ;

let myTitleChangeFunc = () => {
  for (let myString of myStringArray) {
    if (myString.match(/ /gi)) {
      var myBContent = myString.split(" ");
      for (let i = 0; i < myBContent.length; i++) {
        myNewArray.push(
          myBContent[i][0].toUpperCase() + myBContent[i].slice(1)
        );
      }
    } else {
      myNewArray.push(myString.charAt(0).toUpperCase() + myString.slice(1));
    }
  }
  console.log(myNewArray);
};

myTitleChangeFunc();

// 3. Sum of all numbers in an array

let mySumArray = [1, 2, 3, 4, 5];
let mySum = 0;

let myArraySumFunc = () => {
  for (let myArray of mySumArray) {
    mySum += myArray;
  }
  console.log(mySum);
};

myArraySumFunc();

// 4. Return all the prime numbers in an array

var myPrimeArray = [2, 3, 6, 9, 27, 17, 177];
let sortArray = [];

let myPrimeFunction = () => {
  for (let myPrime of myPrimeArray) {
    let factor = 0;
    for (let i = 0; i <= myPrime; i++) {
      if (myPrime % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(myPrime);
    }
  }
  console.log(sortArray);
};

myPrimeFunction();

// 5. Return all the palindromes in an array

let myString = ["civic", "ada", "string", "pap", "abcd"];
let myPalinFunction = () => {
  for (let myPal of myString) {
    let myReverseString = myPal.split("").reverse().join("");
    if (myPal === myReverseString) {
      console.log(myPal);
    } else {
    }
  }
};

myPalinFunction();