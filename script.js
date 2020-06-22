//Password Length Answer Validated
var charAmountNum = prompt("How Many Characters Would You Like Your Password?", 12);
while (
  isNaN(charAmountNum) || 
      charAmountNum <8 || charAmountNum >128
)
{
alert ("invalid Parameter. Please try again");
var charAmountNum = prompt("How Many Characters Would You Like Your Password?", 12);
}
//Yes or No Questions & Unicode numbers
var uppercaseEl = confirm("[OK] To Include UpperCase Letters")
var numbersEl = confirm("[OK] To Include Numbers")
var symbolsEl = confirm("[OK] To Include Symbols")
var passwordDisplay = document.getElementById('passwordDisplay')
var upperCode = arrayFromLowToHigh(65, 90)
var lowerCode = arrayFromLowToHigh(97, 122)
var numCode = arrayFromLowToHigh(48, 57)
var symbCode = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
//the Maths
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowerCode
  if (includeUppercase) charCodes = charCodes.concat(upperCode)
  if (includeSymbols) charCodes = charCodes.concat(symbCode)
  if (includeNumbers) charCodes = charCodes.concat(numCode)
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
}
//Outputting to Screen
document.getElementById("generate").addEventListener('click', e => {
  var characterAmount = charAmountNum
  var upperCase = uppercaseEl
  var includeNumbers = numbersEl
  var includeSymbols = symbolsEl
  var passwordGen = generatePassword(characterAmount, upperCase, includeNumbers, includeSymbols)
  password.textContent = passwordGen
})

