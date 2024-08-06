document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll('.box');
    let turnO = true;
    const winnerPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    const winnerDisplay = document.querySelector('#winner');
    // const drawDisplay = document.querySelector('#draw1');
    // const msg = document.querySelector('.draw');
    const msg1 = document.querySelector('.win');
    function checkWinner() {
        let board = Array.from(boxes).map(box => box.innerText);
        for (let pattern of winnerPattern) {
            let [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    function checkDraw() {
        return Array.from(boxes).every(box => box.innerText !== "");
    }

    function handleClick(box) {
        if (box.innerText === "" && !winnerDisplay.innerText) {
            box.innerText = turnO ? "O" : "X";
            turnO = !turnO;

            let winner = checkWinner();
            if (winner) {
                winnerDisplay.innerText = `Congratulation Winner is: ${winner}`;
                msg1.classList.remove("hide");
            } else if (checkDraw()) {
                winnerDisplay.innerText = "Match is Draw";
                msg1.classList.remove("hide");
            }
        }
    }

    function resetGame() {
        boxes.forEach(box => box.innerText = "");
        turnO = true;
        winnerDisplay.innerText = "";
    }

    boxes.forEach((box) => {
        box.addEventListener('click', () => handleClick(box));
    });

    document.querySelector('.reset1').addEventListener('click', resetGame);
    document.querySelector('.new1').addEventListener('click', resetGame);
});