const addButton = document.getElementById("addItemButton");
const inputField = document.getElementById("newItemInput");
const uL =document.getElementById("uL");
const listArray = [];

addButton.addEventListener('click', ()=>{
    uL.innerHTML += `<li>${inputField.value}</li>`;
    // listArray.push(inputField.value);
    // for (const item of listArray) {
    //     uL.innerHTML += `<li>${item}</li>`;
    // }
    inputField.value = "";
});