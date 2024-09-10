// define a class
class Question {
  // define a constructor inside class
  constructor(isTrue, question, answer) {
    this.isTrue = isTrue; // attribute isTrue
    this.question = question; // attribute Question
    this.answer = answer; // attribute Answer
    this.htmlElement = null; // attribute object
  }

  toString() {
    console.log(`${this.question}\n   ${this.isTrue}: ${this.answer}`);
  }
}

class GamePage {
  constructor(Questions) {
    this.questions = Questions;
    this.page = 0;
    this.score = 0;

    this.DrawPage();
  }

  DrawPage() {
    let question;

    let gameTitle = document.getElementById("GameTitle");
    let gameSubTitle = document.getElementById("GameSubTitle");
    gameTitle.innerText = "Two Truths and a Lie";
    // gameSubTitle.innerText = "Can you spot the lie?";
    gameSubTitle.style.opacity = 1;

    for (question of this.questions) {
      question.htmlElement.classList.add("hidden");
    }
    let base = this.page * 3;
    for (let i = base; i < base + 3; i++) {
      question = this.questions[i];
      question.htmlElement.classList.remove("WrongIsTrue");
      question.htmlElement.classList.remove("WrongIsFalse");
      question.htmlElement.classList.remove("Wrong");
      question.htmlElement.classList.remove("hidden");
    }

    let submitButton = document.getElementById("GameSubmitButton");

    submitButton.type = "button";
    submitButton = this.RemoveAllEventListeners(submitButton);

    if (this.page <= 2) {
      submitButton.style.opacity = 1;
      submitButton.innerText = "Submit";
      submitButton.addEventListener("click", () => {
        this.Submit();
      });
    } else if (this.page > 2) {
      submitButton.innerText = "Error [50]";
      throw new Error("Error [50] page number is too high");
    }
  }

  Submit() {
    // Visual Feedback
    let base = this.page * 3;
    for (let i = base; i < base + 3; i++) {
      let question = this.questions[i];
      question.htmlElement.querySelector(".Answer").classList.remove("hidden");
      if (question.isTrue) {
        if (document.getElementById(`QA${i}T`).checked) {
          question.htmlElement.classList.remove("WrongIsTrue");
          this.score++;
        } else {
          question.htmlElement.classList.add("WrongIsTrue");
        }
      } else {
        if (document.getElementById(`QA${i}F`).checked) {
          question.htmlElement.classList.remove("WrongIsFalse");
          this.score++;
        } else {
          question.htmlElement.classList.add("WrongIsFalse");
        }
      }
    }
    // /Feedback

    let submitButton = document.getElementById("GameSubmitButton");
    submitButton = this.RemoveAllEventListeners(submitButton);
    if (this.page < 2) {
      submitButton.innerText = "Next";
      submitButton.addEventListener("click", () => {
        this.NextPage();
      });
    } else if (this.page == 2) {
      this.DisplayScore();
    }
  }

  DisplayScore() {
    let submitButton = document.getElementById("GameSubmitButton");
    let gameTitle = document.getElementById("GameTitle");
    let gameSubTitle = document.getElementById("GameSubTitle");

    submitButton.innerText = "Score";
    submitButton.addEventListener("click", () => {
      for (let question of this.questions) {
        question.htmlElement.classList.add("hidden");
      }
      console.log(
        `You got ${this.score} of ${
          this.questions.length
        } Correct for a Score of ${Math.round(
          (100 * this.score) / this.questions.length
        )}%`
      );

      gameTitle.innerText = `You got ${this.score} of ${this.questions.length} Correct for a Score of:`;

      gameSubTitle.innerText = `${Math.round(
        (100 * this.score) / this.questions.length
      )}%`;

      submitButton.style.opacity = 0;
      submitButton = RemoveAllEventListeners(submitButton);
    });
  }

  NextPage() {
    this.page++;
    this.DrawPage();
  }

  RemoveAllEventListeners(element) {
    let removedAllEventListeners = element.cloneNode(true);
    element.parentNode.replaceChild(removedAllEventListeners, element);
    return removedAllEventListeners;
  }
}
