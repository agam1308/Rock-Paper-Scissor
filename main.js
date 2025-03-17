console.log("ROCK PAPER SCISSORS");

const cpuChoice = ["rock", "paper", "scissor"];

const buttons = document.querySelectorAll(".player > img");
const userImage = document.querySelector(".user-choice");
const cpuImage = document.querySelector(".cpu-choice");
const message = document.querySelector(".winner");
const userScoreM = document.querySelector(".user-score");
const cpuScoreM = document.querySelector(".cpu-score");

let userScore = 0;
let cpuScore = 0;

let userChoice = "";
console.log(buttons);
buttons.forEach((button) => {
  console.log(button.src);
  button.addEventListener("click", () => {
    if (button.src.includes("rock")) {
      userChoice = "rock";
    } else if (button.src.includes("paper")) {
      userChoice = "paper";
    } else {
      userChoice = "scissor";
    }
    userImage.src = button.src;
    checkWinner();
  });
});

const checkWinner = () => {
  let randomIndex = Math.floor(Math.random() * cpuChoice.length);

  const cpu = cpuChoice[randomIndex];

  cpuImage.src = `${cpu}.png`;
  const option = userChoice + cpu;
  console.log(cpuImage.src);
  console.log(option);

  switch (option) {
    case "rockscissor":
    case "scissorpaper":
    case "paperrock":
      message.innerText = "USER WIN";
      userScore++;
      userScoreM.innerText = userScore;
      break;

    case "rockrock":
    case "scissorscissor":
    case "paperpaper":
      message.innerText = "DRAW";
      break;

    case "scissorrock":
    case "paperscissor":
    case "rockpaper":
      message.innerText = "LOSE";
      cpuScore++;
      cpuScoreM.innerText = cpuScore;
      break;

    default:
      message.innerText = "ERROR";
  }
};
