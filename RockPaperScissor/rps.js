let win = 0, lose = 0, tie = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissor"];
  const com = choices[Math.floor(Math.random() * 3)];

  let result = "";
  let bgColor = "";

  if (userChoice === com) {
    result = "Game is Tie!";
    tie++;
    bgColor = "blue";
  } else if (
    (userChoice === "rock" && com === "scissor") ||
    (userChoice === "paper" && com === "rock") ||
    (userChoice === "scissor" && com === "paper")
  ) {
    result = "You Won the Game!";
    win++;
    bgColor = "green";
  } else {
    result = "Computer Won the Game!";
    lose++;
    bgColor = "red";
  }

  document.getElementById("para").innerText = result;
  document.getElementById("para").style.backgroundColor = bgColor;

  document.getElementById("user-move").innerText = "Your Move: " + userChoice;
  document.getElementById("comp-move").innerText = "Computer's Move: " + com;

  document.getElementById("us").innerText = win;
  document.getElementById("cs").innerText = lose;
}

function resetGame() {
  win = 0;
  lose = 0;
  tie = 0;

  document.getElementById("para").innerText = "Who Is Won?";
  document.getElementById("para").style.backgroundColor = "black";
  document.getElementById("user-move").innerText = "Your Move: -";
  document.getElementById("comp-move").innerText = "Computer's Move: -";
  document.getElementById("us").innerText = win;
  document.getElementById("cs").innerText = lose;
}

