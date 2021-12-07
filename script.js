// Assignment Code
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
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

  characters.push(lowercase[0]);
  characters.push(uppercase[3]);
  characters.push(specialcharacters[5]);
  console.log(characters);
  

  var promptLength = window.prompt('How many characters would you like in your password? Please enter a number between 8 and 128.');
 
  var promptLowercase = window.prompt('Would you like Lowercase letters in your password? Enter "YES" or "NO", to choose "yes" or "no".');
  
  var getLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
  if (promptLowercase === "YES") {
    for (var i = 8; i < (math.ceil(promptLength / 128)); i++) {
      console.log(getLowercase[i]);
    }
  }


  var promptUppercase = window.prompt('Would you like Uppercase letters in your password? Enter "YES" or "NO", to choose "yes" or "no".');

  
  var getUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
  if (promptUppercase === "YES") {
    for (var i = 8; i < (math.ceil(promptLength / 128)); i++) {
      console.log(getUppercase[i]);
    }
  }

  var promptSpecialcharacters = window.prompt('Would you like special characters in your password? Enter "YES or "NO", to choose "yes" or "no".'); 
    console.log(characters.push(2));
  
  
  var getSpecialcharacters = specialcharacters[Math.floor(Math.random() * specialcharacters.length)];
  if (promptSpecialcharacters === "YES") {
    for (var i = 8; i < (math.ceil(promptLength / 128)); i++) {
      console.log(getSpecialcharacters[i]);
    }
  }
  // [1,2,3] ==> "123"
  return characters.join('');
};










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);