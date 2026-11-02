
function nextQuestion() {
    if (!currentTopic) {
        document.getElementById("feedback").textContent =
            "Please choose a topic first.";
        return;
    }

    const answer = document.getElementById("answer").value.trim();

    if (answer === "") {
        document.getElementById("feedback").textContent =
            "Please write your answer before continuing.";
        return;
    }

    const questions = speakingQuestions[currentTopic];

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        document.getElementById("question").textContent =
            "🎉 You have completed this practice!";

        document.getElementById("answer").value = "";

        document.getElementById("feedback").textContent =
            "Great job! Keep practising to improve your English.";
    }
}