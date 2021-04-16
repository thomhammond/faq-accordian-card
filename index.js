this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      console.log(question);
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("active")
        );
        question.parentNode.classList.add("active");
      }
    })
  );
});
