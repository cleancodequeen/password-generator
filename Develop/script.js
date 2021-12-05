// Assignment code here
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = upperCase.toLowerCase();
var number = '0123456789';
var symbol = "`~!@#$%^&*()-_+=\|]}[{'?.>,<;:"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt('Please enter password length');

  // if (passLength < 8 || passLength > 128) {
  //   alert('Please enter between 8 and 128 characters.');
  //   generatePassword();
  // }

  var ucPrompt = confirm('Include uppercase letters?');
  var lcPrompt = confirm('Include lowercase characters?');
  var numPrompt = confirm('Include numbers?');
  var symPrompt = confirm('Include symbols?');
  var passString = '';

  while (passString.length < passLength) {
    if (ucPrompt) {
      var randNum = Math.floor(Math.random() * upperCase.length);
      passString += upperCase.substring(randNum, randNum - 1);
     }
    
    if (lcPrompt) {
      var randLcNum = Math.floor(Math.random() * lowerCase.length);
      passString += lowerCase.substring(randLcNum, randLcNum - 1);
    }
    
    if (numPrompt) {
      var randomNum = Math.floor(Math.random() * number.length);
      passString += number.substring(randomNum, randomNum - 1);
    }
    
    if (symPrompt) {
      var randSymNum = Math.floor(Math.random() * symbol.length);
      passString += symbol.substring(randSymNum, randSymNum - 1);
    }

    return passString;

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
