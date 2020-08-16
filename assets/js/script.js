// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
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
  while (doubleCheckFailed){
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
};
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
      numberHasNotBeenSelected = true;
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
