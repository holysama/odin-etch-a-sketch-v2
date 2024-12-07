let gridContainer = document.querySelector(".grid-container");
let btnContainer = document.querySelector(".btn-container");

createGrid(16);

//make a grid / grid button based on user input

function createGrid(gridNum) {
    gridContainer.innerHTML = "";

    const squareSize = 960 / gridNum;

    for (let i = 0; i < gridNum; i++) {
        let column = document.createElement("div");
        column.classList.add("columnDiv");
        gridContainer.appendChild(column);
        
        for (let j = 0; j < gridNum; j++) {
            let row = document.createElement("div");
            row.classList.add("rowDiv");

            row.style.width = `${squareSize}px`;
            row.style.height = `${squareSize}px`;
            column.appendChild(row);
        }
    }
    fixedColorChange()
}

function checkValue(value) {
    value = prompt("Enter the number of squares per side for the new grid (1-100):");
    
    if (value === null) {
        return;
    }

    value = Number(value);
    if (value >= 1 && value <= 100 && !isNaN(value)) {
        createGrid(value);
    }
    else {
        checkValue();
    }
}

let createGridBtn = document.createElement("button");
createGridBtn.textContent = "Create a New Grid";
createGridBtn.addEventListener("click", checkValue);
btnContainer.appendChild(createGridBtn);

//colors buttons

let fixedColorBtn = document.createElement("button");
fixedColorBtn.textContent = "Grey Color";
fixedColorBtn.addEventListener("click", fixedColorChange);
btnContainer.appendChild(fixedColorBtn);

let randomColorBtn = document.createElement("button");
randomColorBtn.textContent = "Random Color";
randomColorBtn.addEventListener("click", randomColorChange);
btnContainer.appendChild(randomColorBtn);


//creating a 16x16 grid

const squareSize = 960 / gridNum;

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.classList.add("columnDiv");
    gridContainer.appendChild(column);
    
    for (let j = 0; j < 16; j++) {
        let row = document.createElement("div");
        row.classList.add("rowDiv");
        row.style.width = `${squareSize}px`;
        row.style.height = `${squareSize}px`;
        column.appendChild(row);
    }
    fixedColorChange();
}

//square fixed color change function

function fixedColorChange() {
    let squares = document.querySelectorAll(".rowDiv"); 
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "grey";
        });
    });
}

//square random color change function

function randomColorChange() {
    let squares = document.querySelectorAll(".rowDiv"); 
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            square.style.backgroundColor = "#" + randomColor;
        });
    });
}

