document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".check-answer");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const questionId = this.dataset.question;
      const correct = this.dataset.correct;
      const selected = document.querySelector(
        `input[name="${questionId}"]:checked`
      );

      const feedback = document.getElementById(`${questionId}-feedback`);

      if (!selected) {
        feedback.textContent = "Please select an answer first.";
        feedback.style.color = "orange";
        return;
      }

      if (selected.value === correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Incorrect.";
        feedback.style.color = "red";
      }
    });
  });
});
