var questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.onclick = () => {
    let index = Array.prototype.indexOf.call(questions, question);
    let answer = question.nextSibling.nextElementSibling;
    let qText = question.childNodes[1];
    let dropdown = question.childNodes[3];

    if (answer.style.display === "none" || answer.style.display === "") {
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

    // Close all unclicked dropdowns
    questions.forEach((q) => {
      if (Array.prototype.indexOf.call(questions, q) !== index) {
        let a = q.nextSibling.nextElementSibling;
        let qT = q.childNodes[1];
        let d = q.childNodes[3];

        a.style.display = "none";
        qT.style.fontWeight = "400";
        qT.style.color = "hsl(237, 12%, 33%)";
        d.style.transform = "rotate(0deg)";
      }
    });
  };
});
