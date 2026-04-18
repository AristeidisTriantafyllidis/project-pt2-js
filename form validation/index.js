const name = document.getElementById("name");
const submit = document.getElementById("submit");
const display = document.getElementById("display");
const email = document.getElementById("email");


submit.addEventListener("click",() =>{
const checkerEmail= email.value;
    const textName=name.value;

if (isNaN(textName) && checkerEmail!=="" ){

    display.textContent="Your form sumbited";
}
else{

    display.textContent="FAILED";
}




})
//maybe regex for debug?