import { generatePassword } from "./generatePassword.js";

const numLengthInput = document.getElementById("number");
const numLengthSlider = document.getElementById("slider");
const passwordShow = document.getElementById("password");
const specialCheck = document.getElementById("special");
const upperCheck = document.getElementById("uppercase");
const lowerCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("numbers");


const writePassword = () => {
  let num = parseInt(numLengthInput.value);
  if (num < 8 || num > 128) {
    passwordShow.value = "";
  } else {
    if (numLengthInput.value === "") {
      passwordShow.innerHTML = "";
      return;
    }
    let password = generatePassword(
      num,
      specialCheck.checked,
      upperCheck.checked,
      lowerCheck.checked,
      numberCheck.checked
    );
    passwordShow.value = password;
  }
}
numLengthInput.addEventListener("input", (e) => {
  numLengthSlider.value = e.target.value;
  writePassword();

});
numLengthSlider.addEventListener("input", (e)=>{
  numLengthInput.value = e.target.value
  writePassword();

})
specialCheck.addEventListener("click", writePassword);
upperCheck.addEventListener("click", writePassword);
lowerCheck.addEventListener("click", writePassword);
numberCheck.addEventListener("click", writePassword);


var generateBtn = document.querySelector("#generate");
function showPasswordOptions() {
  const passwordSelectors = document.getElementById('password-selectors');
  generateBtn.style.visibility = 'hidden';
  passwordSelectors.style.visibility = "visible"
  writePassword();

}

generateBtn.addEventListener("click", showPasswordOptions);
