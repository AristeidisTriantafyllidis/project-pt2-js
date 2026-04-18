const answers = document.getElementsByName("cities");
const submitBtn = document.getElementById("SubmitBtn");
const display = document.getElementById("display");
console.log(answers);

submitBtn.addEventListener("click", () => {
    let answer="";
    for (i = 0; i < answers.length; i++) {

        if (answers[i].checked) {


            answer = answers[i].value;
        }

        if (answer === "") {
            display.textContent = "Choose a capital";
            display.style.color="black";
        }

        else if (answer === "Paris") {

            display.textContent = "Correct !";
             display.style.color="green";
        }

        else {

            display.textContent = "Incorect. Try Again";
             display.style.color="red";

        }
    }
    })

//https://www.geeksforgeeks.org/javascript/how-to-get-value-of-selected-radio-button-using-javascript/