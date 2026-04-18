const btn = document.getElementById("btn");
const ulList = document.getElementById("list");
const MovieTitle = document.getElementById("text");
let counter=0;
btn.addEventListener("click",()=>{
counter++;
const newText=document.createElement("li");
newText.innerText= counter+". " +MovieTitle.value+"# movie "+counter+ " !";

ulList.appendChild(newText);


})