// quiz.js

// DOM Elements
const themeSelect = document.getElementById("themeSelect");
const levelSelect = document.getElementById("levelSelect");
const questionCountInput = document.getElementById("questionCount");
const startBtn = document.getElementById("startBtn");

const quizSetup = document.getElementById("quizSetup");
const quizStage = document.getElementById("quizStage");
const resultStage = document.getElementById("resultStage");

const questionText = document.getElementById("questionText");
const answersForm = document.getElementById("answersForm");
const explanationBox = document.getElementById("explanationBox");

const badgeTheme = document.getElementById("badgeTheme");
const badgeLevel = document.getElementById("badgeLevel");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prevBtn");
const validateBtn = document.getElementById("validateBtn");
const nextBtn = document.getElementById("nextBtn");

const scoreLine = document.getElementById("scoreLine");
const recapList = document.getElementById("recapList");

let allQuestions = [];     // toutes les questions filtrées
let currentIndex = 0;      // index de la question actuelle
let score = 0;             // score utilisateur
let userAnswers = {};      // réponses de l'utilisateur

// ----------------------------
// 1. Peupler les selects
// ----------------------------
function populateSelects() {
    console.log(questionData);
    console.log(quiz);
    if (typeof questionsData !== "object") {
        console.error("❌ questionsData est introuvable !");
        return;
    }

    // Thèmes
    const themes = Object.keys(questionsData);
    themeSelect.innerHTML = "<option value='all'>Tous les thèmes</option>";
    themes.forEach(theme => {
        let opt = document.createElement("option");
        opt.value = theme;
        opt.textContent = theme;
        themeSelect.appendChild(opt);
    });

    // Niveaux
    let levels = new Set();
    themes.forEach(theme => {
        questionsData[theme].forEach(q => {
            if (q.level) levels.add(q.level);
        });
    });
    levelSelect.innerHTML = "<option value='all'>Tous les niveaux</option>";
    levels.forEach(level => {
        let opt = document.createElement("option");
        opt.value = level;
        opt.textContent = level;
        levelSelect.appendChild(opt);
    });
}

// ----------------------------
// 2. Lancer le Quiz
// ----------------------------
function startQuiz() {
    const selectedTheme = themeSelect.value;
    const selectedLevel = levelSelect.value;
    const count = parseInt(questionCountInput.value, 10) || 10;

    // Filtrer les questions
    let questions = [];
    Object.entries(questionsData).forEach(([theme, list]) => {
        if (selectedTheme === "all" || selectedTheme === theme) {
            list.forEach(q => {
                if (selectedLevel === "all" || q.level === selectedLevel) {
                    questions.push({ ...q, theme });
                }
            });
        }
    });

    if (questions.length === 0) {
        alert("⚠ Aucun quiz disponible avec ces paramètres.");
        return;
    }

    // Mélanger et couper à la taille demandée
    allQuestions = shuffleArray(questions).slice(0, count);
    currentIndex = 0;
    score = 0;
    userAnswers = {};

    quizSetup.hidden = true;
    resultStage.hidden = true;
    quizStage.hidden = false;

    badgeTheme.textContent = selectedTheme === "all" ? "Tous les thèmes" : selectedTheme;
    badgeLevel.textContent = selectedLevel === "all" ? "Tous niveaux" : selectedLevel;

    showQuestion();
}

// ----------------------------
// 3. Afficher une question
// ----------------------------
function showQuestion() {
    const q = allQuestions[currentIndex];
    questionText.textContent = q.question;

    // réponses
    answersForm.innerHTML = "";
    q.answers.forEach((answer, i) => {
        const lbl = document.createElement("label");
        lbl.innerHTML = `
            <input type="radio" name="answer" value="${i}" 
                ${userAnswers[currentIndex] == i ? "checked" : ""}>
            ${answer}
        `;
        answersForm.appendChild(lbl);
    });

    explanationBox.hidden = true;

    progress.textContent = `Question ${currentIndex + 1} / ${allQuestions.length}`;

    // Boutons
    prevBtn.hidden = currentIndex === 0;
    nextBtn.hidden = true;
    validateBtn.hidden = false;
}

// ----------------------------
// 4. Valider la réponse
// ----------------------------
function validateAnswer() {
    const q = allQuestions[currentIndex];
    const selected = answersForm.querySelector("input[name='answer']:checked");

    if (!selected) {
        alert("⚠ Sélectionne une réponse !");
        return;
    }

    const answerIndex = parseInt(selected.value, 10);
    userAnswers[currentIndex] = answerIndex;

    if (answerIndex === q.correct) {
        score++;
        explanationBox.textContent = "✅ Bonne réponse !";
    } else {
        explanationBox.textContent = `❌ Mauvaise réponse. La bonne était : ${q.answers[q.correct]}`;
    }

    if (q.explanation) {
        explanationBox.textContent += "\n💡 " + q.explanation;
    }

    explanationBox.hidden = false;
    validateBtn.hidden = true;
    nextBtn.hidden = currentIndex === allQuestions.length - 1 ? true : false;

    if (currentIndex === allQuestions.length - 1) {
        // fin du quiz
        showResults();
    }
}

// ----------------------------
// 5. Navigation
// ----------------------------
function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentIndex < allQuestions.length - 1) {
        currentIndex++;
        showQuestion();
    }
}

// ----------------------------
// 6. Résultats
// ----------------------------
function showResults() {
    quizStage.hidden = true;
    resultStage.hidden = false;

    scoreLine.textContent = `Ton score : ${score} / ${allQuestions.length}`;

    recapList.innerHTML = "";
    allQuestions.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("recap-item");
        const userAns = userAnswers[i] !== undefined ? q.answers[userAnswers[i]] : "Non répondu";
        const correctAns = q.answers[q.correct];
        div.innerHTML = `
            <p><strong>Q${i + 1} :</strong> ${q.question}</p>
            <p>Ta réponse : ${userAns}</p>
            <p>Bonne réponse : ${correctAns}</p>
            ${q.explanation ? `<p class="muted">💡 ${q.explanation}</p>` : ""}
        `;
        recapList.appendChild(div);
    });
}

// ----------------------------
// 7. Utils
// ----------------------------
function shuffleArray(arr) {
    return arr
        .map(v => ({ v, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ v }) => v);
}

// ----------------------------
// 8. Event listeners
// ----------------------------
startBtn.addEventListener("click", startQuiz);
validateBtn.addEventListener("click", validateAnswer);
prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);

// Initialisation
populateSelects();
