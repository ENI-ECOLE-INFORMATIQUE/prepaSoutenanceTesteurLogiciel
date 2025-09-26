import quiz from './questions.js';
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

/**
 * Fonction utilitaire pour mélanger un tableau
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showExplanation(null);
        }
    }, 1000);
}

function showQuestion(index) {
    const q = quiz[index];

    // Créer un tableau d'objets { text, isCorrect }
    let answers = q.answers.map((answer, i) => ({
        text: answer,
        isCorrect: i === q.correct
    }));

    // Mélanger les réponses
    answers = shuffleArray(answers);

    // Afficher la question
    document.getElementById("question").textContent = q.question;

    // Réinitialiser les réponses
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    // Générer les boutons
    answers.forEach((answerObj, i) => {
        const btn = document.createElement("button");
        btn.textContent = answerObj.text;
        btn.onclick = () => showExplanation(i, answers);
        answersDiv.appendChild(btn);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("prevBtn").disabled = index === 0;
    document.getElementById("nextBtn").disabled = true;
    startTimer();
}

function showExplanation(selected, answersShuffled) {
    clearInterval(timer);
    const q = quiz[currentQuestion];
    const feedbackDiv = document.getElementById("feedback");
    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (answersShuffled[i].isCorrect) btn.style.backgroundColor = "#4CAF50";
        if (i === selected && !answersShuffled[i].isCorrect) btn.style.backgroundColor = "#f44336";
    });

    if (selected !== null && answersShuffled[selected].isCorrect) {
        score++;
        feedbackDiv.textContent = "✅ Bonne réponse ! " + q.explanation;
    } else if (selected === null) {
        feedbackDiv.textContent = "⏰ Temps écoulé ! " + q.explanation;
    } else {
        feedbackDiv.textContent = "❌ Mauvaise réponse. " + q.explanation;
    }
    document.getElementById("nextBtn").disabled = false;
}

function showResult() {
    const percent = Math.round((score / quiz.length) * 100);
    let message = "Pas mal, mais tu peux mieux faire 💪";
    if (percent === 100) message = "Parfait ! Tu es prêt(e) pour la soutenance 🎉";
    else if (percent >= 70) message = "Très bien ! Tu maîtrises bien le sujet 👍";
    
    document.getElementById("quizContainer").innerHTML = `
        <div class="result">
            <h2>Quiz terminé 🎯</h2>
            <p>Score : ${score}/${quiz.length} (${percent}%)</p>
            <p>${message}</p>
            <button onclick="restartQuiz()">🔄 Recommencer</button>
        </div>
    `;
}

function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("quizContainer").innerHTML = `
        <h1>Quiz Soutenance - Testeurs Logiciels</h1>
        <div class="timer">⏱ Temps restant : <span id="time">30</span> sec</div>
        <div class="question" id="question"></div>
        <div class="answers" id="answers"></div>
        <div class="feedback" id="feedback"></div>
        <div class="nav-buttons">
            <button id="prevBtn" disabled>⬅ Question précédente</button>
            <button id="nextBtn" disabled>Question suivante ➡</button>
        </div>
    `;
    addNavEvents();
    showQuestion(currentQuestion);
}

function addNavEvents() {
    document.getElementById("prevBtn").onclick = () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    };
    document.getElementById("nextBtn").onclick = () => {
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            showResult();
        }
    };
}

// Initialisation
addNavEvents();
showQuestion(currentQuestion);
