const text = document.getElementById("text");
const wordCounter = document.getElementById("counter");

text.addEventListener("input",()=> {

let counter = text.value.length;



if (counter < 5){

    wordCounter.textContent= counter + " /5";
    text.style.color='black';
}
else{

wordCounter.textContent= counter + " /5";
text.style.color='red';

}




})