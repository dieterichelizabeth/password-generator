
// Arrays for holding lowercase + uppercase letters, numbers, and special characters
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];    

var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '(', ')', '-', '+', '/', '?', '{', '}', '[', ']', '~' ];



// button variable and i.d.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Ready for your new password?");
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
Step 1. list items in an array of possible types which the user can choose from
Step 2. Create a user prompt for password length, then which types the user would like to include (numbers, lowercase, uppercase, special characters?)
Step 3. Create a filter to know which characters to include
Step 4. Create a validation method for double checking at least one character type was included
Step 5. Create a variable to contain user input
Step 6. Create a loop to generate random string (completed password)
Step 7. Push the randomly generated password to HTML text-box
Step 8. Display the password to the user
*/