
// Arrays for holding lowercase + uppercase letters, numbers, and special characters
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];    
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '(', ')', '-', '+', '/', '?', '{', '}', '[', ']', '~' ];
let selectedCriteria = [];

// Prompt for the user to select password length
var passwordLengthSelected =
    // ask for prefferred password length
    window.prompt (
      "How long would you like your password to be? Please enter a number between 8 and 128."
    );
    console.log ("character length selected = " +passwordLengthSelected);
    // if...else to validate acceptable # chosen
    if (passwordLengthSelected >= 8 && passwordLengthSelected <= 128) {
      // if this statement is true, the value is saved --> move to the next function
      console.log ("valid length");
      // HOW TO MOVE TO THE NEXT FUNCTION?
    }
    // if the statement is false- prompt try again
    else
      window.alert("You did not pick a valid option. Please type a number between 8 and 128.")
      // HOW TO RE-START THIS LOOP?  

// Prompt user to select password criteria
var passwordCriteria = 
    // ask if user wants to include lowercase letters
    lowerCaseIncluded = window.confirm("Do you want to include lowercase letters?");
    // if the user selects yes, then lowercase letters are added to selectedCriteria array
    if (lowerCaseIncluded == true) {
      console.log ("lowercase included");
      selectedCriteria.push(...lowerCase);
    }
      else {
        console.log ("lowercase not included");
      }
      
    // ask if user wants to include uppercase letters
    upperCaseIncluded = window.confirm("Do you want to include uppercase letters?");
    // if the user selects yes, then uppercase letters are added to selectedCriteria array
    if (upperCaseIncluded == true) {
      console.log ("uppercase included");
      selectedCriteria.push(...upperCase);
    }
      else {
        console.log ("uppercase not included");
      }
      
    // ask if user wants to include numbers
    numbersIncluded = window.confirm("Do you want to include numbers?");
    // if the user selects yes, then numbers are added to selectedCriteria array
    if (numbersIncluded == true) {
      console.log ("numbers included");
      selectedCriteria.push(...numbers);
    }
      else {
        console.log ("numbers not included");
      }

    // ask if user wants to include special characters
    specialIncluded = window.confirm("Do you want to include special characters?");
    // if the user selects yes, then special characters are added to selectedCriteria array
    if (specialIncluded == true) {
      console.log ("special characters included");
      selectedCriteria.push(...specialCharacters);
    }
      else {
        console.log ("special characters not included");
      }

  console.log(selectedCriteria);

// Function to validate password strength by checking at least one prompt was answered true/yes
function strengthValidator () {
    if (lowerCaseIncluded == true || upperCaseIncluded == true || numbersIncluded == true || specialIncluded == true) {
      // if there is one true statement (yes)- HOW TO MOVE TO THE NEXT FUNCTION? (return generatePassword (); ?)
      console.log ("strength validated");
    }
    // else- alert: You must include one of the following-
    else {
      window.alert("You must include one of the following: uppercase, lowercase, numbers, or special characters. Try again?");
      //if yes- HOW TO RE-START THIS LOOP? 
    }
    // if user does not want to try again
    // window.alert("come back when you want a strong password.");}
  }

// Create a loop to generate randomized array
let randomizer = new Array ();
    // for loop for passwordLengthSelected value (length)
    for (let num = 0; num < passwordLengthSelected; num++) {
        // grabbing random value from a selectedCriteria array
        var selectedCriteriaRando = selectedCriteria[Math.floor(Math.random()*selectedCriteria.length)]; 
        // pushing random grabbed value into randomizer array
        randomizer.push(selectedCriteriaRando);
    }
    console.log(randomizer);

// Turn randomized array into a string without commas (completed password)
var completePassword = randomizer.join('');
    console.log(completePassword);

// button variable and i.d.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Ready for your new password?");
  var password = completePassword; 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

strengthValidator ();
writePassword ();

/*
-Step 1. list items in an array of possible types which the user can choose from
-Step 2. Create a user prompt for password length, then which types the user would like to include (numbers, lowercase, uppercase, special characters?)
-Step 3. Create a filter to know which characters to include (conditional?/switch?)
-Step 4. Create a validation method for double checking at least one character type was included
-Step 5. Create a variable to contain user input
-Step 6. Create a loop to generate random values from criteria by selected length
-Step 7. turn randomized array into a string (completed password)
-Step 8. Push the randomly generated password to HTML text-box
-Step 9. Display the password to the user
*/

/* NOTES */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']
// let evenMoreVegs = ['brocolli', 'cellery'];

// // Merge the second array into the first one
// vegetables.push(...moreVegs);
// vegetables.push(...evenMoreVegs);
// console.log(vegetables);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// grabbing random # from an array
// let x = ['a', 'e', 't', '#', 30, 13, 89, 56, 72];

// var xRando = x[Math.floor(Math.random()*x.length)];
// console.log(xRando) 


// a = 9;
// b = [1, 2, 3];
// // for loop for array value (length)
// let goodA = new Array ();
// for (let num = 0; num < a; num++) {
//     goodA.push(num);
// }
// console.log(goodA);

// // combining the two
// c = 10;
// d = ['#', 'p', 1, 0, 'b'];
// let goodc = new Array ();
// for (let num = 0; num < c; num++) {
//     var dRando = d[Math.floor(Math.random()*d.length)];
//     goodc.push(dRando);
// }
// console.log(goodc);

// https://www.w3schools.com/jsref/jsref_tostring_array.asp

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join