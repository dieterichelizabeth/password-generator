
// Arrays for holding lowercase + uppercase letters, numbers, and special characters
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];    
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '(', ')', '-', '+', '/', '?', '{', '}', '[', ']', '~' ];
let selectedCriteria = [];

function start() {
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
    }
    // if the statement is false- prompt try again message
    else {
      // if user selects ok: function re-starts
      if (confirm ("You did not pick a valid option. Would you like to try again?")== true) {
        start();
        return;
      }
      // if a user cancels- function ends
        else {
          return;
        }
    };

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

  //console.log(selectedCriteria);

// Validate password strength by checking at least one prompt was answered true/yes
    if (lowerCaseIncluded == true || upperCaseIncluded == true || numbersIncluded == true || specialIncluded == true) {
      // if there is one true statement (yes)- HOW TO MOVE TO THE NEXT FUNCTION? (return generatePassword (); ?)
      console.log ("strength validated");
    }
    // else- alert: You must include one of the following-
    else{ 
      // if user selects ok: function re-starts
      if (confirm ("You must include one of the following: uppercase, lowercase, numbers, or special characters. Try again?")== true) {
        start();
        return;
      }
      // else- end function
        else {
          return;
        }
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
    writePassword ();

// Write password to the #password input
function writePassword() {
    window.alert("Ready for your new password?");
    var password = completePassword; 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// button variable and i.d.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", start);



