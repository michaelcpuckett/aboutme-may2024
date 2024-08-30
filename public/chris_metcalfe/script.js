// addEventListener("load", ... );

console.log('JavaCat writes "Hello World!"');
// DemoMessage('PS: JavaCat says "Hello World!"');

// saveAsFile("myQuestions.json", myQuestions);
// exit;

document.getElementById("PowerButton").addEventListener("click", function () {
  console.log("PowerButton Clicked");
  ToggleDisplayFlex("Main");
  ToggleDisplayFlex("AboutMeButton");
  ToggleDisplayFlex("GameButton");
  ToggleDisplayFlex("ContactButton");
  ToggleDisplayFlex("WeatherKittyWidget");
});

document.getElementById("AboutMeButton").addEventListener("click", function () {
  console.log("About Me Clicked");
  document.getElementById("Main").style.display = "flex";
  document.getElementById("AboutMe").style.display = "flex";
  document.getElementById("Game").style.display = "none";
  document.getElementById("ContactMe").style.display = "none";
});

document.getElementById("GameButton").addEventListener("click", function () {
  console.log("Game Clicked");
  document.getElementById("Main").style.display = "flex";
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Game").style.display = "flex";
  document.getElementById("ContactMe").style.display = "none";
});

document.getElementById("ContactButton").addEventListener("click", function () {
  console.log("Game Clicked");
  document.getElementById("Main").style.display = "flex";
  document.getElementById("AboutMe").style.display = "none";
  document.getElementById("Game").style.display = "none";
  document.getElementById("ContactMe").style.display = "flex";
});

document
  .getElementById("GameSubmitButton")
  .addEventListener("click", function () {
    console.log("GameSubmitButton Clicked");
    let score = 0;
    let total = myQuestions.length;

    for (let i = 0; i < myQuestions.length; i++) {
      let question = myQuestions[i];
      question.htmlElement.querySelector(".Answer").classList.remove("hidden");
      if (question.isTrue) {
        if (document.getElementById(`QA${i}T`).checked) {
          question.htmlElement.classList.remove("WrongIsTrue");
          score++;
        } else {
          question.htmlElement.classList.add("WrongIsTrue");
        }
      } else {
        if (document.getElementById(`QA${i}F`).checked) {
          question.htmlElement.classList.remove("WrongIsFalse");
          score++;
        } else {
          question.htmlElement.classList.add("WrongIsFalse");
        }
      }
    }
    console.log(`You scored ${score} out of ${total}`);
    alert(`You scored ${score} out of ${total}`);
  });

document
  .getElementById("GameResetButton")
  .addEventListener("click", function () {
    console.log("GameResetButton Clicked");
    for (let i = 0; i < myQuestions.length; i++) {
      let question = myQuestions[i];
      question.htmlElement.querySelector(".Answer").classList.add("hidden");
      question.htmlElement.classList.remove("Wrong");
      question.htmlElement.classList.remove("WrongIsTrue");
      question.htmlElement.classList.remove("WrongIsFalse");
      document.getElementById(`QA${i}T`).checked = false;
      document.getElementById(`QA${i}F`).checked = false;
    }
    myQuestions = _.shuffle(myQuestions);
    ListQuestions("ListOfQuestions", myQuestions);
  });

// https://lodash.com/
// https://www.geeksforgeeks.org/lodash-_-shuffle-method/
myQuestions = _.shuffle(myQuestions);
ListQuestions("ListOfQuestions", myQuestions);
// document.getElementById("ContactButton").click();

// <--- *** HERE *** --->

/* 
  FUNCTIONS ...
*/

function ToggleDisplayFlex(elementIdName) {
  let element = document.getElementById(elementIdName);
  let displayValue = element.style.display;
  if (displayValue === "")
    displayValue = window.getComputedStyle(element).display;

  // console.log(`ToggleDisplayFlex: ${elementIdName} =/= ${displayValue}`);
  if (displayValue === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

function ListQuestions(elementIdName, questions) {
  let element = document.getElementById(elementIdName);
  let html = "";
  element.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    let li = document.createElement("li");
    let fieldset = document.createElement("fieldset");
    let labelTrue = document.createElement("label");
    let inputTrue = document.createElement("input");
    let labelFalse = document.createElement("label");
    let inputFalse = document.createElement("input");
    let questionAnswerPair = document.createElement("div");
    let question = document.createElement("p");
    let answer = document.createElement("p");

    li.className = "QuestionStructure";

    fieldset.className = "Radio";
    inputTrue.type = "radio";
    inputTrue.name = `QA${i}`;
    inputTrue.value = "true";
    inputTrue.id = `QA${i}T`;

    inputFalse.type = "radio";
    inputFalse.name = `QA${i}`;
    inputFalse.value = "false";
    inputFalse.id = `QA${i}F`;

    labelTrue.appendChild(inputTrue);
    labelTrue.appendChild(document.createTextNode("True"));
    labelFalse.appendChild(inputFalse);
    labelFalse.appendChild(document.createTextNode("False"));
    fieldset.appendChild(labelTrue);
    fieldset.appendChild(labelFalse);
    li.appendChild(fieldset);

    questionAnswerPair.className = "QuestionAnswerPair";
    question.className = "Question";
    question.innerHTML = questions[i].question;
    answer.classList = "Answer hidden";
    if (questions[i].isTrue) {
      answer.classList.add("True");
      answer.innerHTML = `TRUE: ${questions[i].answer}`;
    } else {
      answer.classList.add("False");
      answer.innerHTML = `FALSE: ${questions[i].answer}`;
    }

    questionAnswerPair.appendChild(question);
    questionAnswerPair.appendChild(answer);
    li.appendChild(questionAnswerPair);

    questions[i].htmlElement = li;
    element.appendChild(li);
  }
}
