// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var promptLength = window.prompt('How many characters would you like in your password? Please enter a number between 8 and 128.');
}


var promptLowercase = window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO", to choose "yes" or "no".');

var Lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var getLowercase = lowercase[Math.floor(Math.random() * lowercase.length)]

if (promptLowercase === "YES") {
  for (var i = 0; i < (math.ceil(promptLength / 4)); i++) {
    console.log(getLowercase[i]);
  }
};

var promptUppercase = window.prompt('Would you like Uppercase letters in your password? Enter "YES or "NO". to choose "yes or "no".');

var Uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var getUppercase = uppercase[Math.floor(Math.random() * uppercase.length)]

if (promptUppercase === "YES") {
  for (var i = 0; i < (math.ceil(promptLength / 4)); i++) {
    console.log(getUppercase[i]);
  }
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);