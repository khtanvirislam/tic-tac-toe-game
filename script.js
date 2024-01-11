let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let winMsg = document.getElementById("winning-msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = turnO;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = " X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  winMsg.innerText = `Congratulations! winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let winPattern of winPatterns) {
    let post1val = boxes[winPattern[0]].innerText;
    let post2val = boxes[winPattern[1]].innerText;
    let post3val = boxes[winPattern[2]].innerText;

    if (post1val != "" && post2val != "" && post3val != "") {
      if (post1val === post2val && post2val === post3val) {
        showWinner(post1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
