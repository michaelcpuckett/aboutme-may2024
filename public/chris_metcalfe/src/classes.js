// define a class
class Question {
  // define a constructor inside class
  constructor(isTrue, question, answer) {
    this.isTrue = isTrue; // attribute isTrue
    this.question = question; // attribute Question
    this.answer = answer; // attribute Answer
  }

  toString() {
    console.log(`${this.question}\n   ${this.isTrue}: ${this.answer}`);
  }
}
