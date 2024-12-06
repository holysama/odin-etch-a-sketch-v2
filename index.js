//creating a 16x16 grid

let flexContainer = document.querySelector(".flex-container");

for (let i = 0; i < 16; i++) {
    let column = document.createElement("div");
    column.classList.add("columnDiv");
    flexContainer.appendChild(column);
    
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