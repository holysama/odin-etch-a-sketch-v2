let gridContainer = document.querySelector(".grid-container");
let btnContainer = document.querySelector(".btn-container");

//make a grid / grid button based on user input

function createGrid(gridNum) {
    gridContainer.replaceChildren();
    for (let i = 0; i < gridNum; i++) {
        let column = document.createElement("div");
        column.classList.add("columnDiv");
        gridContainer.appendChild(column);
        
        for (let j = 0; j < gridNum; j++) {
            let row = document.createElement("div");
            row.classList.add("rowDiv");
            column.appendChild(row);
        }
    }
    fixedColorChange();
}

function checkValue(num) {
    if (num >= 1 && num <= 100 && !isNaN(num)) {
        createGrid(num);
    }
    else {
        getValuePrompt();
    }
}

function getValuePrompt() {
    let value = Number(prompt("Enter the number of squares per side for the new grid (1-100):"));
    checkValue(value);
}

let createGridBtn = document.createElement("button");
createGridBtn.textContent = "Create a New Grid";
createGridBtn.addEventListener("click", getValuePrompt);
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
    fixedColorChange();
}

//square fixed color change function

function fixedColorChange() {
    let squares = document.querySelectorAll(".rowDiv"); //have to make this a fucntion that i can recall
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "grey";
        });
    });
}