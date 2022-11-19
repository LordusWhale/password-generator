import {
  savePassword,
  getPasswords,
  removeAllPaswords,
  removeSinglePassword
} from "./savePasswordLS.js";
const savePasswordBtn = document.getElementById("save");
const mainContainer = document.getElementById("saved-container");
const passwordContainer = document.getElementById("password-container");
const showPasswords = document.getElementById("show");
const passwordList = document.getElementById("password-list");
const closeShowPasswordContainer = document.getElementById("close");
closeShowPasswordContainer.addEventListener("click", (e) => {
  mainContainer.style.display = "none";
});
showPasswords.addEventListener("click", () => {
  mainContainer.style.display = "flex";
  passwordList.innerHTML = "";
  const savedPasswordLocalStorage = getPasswords();
  savedPasswordLocalStorage.forEach((password) => {
    createPasswordElement(password);
  });
});

savePasswordBtn.addEventListener("click", savePassword);


const createPasswordElement = (password) => {
    const newListItem = document.createElement("li");
    const newItemText = document.createElement('p');
    const container = document.createElement('div');
    newItemText.innerText = password;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    container.appendChild(newItemText);
    newListItem.appendChild(container)
    newListItem.appendChild(deleteButton);
  
    passwordList.appendChild(newListItem);
    deleteButton.addEventListener("click", () => {
      passwordList.removeChild(newListItem);
      removeSinglePassword(password);
    });
}