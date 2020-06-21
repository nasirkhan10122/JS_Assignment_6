// 1. Write a program that takes two user inputs for first and last name
//    using prompt and merge them in a new variable titled fullName. 
//    Greet the user using his full name.

// var firstName = prompt("Enter your firstName","FirstName" );
// var lastName = prompt("Enter your lastName","LastName" );
// fullName = firstName+" "+lastName
// alert("Hello"+" "+fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. 
//    Find and display the length of user input in your browser
// var favoriteMobile = prompt("Enter your favorite mobile phone model","Mobile Phone Model");
// var stringLength = favoriteMobile.length;
// document.write("<b>My Favorite Phone is: <b>" + favoriteMobile);
// document.write("<br>Length of String: " + stringLength);

// 3. Write a program to find the index of letter “n” in the word 
//    “Pakistani” and display the result in your browser .

// var Word = "Pakistani";
// var indexletter = Word.indexletterOf("n");
// document.write("<b>String: <b>" + Word);
// document.write("<br><b>Index of 'n': <b>" + indexletter);

// 4. Write a program to find the last index of letter “l” in the word 
//    “Hello World” and display the result in your browser.

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("<b>String: <b>" + word);
// document.write("<br><b>Last index of 'l': <b>" + lastIndex);

// 5. Write a program to find the character at 3rd index in the word
//    “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String: " + word);
// document.write("<br>Character at index 3: " + character);

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your firstName","FirstName" );
// var lastName = prompt("Enter your lastName","LastName" );
// fullName = firstName.concat(" ",lastName);
// alert("Hello"+" "+fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
//    “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var AfterReplace = word.replace("Hyder", "Islam");
// document.write("City: " + word);
// document.write("<br>After Replacement: " + AfterReplace);

// 8. Write a program to replace all occurrences of “and”
//    in the string with “&” and display the result in your browser.
//    var message = “Ali and Sami are best friends. 
//    They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var AfterReplace = message.replace("and", "&");
// document.write("Sentence: " + message);
// document.write("<br>After Replacement: " + AfterReplace);

// 9. Write a program that converts a string “472” to a
//    number 472. Display the values & types in your browser.

// var string = "472";
// var number = parseInt(string);
// document.write("Value: " + string);
// document.write("<br>Type: " + typeof (string));
// document.write("<br>Value: " + number);
// document.write("<br>Type: " + typeof (number));

// 10. Write a program that takes user input. 
//     Convert and show the input in capital letters.

// var userInput = prompt("Enter user input");
// var upperInput = userInput.toUpperCase();
// document.write("User input: " + userInput);
// document.write("<br>Upper case: " + upperInput);

// 11. Write a program that takes user input.
//     Convert and show the input in title case.
// var userInput = prompt("Enter user input");
// var lowerInput = userInput.toLowerCase();
// document.write("User input: " + userInput);
// document.write("<br>Lower case: " + lowerInput);

// 12. Write a program that converts the variable num to string. 
//     var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// num = Math.trunc(num*100)/100;
// var string = num.toString();
// string = string.replace(".", "");
// document.write("Number: " + num);
// document.write("<br>Result: " + string);

// 13. Write a program to take user input and store username in a variable.
//     If the username contains any special symbol among
//     [@ . , !], prompt the user to enter a valid username. 
//     For character codes of [@ .

// var userName = prompt("Enter Username", "Username");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
//         alert("Please enter a valid Username");
//     }
// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, 
// COOKIE or coOkIE, program should inform about its availability. Example:

// var array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// input = input.toLowerCase();
// var i = 0;
// for (i = 0; i < array1.length; i++) {
//     if (input === array1[i]) {
//         document.write(input + " is <strong>Available</strong> at index " + i + " in our bakery");
//         break;
//     }
// }
// if (i >= array1.length) {
//     document.write("We are Sorry! " + input + " is <strong>Not Available</strong> in our bakery");
// }

// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
//    prompt the user to enter a valid password. 
//    For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var input = prompt("Enter your Password", "Password");
// var actual= false, num = false, startNum = false, len = false;
// for (var i = 0; i < input.length; i++) {
//     if ((input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) || (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
//         actual = true;
//     }
//     if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
//         num = true;
//     }
//     if (input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) {
//         startNum = true;
//     }
//     if (input.length >= 6) {
//         len = true;
//     }
// }
// document.write("Entered Password :" + input);
// if (actual == false) {
//     document.write("<br>Password should contain alphabet");
//     document.write("<br>Please enter a valid password");
// }
// else if (num == false) {
//     document.write("<br>Password should contain number ");
//     document.write("<br>Please enter a valid password");
// }
// else if (startNum == true) {
//     document.write("<br>Password can not start with number ");
//     document.write("<br>Please enter a valid password");
// }
// else if (len == false) {
//     document.write("<br>Password must atleast 6 characters long :");
//     document.write("<br>Please enter a valid password");
// }
// else {
//     document.write("<br>Valid password!");
// }

// 16. Write a program to convert the following string to an array using string split method. 
//     var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var array2 = university.split("");
// document.write("Elements of Array are");
// for (var i = 0; i < array2.length; i++) {
//     document.write("<br>" + array2[i]);
// }

// 17. Write a program to display the last character of a user input.

// var input = prompt("Enter string");
// document.write("User input: " + input);
// document.write("<br>Last character of input: " + input.charAt(input.length - 1));

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
//     Write a program to count number of occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         count++;
//     }
// }
// document.write("Text: " + string);
// document.write("<br>There are " + count + " occurence(s) of the word 'the'");



