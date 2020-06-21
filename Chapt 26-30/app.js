// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number b. round off value of the number 
// c. floor value of the number d. ceil value of the number

// var positiveinteger = prompt("Enter any positive integer", "Positive Number");
// document.write("Number: " + positiveinteger);
// document.write("<br>Round off value: " + Math.round(positiveinteger));
// document.write("<br>Floor Value: " + Math.floor(positiveinteger));
// document.write("<br>Ceil Value: " + Math.ceil(positiveinteger));

// 2. Write a program that takes a negative floating point number from user &
//    display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var negativenum = prompt("Enter any negative floating point ", "Negative Numbers");
// document.write("Numbers: " + negativenum);
// document.write("<br>Round off value: " + Math.round(negativenum));
// document.write("<br>Floor Value: " + Math.floor(negativenum));
// document.write("<br>Ceil Value: " + Math.ceil(negativenum));

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("Enter any number ", "Type numbers");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// 4. Write a program that simulates a dice using random()
//  method of JS Math class. Display the value of dice in your browser.:

// var dice = (Math.random() * 6) + 1;
// document.write("Random Dice Value: " + Math.floor(dice));

// 5. Write a program that simulates a coin toss using random() 
//    method of JS Math class. Display the value of coin in your browser

// var cointoss = Math.floor((Math.random() * 2) + 1);
// document.write(cointoss);
// if (cointoss === 2) {
//     document.write("<br>Random Coin Value: Head");
// }
// else {
//     document.write("<br>Random Coin Value: Tail");
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var Rannum = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100: " + Rannum);

// 7. Write a program that asks the user about his weight. 
//    Parse the user input and display his weight in your browser. 
//    Possible user inputs can be: 
//    a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var weight = prompt("Enter your weight in Kilograms please", "Weight in kilograms");
// document.write("The weight of user is " + parseFloat(weight) + " Kilograms");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable.
//    Ask the user to input a number between 1 and 10.
//    If the user input equals the secret number, congratulate the user.

// var secretNum = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Enter any number between 1 and 10");
// if (input === secretNum) {
//     alert("Congratulate!");
// }
// else {
//     alert("Try Again!");
// }
