function calculateResult() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const question = form[`q${i}`];
        if (question.value === 'yes') {
            score++;
        }
    }

    if (score >= 4) {
        resultDiv.innerHTML = "High risk of schizophrenia. Please consult a mental health professional.";
    } else if (score >= 2) {
        resultDiv.innerHTML = "Moderate risk of schizophrenia. Consider talking to a healthcare provider.";
    } else {
        resultDiv.innerHTML = "Low risk of schizophrenia.";
    }
}
