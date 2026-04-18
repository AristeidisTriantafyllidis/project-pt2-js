const inputName = document.getElementById('text');
const btn = document.getElementById('btn');
const display = document.getElementById('console');


btn.addEventListener("click",()=>{

      const name = inputName.value;

   
        display.textContent = "Hello " + name + " ! Welcome to the site";



})