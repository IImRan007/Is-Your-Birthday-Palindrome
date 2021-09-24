const inputArea = document.querySelector("#input-area");
const checkBtn = document.querySelector("check-btn");
const output = document.querySelector("#output");

// function to reverse a string
function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var reversedString = reverseListOfChars.join("");
  return reversedString;
}

function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

function dateToString(date) {}

var date = {
  day: 5,
  month: 6,
  year: 2021,
};
