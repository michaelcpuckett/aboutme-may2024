const startGame = document.getElementById("start-game");
const navBtns = document.getElementById("pageNav");
const startBtn = document.getElementById("startBtn");
const questionsForm = document.getElementById("form");
const startCont = document.getElementById("start-container");


function hideElement() {
    navBtns.style.display = "none";
    questionsForm.style.display = "none";
}

hideElement();

startGame.addEventListener("click", function (e) {
    startCont.classList.remove("start-game");
    startBtn.style.display = "none";
    startBtn.classList.remove("btn-container");
    questionsForm.style.display = "flex";
    navBtns.style.display = "flex";

});