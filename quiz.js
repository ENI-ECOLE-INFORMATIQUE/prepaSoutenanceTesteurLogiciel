let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

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
    document.getElementById("question").textContent = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.answers.forEach((answer, i) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => showExplanation(i);
        answersDiv.appendChild(btn);
    });
    document.getElementById("feedback").textContent = "";
    document.getElementById("prevBtn").disabled = index === 0;
    document.getElementById("nextBtn").disabled = true;
    startTimer();
}

function showExplanation(selected) {
    clearInterval(timer);
    const q = quiz[currentQuestion];
    const feedbackDiv = document.getElementById("feedback");
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.style.backgroundColor = "#4CAF50";
        if (i === selected && selected !== q.correct) btn.style.backgroundColor = "#f44336";
    });

    if (selected === q.correct) {
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
