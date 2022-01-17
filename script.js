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

// START FUNCTION
writePassword();

function generatePassword() {
  let x = 2;
  console.log (x);
}

//let passwordLength = [passwordLengthSelected];

//     CREATE A FUNCTION FOR CHOOSING THE LENGTH OF THE CHARACTERS (THIS SHOULD BE THE ONLY INPUT WHERE USER HAS TO TYPE)
var passwordLength = function () {
  // ask for preffered password length
  window.prompt (
    "How long would you like your password to be? Please enter a number between 8 and 128."
  );
  // if...else to validate acceptable # chosen
  if (passwordLengthSelected >= 8 && passwordLengthSelected <= 128) {
    // if this statement is true- the value needs to be saved, and move to the next function
    console.log ("valid length");
    passwordLengthSelected (passwordCriteria);
  }
  // if the statement is false- prompt try again
  else
    window.alert("You did not pick a valid option. Please enter a number between 8 and 128.")
    passwordLength ();
  }


// STEP 1: CREATE A WAY FOR SOMETHING TO BE TEXT GENERATED AND DISPLAY ON THE PAGE. 
//     ACTIVATE BUTTON CLICK, WHICH SHOULD RETURN A STRING (OBJECT)
//     DISPLAY THE STRING ON THE PAGE in the textarea HTML
//           <div class="card-body">
//           <textarea
//             readonly
//             id="password"
//             placeholder="Your Secure Password"
//             aria-label="Generated Password"
//           ></textarea>
//     CHANGE THE PLACEHOLDER? target the id?


// STEP 2: 
//     CREATE A FUNCTION FOR CHOOSING THE LENGTH OF THE CHARACTERS (THIS SHOULD BE THE ONLY INPUT WHERE USER HAS TO TYPE)
//     Prompt: how long would you like your password (pick a number between 8 and 128)
//       input area for customer to chose
//         if # > 8 & # < 128 - true - move on to passwordCriteria (yes/no statements)
//           else - alert, you must type a valid # between 8 and 128

  // STEP 3: 
  // CREATE ALERT PROPMTS FOR CHOOSING THE DIFFERENT 4 CATEGORIES, MAKE SURE EACH ONE WORKS
  //CONDITIONAL? SWITCH?)
  // alert: Do you want lowercase letters?
  //   if yes- include lowercase letters
  //     else- do not include lowercase letters
  // alert: Do you want uppercase letters?
  //   if yes- include uppercase letters
  //     else- do not include uppercase letters
  // alert: do you want numeric numbers?
  //   if yes- include numeric numbers
  //     else- do not include numbers
  // alert: do you want special characters?
  //   if yes- include special characters
  //     else- do not include special characters

  // var passwordCriteria = function () {
    
  //   // ask if user wants to include lowercase letters
  //   var includeLowercase = window.confirm("Do you want to include lowercase letters?");
  //   //   if yes- include lowercase letters
  //   //     else- do not include lowercase letters
    
  //   // ask if user wants to include uppercase letters
  //   var includeUppercase = window.confirm("Do you want to include uppercase letters?");
  //   //   if yes- include uppercase letters
  //   //     else- do not include uppercase letters
    
  //   // ask if user wants to include numbers
  //   var includeNumbers = window.confirm("Do you want to include numbers?");
  //   //   if yes- include numeric numbers
  //   //     else- do not include numbers
    
  //   // ask if user wants to include special characters
  //   var includeSpecial = window.confirm("Do you want to include special characters?");
  //   //   if yes- include special characters
  //   //     else- do not include special characters
  // }

  // STEP 4:
  // CREATE A VALIDATION METHOD FOR DOUBLE CHECKING AT LEAST ONE PROMPT WAS ANSWERED TRUE
  // if there is one true statement (yes)- generate password
  //   else- alert: You must include one of the following- uppercase, lowercase, numbers, or special characters
  //   alert: try again?
  //     if yes- run loop again
  //       else: cancel "come back when you want a strong password"

  // var strengthValidator = {
  //     // CREATE A VALIDATION METHOD FOR DOUBLE CHECKING AT LEAST ONE PROMPT WAS ANSWERED TRUE (yes)
  //   if (includeLowercase == true || includeUppercase == true || includeNumbers == true || includeSpecial == true) {
  //     // if there is one true statement (yes)- generate password  
  //     return generatePassword ();
  //     break;
  //   }
  //   // else- alert: You must include one of the following-
  //   else {
  //     window.alert("You must include one of the following- uppercase, lowercase, numbers, or special characters. Try again?");
  //     //if yes- run loop again
  //   }
  //   // if user does not want to try again
  //   else {
  //     window.alert("come back when you want a strong password.");
  //   }
  // }



/*
NEEDED FUNCTIONS
THIS PASSOWRD MUST BE DISPLAYED IN A ALERT OR WRITTEN TO THE PAGE
 */

// probably going to need a mathrandom- 4 arrays


// use 
/* String object? to put into HTML*/

//use - template literal to display html?

//use 
/* Math - to randomize array of characters
  each character has an index- so indexes can be randomized */
// console.log (message.length); to determine if the length is appropriate?

//give array options- user chooses which arrays to include, those are included in another array and randomized,
// the randomized array is spit out in a string and displayed in the HTML

// validator? String lenth must = ? or else?

// how do returns work?
