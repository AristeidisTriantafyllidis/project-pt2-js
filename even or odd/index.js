const numberGiven = document.querySelector("#text");
const checkBtn = document.querySelector("#checkBtn");
const display = document.querySelector("#display");



checkBtn.addEventListener("click",() => {

const number = numberGiven.value;
if (number%2==0){
    display.textContent = number + " is even";
    
}
else{
    display.textContent = number + "  is odd";
}




numberGiven.value="";
})
