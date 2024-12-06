let gridContainer = document.querySelector(".grid-container");
let btnContainer = document.querySelector(".btn-container");

//grid button based on user input

let createGridBtn = document.createElement("button");
createGridBtn.textContent = "Create a New Grid";
btnContainer.appendChild(createGridBtn);


//creating a 16x16 grid

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.classList.add("columnDiv");
    gridContainer.appendChild(column);
    
    for (let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        row.classList.add("rowDiv");
        column.appendChild(row);
    }
}

//square color change

let squares = document.querySelectorAll(".rowDiv");
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "grey";
    });
});