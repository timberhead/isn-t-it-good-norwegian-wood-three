// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ",", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"]  // left out two special characters " and \   

var password = "";




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var passwordOptions = []

  var finalPassword = []

  console.log("I need a good password");

  var employeeChoice = prompt("enter length of your new password")

  console.log(employeeChoice);

  if (employeeChoice <= 7) {
    alert("your new password must be at least 8 characters in length");
    employeeChoice = prompt("enter length of your new password");
  }

  if (employeeChoice >= 129) {
    alert("your new password can be no more than 128 characters in length");
    employeeChoice = prompt("enter length of your new password");
  }


  var hasLowercase = confirm("select OK for lowercase characters in your new password")


  var hasUppercase = confirm("select OK for uppercase characters in your new password")


  var hasNumeric = confirm("select OK for numeric characters in your new password")


  var hasSpecial = confirm("select OK for special characters in your new password")




  if (hasLowercase === true) {
    passwordOptions = passwordOptions.concat(lowercaseCharacters)

  }

  if (hasUppercase === true) {
    passwordOptions = passwordOptions.concat(uppercaseCharacters)

  }

  if (hasNumeric === true) {
    passwordOptions = passwordOptions.concat(numericCharacters)

  }

  if (hasSpecial === true) {
    passwordOptions = passwordOptions.concat(specialCharacters)

  }

  console.log(passwordOptions)





  for (var i = 0; i < employeeChoice; i++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])

  }
  console.log(finalPassword);
  return finalPassword.join("")


};

