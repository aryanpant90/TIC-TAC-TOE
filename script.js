console.log("hello")

let boxes = document.querySelectorAll(".boxes")

let turn = true

let winner = document.querySelector("h1")

let count = 0;

let newgame = document.querySelector(".new")


const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O"
            turn = false
        }
        else {
            box.innerText = "X"
            turn = true;
        }
        count++
        box.disabled = true;
        check()
    })
})

const reset = () => {
    count = 0;
    turn  = true;
    winner.innerText = "TIC TAC TOE"
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false
    })
}


const check = () => {
    for (let i of patterns) {
        let pos1 = boxes[i[0]].innerText
        let pos2 = boxes[i[1]].innerText
        let pos3 = boxes[i[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                winner.innerText = "Winner is " + pos1;
                boxes.forEach((box) => {
                    box.disabled=true;
                })
            }
        }

        if(count == 9){
            winner.innerText = "Play Again"
        }
    }


}

newgame.addEventListener("click",reset)