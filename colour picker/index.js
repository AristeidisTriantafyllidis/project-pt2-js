colorPicked = document.querySelector(".colors");
displayBox = document.getElementById("display");




colorPicked.addEventListener("click", () => {

    const color = colorPicked.value;
  
    if (color === "red") {
        displayBox.style.backgroundColor = "red";

    }
    else if (color === "blue") {
        displayBox.style.backgroundColor = "blue";
    }
    else if (color === "black") {
        displayBox.style.backgroundColor = "black";
    }

    else if (color === "orange") {
        displayBox.style.backgroundColor = "orange";
    }
    else {
        displayBox.style.backgroundColor = "white";
    }

})