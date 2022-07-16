// Chapter No 35 to 38;
// function log(a) {
//     console.log(a);
// }

// Question No 01;
// function date (){
//     var now = new Date();
//     log(now);
// }
// date();

// Question No 02;
// function userName (){
//     var firstName = prompt("Enter First Name");
//     var lastName = prompt("Enter Last Name");
//     log(firstName + "" + lastName);
// }
// userName();

// Question No 03;
// function addition (first,second){
//     log(first+second);
// }
// addition(500,400);

// Question No 04;
// function calculation(){
// var num1 = +prompt("Enter a First Number");
// var num2 = +prompt("Enter a Second Number");
// var opt = prompt("Enter a Operator\nWhat do you want to calculate (+ - * / %)");
// var answer;
// if (opt === "+") {
//     answer = num1 + num2
// } else if (opt === "-") {
//     answer = num1 - num2
// } else if (opt === "*") {
//     answer = num1 * num2
// } else if (opt === "/") {
//     answer = num1 / num2
// } else if (opt === "%") {
//     answer = num1 % num2
// }
//     log(answer);
// }
// calculation();

// Question No 05;
// function squares(squareNum) {
//     var squareNum = +prompt("Enter a number to find the sqaure of it  : ")
//     var findSquare = squareNum * squareNum;
//     console.log(" The Number of Squares " + squareNum  + " is : " + findSquare);
// }
// squares();

// Question No 07;
// function counting() {
//     var startNumber = +prompt("Enter a start Number : ");
//     var EndNumber = +prompt("Enter a End Number : ");


//     for (i = startNumber; i <= EndNumber; i++) {

//         console.log(i);
//     }
// }
// counting();

// Question No 08;
// function calculateHypotenouse(b,p){
//     function square(b,p){
//         var y = b*b;
//         var z = p*p;
//         return y+z;
//     }
//     var y = square(b,p);
//     log(Math.round(Math.sqrt(y)));
// }
// calculateHypotenouse(6,9);

// Question No 9;
// function area(width, height) {

//     var width = +prompt("Enter a width :");
//     var height = +prompt("Enter a height :");

//     A = width * height;

//     document.write("(Argument as variable) Area of the Rectangle is " + A);

//     document.write("<br>");

//     var area = 45 * 54;
//     document.write("(Argument as value) Area of the Rectangle is : " + area);
// }
// area();


// Question No 10;
// function palindrome() {
//     var text = '';
//     var userInput = prompt("Enter a string");

//     for (var i = userInput.length - 1; i >= 0; i--) {
//         text += userInput[i];
//     }

//     if (text === userInput) {
//         alert("It's Palindrome Word");
//     }
//     else {
//         alert("It's Not Palindrome Word");
//     }
// }

// Question No 11;
// function uperCase() {
//     var userInput = prompt("Enter a word");
//     var userInput = userInput.split(' ');
//     for (i = 0; i < userInput.length; i++) {
//         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//         console.log(userInput[i]);
//     }
// }
// uperCase();

// Question No 12;
// function letterOccurence(strings, character) {
//     var strings = prompt("Enter a string :").toLowerCase();
//     var character = prompt("Enter a character: ");
//     var count = 0;
//     for (var i = 0; i < strings.length; i++) {
//         if (strings.charAt(i) == character)
//             count++;
//     }
//     console.log("There are " + count + " occurrence(s) of the word " + character);
// }   
// letterOccurence();

// Question No 13;
// function longestWord(str){
//     var str = prompt("Enter your string : ");
//     var splitArrayValue = str.split(' ');
//     var storeWord = "";
//     for (var i = 0; i < splitArrayValue.length; i++) {
//         if (splitArrayValue[i].length > storeWord.length) {
//             storeWord = splitArrayValue[i];
//         }
//     }
//         // return storeWord;
//         console.log("Actual String is : " + str + "<br>");
//         console.log("Longest word in String is : " + storeWord);
        
// }
// longestWord();