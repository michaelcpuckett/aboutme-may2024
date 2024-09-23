async function LoadQuestions() {
  const response = await fetch("files/myQuestions.json");
  const data = await response.json();
  return data;
}
