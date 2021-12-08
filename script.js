// Assignment Code
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialcharacters = ['!', '@', '#', '$', '&', '*', '+', '_'];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}









function generatePassword() {
  const characters = [];
  var password = "";

  

  var promptLength = window.prompt('How many characters would you like in your password? Please enter a number between 8 and 128.');
  if (promptLength < 8 || promptLength > 128) {
    alert("Please check to make sure the password is between 8 and 128 characters.");
    return;
  }

  var promptLowercase = window.confirm('Would you like Lowercase letters in your password? Enter "YES" or "NO", to choose "yes" or "no".');
  if (promptLowercase == true) {
    characters.push(...lowercase);
  }

  // My tutor showed me the spread syntax because we could not get concat to work
  var promptUppercase = window.confirm('Would you like Uppercase letters in your password? Enter "YES" or "NO", to choose "yes" or "no".');
  if (promptUppercase == true) {
    characters.push(...uppercase);
  }

  var promptSpecialcharacters = window.confirm('Would you like special characters in your password? Enter "YES" or "NO", to choose "yes" or "no".'); 
  if (promptSpecialcharacters == true) {
    characters.push(...specialcharacters);
  }
  
  var promptNumbers = window.confirm('Would you like numbers in your password? Enter "YES" or "NO, to choose "yes" or "no".');
  if (promptNumbers == true) {
    characters.push(...numbers);
  }
  
  
  for (var i = 0; i < promptLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password = password + characters [randomNumber];
  }
  return password;
};










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);