// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function handles most of the user input and error handling and calls the random
//character generator which adds characters to the password variable which is subsequently
//returned.
function generatePassword() {
  //Variable initialization
  var password = "";
  var canLowerCase = false;
  var canUpperCase = false;
  var canNumeric = false;
  var canSymbol = false;
  var doubleCheckFailed = true;
  var passwordLength = 0;
 
  //Confirming which characters to add to the password and double checking that the user
  // at least confirmed one option.
  while (doubleCheckFailed) {

    canLowerCase = window.confirm("Do you want lower case letters in your password?");
    canUpperCase = window.confirm("Do you want upper case letters in your password?");
    canNumeric = window.confirm("Do you want numbers in your password?");
    canSymbol = window.confirm("Do you want symbols in your password?");
    
    if (canLowerCase === false && canUpperCase === false && canNumeric === false && canSymbol === false) {
      window.alert("Inproper input detected! Please at least confirm one option to generate a password.");
    } else {
      doubleCheckFailed = false;
    }

  }

  //This was reassigned to permit the value to be reused for the assignment of the passwordLength
  doubleCheckFailed = true;
  //Confirming the assignment of a value to passwordLength and making sure that the user
  //selected a value that is at least between 8-128 characters in length.
  while(doubleCheckFailed) {
    
    passwordLength = window.prompt("How long do you want your password to be? Choose a number in the range of 8-128.");
    passwordLength = parseInt(passwordLength, 10);
    
    if (passwordLength >= 8 && passwordLength <= 128) {
      doubleCheckFailed = false;
    } else {
      window.alert("Inproper input detected! please enter a number in the range of 8-128.");
    }

  }

  //Genereates a password based on passwordLength and the characters accepted by the user
  for (var i = 0; i < passwordLength; i++) {
    password += randomCharacterGenerator(canLowerCase, canUpperCase, canNumeric, canSymbol);
  }

  return password;
};

//This function takes in arguements the user has already assigned to determine what
//characters should be generated. It then uses ASCII indexes as the method to return
//a character to be added to the password in the generate password function.
function randomCharacterGenerator (canLowerCase, canUpperCase, canNumeric, canSymbol) {
  var numberHasNotBeenSelected = true;
  var randomNumber = 0;
  while (numberHasNotBeenSelected) {
    randomNumber = Math.floor(Math.random() * 95) + 32;
    if (canLowerCase && randomNumber >= 97 && randomNumber <= 122) {
      return String.fromCharCode(randomNumber);
    } else if (canUpperCase && randomNumber >= 65 && randomNumber <= 90) {
      return String.fromCharCode(randomNumber);
    } else if (canNumeric && randomNumber >= 48 && randomNumber <= 57) {
      return String.fromCharCode(randomNumber);
    } else if (canSymbol && ((randomNumber >= 32 && randomNumber <= 47)||(randomNumber >= 58 && randomNumber <= 64)||(randomNumber >= 91 && randomNumber <= 96)||(randomNumber >= 123 && randomNumber <= 126))){
      return String.fromCharCode(randomNumber);
    } else {
      //this else statement though redundant helps with legibility.
      numberHasNotBeenSelected = true;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
