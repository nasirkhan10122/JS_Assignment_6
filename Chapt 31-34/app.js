// 1. Write a program that displays current date and time in
//    your browser.
// var dateTime = new Date();
// document.write(dateTime);

// 2. Write a program that alerts the current month in words.
// For example December.

// var dateTime = new Date();
// var index = dateTime.getMonth()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current Month: " + month[index]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var date = new Date();
// var Day = date.getDay();
// var Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + Week[Day]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var date = new Date;
// if (date.getDay() === 6 || date.getDay() === 0) {
//     document.write("It’s Fun day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var fullDate = new Date();
// var date = fullDate.getDate();
// if (date < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var mont = date.getTime();
// var min = mont / (1000 * 60);
// document.write("Current Date: " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + min);
// document.write("<br>Elapsed minutes since January 1, 1970: " + mont);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("Its AM");
// }
// else {
//     alert("Its PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write("Later Date: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramdanDate = new Date(2020, 3, 25);
// var currDate = new Date();
// var ramdanTime = ramdanDate.getTime();
// var currTime = currDate.getTime();
// var diff = (currTime - ramdanTime);
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// document.write(days + " days have passed since 1st Ramadan 2020");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var RefDate = new Date();
// var startDate = new Date(2015, 0, 1, 0, 0, 0);
// var refTime = RefDate.getTime();
// var startTime = startDate.getTime();
// var diff = (refTime - startTime);
// var sec = Math.floor(diff / (1000));
// document.write("On reference Date " + RefDate);
// document.write("<br>" + sec + " seconds had passed since beginning of 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var currDate = new Date();
// document.write("Current date: " + currDate);
// currDate.setHours(currDate.getHours()-1);
// document.write("<br>1 hour ago, it was " + currDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currDate = new Date();
// alert("Current date: " + currDate);
// currDate.setFullYear(currDate.getFullYear()-100);
// document.write("100 years back, it was " + currDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = +prompt("Enter your age please");
// var birthYear = (new Date().getFullYear())-age;
// document.write("Your Age is: "+age);
// document.write("<br>Your Birth Year is: "+birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var custName = "ABC Customer";
// var currMonth = "February";
// var units = 410;
// var chargerPerUnit = 16;
// var netAmntPayable = units*chargerPerUnit;
// var latePaySurcharge = 350;
// var grossAmntPayable = netAmntPayable + latePaySurcharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<br>Customer Name: "+custName+"</strong>");
// document.write("<br>Month: <strong>"+currMonth+"</strong>");
// document.write("<br>Number of units : <strong>"+units+"</strong>");
// document.write("<br>Charges per unit: <strong>"+chargerPerUnit+"</strong>");
// document.write("<br><br>Net Amount Payable (within Due Date) : <strong>"+netAmntPayable+"</strong>");
// document.write("<br>Late Payment Surcharge : <strong>"+latePaySurcharge+"</strong>");
// document.write("<br>Gross Amount Payable (after Due Date): <strong>"+grossAmntPayable+"</strong>");
