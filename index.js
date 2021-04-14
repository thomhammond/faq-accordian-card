var questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.onclick = () => {
    let answer = question.nextSibling.nextElementSibling;
    let qText = question.childNodes[1];
    let dropdown = question.childNodes[3];

    if (answer.style.display === "none") {
      answer.style.display = "block";
      qText.style.fontWeight = "700";
      qText.style.color = "hsl(238, 29%, 16%)";
      dropdown.style.transform = "rotate(180deg)";
    } else {
      answer.style.display = "none";
      qText.style.fontWeight = "400";
      qText.style.color = "hsl(237, 12%, 33%)";
      dropdown.style.transform = "rotate(0deg)";
    }
  };
});
