# About Me Project

- Create a new folder in `public/` with your name, in the format: `firstname_lastname`
- Create an `index.html` file in the folder
- Create an `styles.css` file in the folder
- In `index.html`:
  - Needs a `<link>` tag in the `<head>` referencing the `styles.css` file.
  - Add at least a `<main>` tag
    - Should contain a `<h1>` tag with your name
    - Should contain a `<p>` tag with a short description of yourself
    - Should contain a `<ul>` tag with at least 3 `<li>` tags with your hobbies
- In `styles.css`:
  - Add fonts, colors, etc. to style the blank HTML page.
- Create a `script.js` file in the folder
- Add a `<script>` tag at the end of the `<body>` in `index.html` referencing the `script.js` file.
- In `script.js`:
  - Add a `console.log` statement with a message about yourself

## Phase Two

Build a JavaScript quiz game called "Two Truths and a Lie" with 5-10 questions that act like a little trivia game about yourself. It should generate a score at the end.

You will need to plan out how the game will operate, but consider the following:

- building a form with radio buttons in html and css
- accessing the form data in javascript
- looping over and checking for correctness of each answer
- generating the total score (or category corresponding to a score)
- showing the real answers at the end of the quiz
