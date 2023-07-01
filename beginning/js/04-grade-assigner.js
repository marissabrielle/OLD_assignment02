// The “Grade Assigner” Application
// Usage: Use else if statements
// 1. Collect the a number between 1 and 100 from the user. 
let num = prompt('Enter a number between 1 and 100');


// 2. Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
if (num < 0 || num > 100 ){
    alert('Only numbers between 1 and 100 are accepted');
}

// 3. If the score is between 60 and 69, write out “You received a D” into the console.
if(num >= 60 && num <= 69) {
    console.log('You received a D');
}

// If the score is between 70 and 79, write out “You received a C” into the console.
else if(num >= 70 && num <= 79) {
    console.log('You received a C');
}

// If the score is between 80 and 89, write out “You received a B” into the console.
else if(num >= 80 && num <= 89) {
    console.log('You received a B');
}

// If the score is between 90 and 100, write out “You received an A” into the console.
if(num >= 90 && num <= 100) {
    console.log('You received an A');
}

// If the score is less than 60, write out “You received an F” into the console.
else if(num < 60) {
    console.log('You received an F');
}
