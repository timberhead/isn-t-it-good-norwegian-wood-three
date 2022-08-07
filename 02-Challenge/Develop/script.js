// Assignment Code
var generateBtn = document.querySelector("#generate");

var values = ["lowercase characters", "uppercase characters", "numeric characters", "special characters"]

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ",", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"]  // left out two special characters " and \   

var minimumPasswordLength = [">=8"]
var maximumPasswordLength = ["<=128"]

var yes = true;
var no = false;

var password = "";




// Write password to the #password input    
function writePassword() {
   var password = generatePassword("lowercase characters, uppercase characters, numeric characters, special characters");
   var passwordText = document.querySelector("#password");
   console.log("???");

   Math.floor(Math.random() * 4)
   var generatePassword = values[Math.floor(Math.random() * values.length)]
   console.log(generatePassword)

   for (var i =0; i > minimumPasswordLength; i < maximumPasswordLength){

   }

   passwordText.value = password;

}

// Add event listener to generate button     
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  console.log("I need a good password");

  var employeeChoice = prompt("enter length of your new password")
  employeeChoice = employeeChoice.toUpperCase()
  console.log(employeeChoice);

  if(employeeChoice <= 7){
    alert("your new password must be at least 8 characters in length");
    return employeeChoice = prompt("enter length of your new password");
  }

  if(employeeChoice >= 129){
    alert("your new password can be no more than 128 characters in length");
    return employeeChoice = prompt("enter length of your new password");
  }


  var values = prompt("select lowercase characters for your new password")
  console.log(values);

  var values = prompt("select uppercase characters for your new password")
  console.log(values);

  var values = prompt("select numeric characters for your new password")
  console.log(values);

  var values = prompt("select special characters for your new password")
  console.log(values);


  // var password = generatePassword("lowercase characters, uppercase characters, numeric characters, special characters");
  // var passwordText = document.querySelector("#password");
  // console.log("???");

  // Math.floor(Math.random() * 4)
  // var generatePassword = values[Math.floor(Math.random() * values.length)]
  // console.log(generatePassword)

  // for (var i =0; i > minimumPasswordLength; i < maximumPasswordLength){

  // }



  if(lowercaseCharacters === yes){
    generatePassword.value = lowercase;
  }



  if(values === lowercaseCharacters){
    writePassword("passwordText.value")
    

  }

  if(values === uppercaseCharacters){

  }

  if(values === numericCharacters){

  }

     if(values === specialCharacters){

  }



return "generated password";  
return "testing password";

};

