let game = ["stone", "paper", "scissor"];
let gameObject = {
  stone: { color: "#0074B6", url: "images/stone.png" },
  paper: { color: "#FFA943", url: "images/paper.png" },
  scissor: { color: "#BD00FF", url: "images/scissor.png" },
};
let userChoice = document.getElementsByClassName("play-game-user");

Object.values(userChoice).forEach((element) => {
  element.addEventListener("click", () => {
    let computerChoice = Math.floor(Math.random() * 3);
    let userSel = element.dataset.value;
    console.log(userSel, game[computerChoice]);
    let resultMessage = document.querySelector(".result-message h1");
    let resultMessage2 = document.querySelector(".result-message h2");
    let playAgainButton = document.querySelector(".btn-play-again");
    let rulesBtn = document.querySelector(".btn-rules-1");
    if (
      (userSel === "stone" && game[computerChoice] === "scissor") ||
      (userSel === "paper" && game[computerChoice] === "stone") ||
      (userSel === "scissor" && game[computerChoice] === "paper")
    ) {
      // Updating score borad of user.
      let userScore = document.querySelector(".your-score .score-count");
      userScore.innerText = Number(userScore.innerHTML) + 1;

      // Getting result section
      let resultSection = document.querySelector(".result-section");
      let playGameSection = document.querySelector(".play-game");
      playGameSection.style.visibility = "hidden";
      resultSection.style.visibility = "visible";

      //Setting color and icon.
      let pcResult = document.querySelector(".result-section .computer div");
      let userResult = document.querySelector(".result-section .user div");
      Object.keys(gameObject).forEach((key) => {
        if (key === userSel) {
          userResult.style["border-color"] = gameObject[key].color;
          userResult.style["animation"] = "mymove 2s infinite";
          document.querySelector(".result-section .user div img").src =
            gameObject[key].url;
        }
        if (key === game[computerChoice]) {
          pcResult.style["border-color"] = gameObject[key].color;
          pcResult.style.removeProperty("animation");
          document.querySelector(".result-section .computer div img").src =
            gameObject[key].url;
        }
      });

      //play again button
      playAgainButton.innerText = "play again";
      playAgainButton.addEventListener("click", () => {
        playGameSection.style.visibility = "visible";
        resultSection.style.visibility = "hidden";
        nextBtn.style.display = "none";
        rulesBtn.style.right = "";
      });

      //setting result message and button
      resultMessage.innerText = "you won";
      resultMessage2.innerText = "against pc";

      //adding next button.
      nextBtn.style.display = "inline-block";
      rulesBtn.style.right = "120px";
    } else if (userSel === game[computerChoice]) {
      // Getting result section
      let resultSection = document.querySelector(".result-section");
      let playGameSection = document.querySelector(".play-game");
      playGameSection.style.visibility = "hidden";
      resultSection.style.visibility = "visible";

      //Setting color and icon.
      let pcResult = document.querySelector(".result-section .computer div");
      let userResult = document.querySelector(".result-section .user div");
      Object.keys(gameObject).forEach((key) => {
        if (key === userSel) {
          userResult.style["border-color"] = gameObject[key].color;
          userResult.style.removeProperty("animation");
          document.querySelector(".result-section .user div img").src =
            gameObject[key].url;
        }
        if (key === game[computerChoice]) {
          pcResult.style["border-color"] = gameObject[key].color;
          pcResult.style.removeProperty("animation");
          document.querySelector(".result-section .computer div img").src =
            gameObject[key].url;
        }
      });

      //play again button
      playAgainButton.innerHTML = "Replay";
      playAgainButton.addEventListener("click", () => {
        playGameSection.style.visibility = "visible";
        resultSection.style.visibility = "hidden";
      });

      // Setting you lost message.
      resultMessage.innerText = "tie up";
      resultMessage2.innerText = "";

      //adding next button.
      nextBtn.style.display = "none";
      rulesBtn.style.right = "";
    } else {
      // Updating score borad of computer.
      let computerScore = document.querySelector(
        ".computer-score .score-count"
      );
      computerScore.innerText = Number(computerScore.innerHTML) + 1;

      // Getting result section
      let resultSection = document.querySelector(".result-section");
      let playGameSection = document.querySelector(".play-game");
      playGameSection.style.visibility = "hidden";
      resultSection.style.visibility = "visible";

      //Setting color and icon.
      let pcResult = document.querySelector(".result-section .computer div");
      let userResult = document.querySelector(".result-section .user div");
      Object.keys(gameObject).forEach((key) => {
        if (key === userSel) {
          userResult.style["border-color"] = gameObject[key].color;
          userResult.style.removeProperty("animation");
          document.querySelector(".result-section .user div img").src =
            gameObject[key].url;
        }
        if (key === game[computerChoice]) {
          pcResult.style["border-color"] = gameObject[key].color;
          pcResult.style["animation"] = "mymove 2s infinite";
          document.querySelector(".result-section .computer div img").src =
            gameObject[key].url;
        }
      });

      //play again button
      playAgainButton.innerText = "play again";
      playAgainButton.addEventListener("click", () => {
        playGameSection.style.visibility = "visible";
        resultSection.style.visibility = "hidden";
      });

      // Setting you lost message.
      resultMessage.innerText = "you lost";
      resultMessage2.innerText = "against pc";

      //adding next button.
      nextBtn.style.display = "none";
      rulesBtn.style.right = "";
    }
  });
});

// Logic for rules button.
let crossBtn = document.querySelector(".rules-box .img-2");
let rulesBtn = document.querySelector(".btn-rules-1");
let rulesBox = document.querySelector(".rules-box");
rulesBtn.addEventListener("click", () => {
  rulesBox.style["visibility"] = "unset";
});
crossBtn.addEventListener("click", () => {
  rulesBox.style["visibility"] = "hidden";
});

// When next button is clicked
let nextBtn = document.querySelector(".btn-rules-2");
let hurrySection = document.querySelector(".hurry-section");
let resultSection = document.querySelector(".result-section");
let scoreBoard = document.querySelector(".score-board");
let playGameSection = document.querySelector(".play-game");
nextBtn.addEventListener("click", () => {
  playGameSection.style.visibility = "hidden";
  resultSection.style.visibility = "hidden";
  scoreBoard.style.visibility = "hidden";
  hurrySection.style.visibility = "unset";
  nextBtn.style.display = "none";
  rulesBtn.style.right = "";
});

// For play again at hurry page.
let playAgainHurry = document.querySelector(".btn-play-again-2");
playAgainHurry.addEventListener("click", () => {
  playGameSection.style.visibility = "visible";
  scoreBoard.style.visibility = "visible";
  hurrySection.style.visibility = "hidden";
  nextBtn.style.display = "none";
  rulesBtn.style.right = "";
});
