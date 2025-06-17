let boxes = document.querySelectorAll(".box");
let resett = document.querySelector(".reset");
let ng = document.querySelector("#bn");
let mg = document.querySelector(".hide");




resett.style.backgroundColor = "yellow";



let turnO = true;
let arr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
// resett.style.backgroundColor = "red";
let counter =0;

boxes.forEach((b) => {
    b.addEventListener("click", () => {
        if (turnO) {
            b.innerText = "O";
            turnO = false;
            counter++;
        } else {
            b.innerText = "X";
            turnO = true;
            counter++;
        }
        b.disabled = true;
        checkWinner();
    });
});

const showmsg = (v) => {
    console.log(`Winner is player ${v}`);
    mg.classList.remove("hide");
};

const newgame = () => {
    turnO = true;
    enabld();
};

const disabld = () => {
    for (let bb of boxes) {
        bb.disabled = true;
    }
};

const enabld = () => {
    console.log("reset ho gaya ");
    for (let bb of boxes) {
        bb.disabled = false;
        bb.innerText = "";
    }
    mg.classList.add("hide");
};

const checkWinner = () => {
    for (let pattern of arr) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                disabld();
                showmsg(val1);
            }
            else if  (counter==9 &&(val1 != val2 || val2 != val3  || val1 !=val3))
            {
                console.log("draw");
            }

        }
    }
};

resett.addEventListener("click", enabld);
ng.addEventListener("click", newgame);
