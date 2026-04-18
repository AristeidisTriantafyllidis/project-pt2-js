const text = document.querySelector("#text");
const characters=document.querySelector("#characters");
text.addEventListener("input",()=> {
let userText=text.value;
let counter=userText.length
characters.textContent= "Characters : " + counter;

})