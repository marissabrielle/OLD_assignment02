// Larger or Smaller?
// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

//integer prompt 1
let num1 = Number(prompt('Enter a number between 1 and 10'));

//integer prompt 2
let num2 = Number(prompt('Enter another number between 1 and 10'));

//if number 1 is lager than number 2, display number 1
if (num1 > num2) {
    document.write(num1 + ' is greater than ' + num2);
}
//else if number 2 is larger than number 1, display number 2
 else if (num2 > num1){
    document.write(num2 + ' is greater than ' + num1);
 }
//else number 1 and number 2 are equal, display numbers are equal
 else {
    document.write(num1 + ' is equal to ' + num2);
 }
