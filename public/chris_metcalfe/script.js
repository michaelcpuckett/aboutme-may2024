// addEventListener("load", ... );
// saveAsFile("myQuestions.json", myQuestions);
// exit;

// Main
{
  let selectedQuestions = [];
  let gamePage;

  // Nav Buttons - I know this is a bad idea, but I was playing with buttons and it just happened.
  {
    document
      .getElementById("PowerButton")
      .addEventListener("click", function () {
        console.log("PowerButton Clicked");
        ToggleDisplayFlex("Main");
        ToggleDisplayFlex("AboutMeButton");
        ToggleDisplayFlex("GameButton");
        ToggleDisplayFlex("ContactButton");
        ToggleDisplayFlex("WeatherKittyWidget");
      });
    document
      .getElementById("AboutMeButton")
      .addEventListener("click", function () {
        console.log("About Me Clicked");
        document.getElementById("Main").style.display = "flex";
        document.getElementById("AboutMe").style.display = "flex";
        document.getElementById("Game").style.display = "none";
        document.getElementById("ContactMe").style.display = "none";
      });
    document
      .getElementById("GameButton")
      .addEventListener("click", function () {
        console.log("Game Clicked");
        document.getElementById("Main").style.display = "flex";
        document.getElementById("AboutMe").style.display = "none";
        document.getElementById("Game").style.display = "flex";
        document.getElementById("ContactMe").style.display = "none";
      });
    document
      .getElementById("ContactButton")
      .addEventListener("click", function () {
        console.log("Game Clicked");
        document.getElementById("Main").style.display = "flex";
        document.getElementById("AboutMe").style.display = "none";
        document.getElementById("Game").style.display = "none";
        document.getElementById("ContactMe").style.display = "flex";
      });
  }
  // Game Buttons
  {
    document
      .getElementById("GameSubmitButton")
      .addEventListener("click", function () {
        console.log("GameSubmitButton Clicked");
        let score = 0;
        let total = selectedQuestions.length;

        for (let i = 0; i < selectedQuestions.length; i++) {
          let question = selectedQuestions[i];
          question.htmlElement
            .querySelector(".Answer")
            .classList.remove("hidden");
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
        selectedQuestions = ShuffledQuestions(myQuestions);
        ListQuestions("ListOfQuestions", selectedQuestions);
        delete gamePage;
        gamePage = new GamePage(selectedQuestions);
      });
  }

  // console.log('JavaCat writes "Hello World!"');
  // DemoMessage('PS: JavaCat says "Hello World!"');

  WeatherKitty();

  selectedQuestions = ShuffledQuestions(myQuestions);
  ListQuestions("ListOfQuestions", selectedQuestions);
  gamePage = new GamePage(selectedQuestions);
  // document.getElementById("GameButton").click(); // For easy debugging and testing of the game.
}

/* 
  FUNCTIONS ...
*/

function ShuffledQuestions(questions) {
  // https://lodash.com/
  // https://www.geeksforgeeks.org/lodash-_-shuffle-method/
  questions = _.shuffle(questions);

  let questionsTrue = questions.filter((q) => q.isTrue);
  let questionsFalse = questions.filter((q) => !q.isTrue);
  let questionsMixed = [];
  let questionsTrio = [];
  for (let i = 0; i < 3; i++) {
    questionsTrio = [];
    questionsTrio.push(questionsFalse.pop());
    questionsTrio.push(questionsTrue.pop());
    questionsTrio.push(questionsTrue.pop());
    questionsTrio = _.shuffle(questionsTrio);
    questionsMixed = questionsMixed.concat(questionsTrio);
  }
  return questionsMixed;
}
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
