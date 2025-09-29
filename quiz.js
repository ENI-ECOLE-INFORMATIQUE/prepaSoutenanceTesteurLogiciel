// quiz.js (version corrigée — détecte automatiquement la source des questions)

// -------- DOM --------
const themeSelect = document.getElementById("themeSelect");
const levelSelect = document.getElementById("levelSelect");
const questionCountInput = document.getElementById("questionCount");
const availableInfo = document.getElementById("availableInfo");
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
const restartBtn = document.getElementById("restartBtn");

const scoreLine = document.getElementById("scoreLine");
const recapList = document.getElementById("recapList");

// -------- State --------
let rawQuestions = [];     // données brutes trouvées dans questions.js (après détection)
let normalized = [];       // tableau normalisé { question, answers, correct, explanation, theme, level }
let allQuestions = [];     // questions utilisées pour le quiz (après filtrage + shuffle)
let currentIndex = 0;
let score = 0;

// per-question state
let userSelected = [];     // index sélectionné (ou null)
let validated = [];        // bool si validé déjà

// -------- Helpers de détection / normalisation --------
function detectRawData() {
  // Cherche plusieurs noms possibles (déclarations top-level const/let sont accessibles par nom)
  if (typeof questionsData !== "undefined") return questionsData;
  if (typeof questionData !== "undefined") return questionData;
  if (typeof quiz !== "undefined") return quiz; // ton fichier utilise "const quiz = [...]"
  if (typeof questions !== "undefined") return questions;
  if (typeof questionsList !== "undefined") return questionsList;
  return null;
}

function normalizeArray(raw) {
  // Si raw est un objet mappant thèmes -> liste, transformer en array
  if (!raw) return [];
  if (!Array.isArray(raw)) {
    // objet : { "Thème A": [ ... ], "Thème B": [ ... ] }
    let arr = [];
    Object.entries(raw).forEach(([theme, list]) => {
      (list || []).forEach(q => arr.push({ ...q, theme }));
    });
    raw = arr;
  }

  // Maintenant raw est un array d'objets question
  return raw.map(q => {
    // Extraire champs avec tolérance pour variantes (fr/eng)
    const question = q.question || q.q || q.text || "";
    const answers = q.answers || q.choices || q.options || [];
    // 'correct' peut être index (num) ou valeur de réponse : on normalise en index
    let correct = typeof q.correct !== "undefined" ? q.correct : (typeof q.answer !== "undefined" ? q.answer : null);
    if (typeof correct === "string") {
      // chercher index dans answers
      const idx = answers.indexOf(correct);
      correct = idx >= 0 ? idx : 0;
    }
    correct = Number.isFinite(correct) ? parseInt(correct, 10) : 0;

    // thème / niveau (niveau peut être 'niveau' en FR)
    const theme = q.theme || q.categorie || q.category || "Général";
    const level = q.niveau || q.level || q.difficulty || "Non spécifié";

    const explanation = q.explanation || q.explic || q.note || "";

    return {
      question: String(question),
      answers: Array.isArray(answers) ? answers : [],
      correct: correct,
      explanation: String(explanation),
      theme: String(theme),
      level: String(level)
    };
  });
}

// -------- Populate selects et info dispo --------
function populateSelects() {
  const themes = new Set();
  const levels = new Set();

  normalized.forEach(q => {
    themes.add(q.theme || "Général");
    levels.add(q.level || "Non spécifié");
  });

  // Thèmes
  themeSelect.innerHTML = `<option value="all">Tous les thèmes</option>`;
  Array.from(themes).sort().forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    themeSelect.appendChild(opt);
  });

  // Niveaux
  levelSelect.innerHTML = `<option value="all">Tous les niveaux</option>`;
  Array.from(levels).sort().forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    levelSelect.appendChild(opt);
  });

  updateAvailableInfo();
}

function updateAvailableInfo() {
  const selectedTheme = themeSelect.value;
  const selectedLevel = levelSelect.value;

  const count = normalized.filter(q => {
    return (selectedTheme === "all" || q.theme === selectedTheme) &&
           (selectedLevel === "all" || q.level === selectedLevel);
  }).length;

  availableInfo.textContent = `${count} question(s) disponibles`;
  // adapter la valeur max du input
  questionCountInput.max = Math.max(1, count);
  if (Number(questionCountInput.value) > count) questionCountInput.value = count || 1;
}

// -------- Quiz flow --------
function startQuiz() {
  const selectedTheme = themeSelect.value;
  const selectedLevel = levelSelect.value;
  const count = Math.max(1, Math.min(Number(questionCountInput.value) || 10, Number(questionCountInput.max) || 9999));

  // Filtrer
  let filtered = normalized.filter(q => {
    return (selectedTheme === "all" || q.theme === selectedTheme) &&
           (selectedLevel === "all" || q.level === selectedLevel);
  });

  if (filtered.length === 0) {
    alert("⚠ Aucun quiz disponible avec ces paramètres.");
    return;
  }

  // Mélanger et tronquer
  allQuestions = shuffleArray(filtered).slice(0, count);

  // init state
  currentIndex = 0;
  score = 0;
  userSelected = new Array(allQuestions.length).fill(null);
  validated = new Array(allQuestions.length).fill(false);

  // basculer UI
  quizSetup.hidden = true;
  resultStage.hidden = true;
  quizStage.hidden = false;

  badgeTheme.textContent = selectedTheme === "all" ? "Tous les thèmes" : selectedTheme;
  badgeLevel.textContent = selectedLevel === "all" ? "Tous niveaux" : selectedLevel;

  showQuestion();
}

function showQuestion() {
  const q = allQuestions[currentIndex];
  if (!q) return;

  questionText.textContent = q.question || "(question introuvable)";
  answersForm.innerHTML = "";

  // construire les radios
  q.answers.forEach((ans, i) => {
    const id = `q_${currentIndex}_a_${i}`;
    const wrapper = document.createElement("label");
    wrapper.className = "answer-row";
    wrapper.innerHTML = `
      <input type="radio" name="answer" id="${id}" value="${i}">
      <span class="answer-text">${ans}</span>
    `;
    answersForm.appendChild(wrapper);
  });

  // pré-sélection si l'utilisateur a déjà choisi
  if (userSelected[currentIndex] !== null && userSelected[currentIndex] !== undefined) {
    const sel = answersForm.querySelector(`input[name="answer"][value="${userSelected[currentIndex]}"]`);
    if (sel) sel.checked = true;
  }

  // si déjà validée, afficher explication et empêcher de re-valider (on montre l'état)
  if (validated[currentIndex]) {
    // afficher explication
    showExplanationFor(currentIndex);
    validateBtn.hidden = true;
    nextBtn.hidden = (currentIndex === allQuestions.length - 1);
    // désactiver choix pour éviter modification après validation
    Array.from(answersForm.querySelectorAll("input[name='answer']")).forEach(i => i.disabled = true);
  } else {
    explanationBox.hidden = true;
    validateBtn.hidden = false;
    nextBtn.hidden = true; // interdit d'aller avant validation
    // autoriser choix
    Array.from(answersForm.querySelectorAll("input[name='answer']")).forEach(i => i.disabled = false);
  }

  prevBtn.hidden = currentIndex === 0;
  progress.textContent = `Question ${currentIndex + 1} / ${allQuestions.length}`;
}

function validateAnswer() {
  const selectedInput = answersForm.querySelector("input[name='answer']:checked");
  if (!selectedInput) {
    alert("⚠ Sélectionne une réponse avant de valider.");
    return;
  }
  const selIndex = parseInt(selectedInput.value, 10);

  // Si déjà validée pour cette question, ne pas recomptabiliser
  if (validated[currentIndex]) {
    // rien à faire (ou éventuellement actualiser explication)
    showExplanationFor(currentIndex);
    return;
  }

  userSelected[currentIndex] = selIndex;
  validated[currentIndex] = true;

  // incrémenter score si correct
  if (selIndex === allQuestions[currentIndex].correct) {
    score++;
  }

  showExplanationFor(currentIndex);

  validateBtn.hidden = true;
  nextBtn.hidden = (currentIndex === allQuestions.length - 1);

  // si dernière question et validée -> afficher résultats
  if (currentIndex === allQuestions.length - 1) {
    // petit délai optionnel pour laisser l'utilisateur lire (ici immédiat)
    showResults();
  }
}

function showExplanationFor(idx) {
  const q = allQuestions[idx];
  const userIdx = userSelected[idx];
  const correctIdx = q.correct;
  const userAns = (typeof userIdx === "number") ? q.answers[userIdx] : "Non répondu";
  const correctAns = q.answers[correctIdx];

  explanationBox.hidden = false;
  explanationBox.innerText = (userIdx === correctIdx ? "✅ Bonne réponse.\n" : `❌ Mauvaise réponse. La bonne réponse : ${correctAns}\n`) +
                             (q.explanation ? `💡 ${q.explanation}` : "");

  // désactiver les inputs pour éviter changement après validation
  Array.from(answersForm.querySelectorAll("input[name='answer']")).forEach(i => i.disabled = true);
}

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

function showResults() {
  quizStage.hidden = true;
  resultStage.hidden = false;

  scoreLine.textContent = `Ton score : ${score} / ${allQuestions.length}`;

  recapList.innerHTML = "";
  allQuestions.forEach((q, i) => {
    const userIdx = userSelected[i];
    const userAns = (typeof userIdx === "number") ? q.answers[userIdx] : "Non répondu";
    const correctAns = q.answers[q.correct];

    const div = document.createElement("div");
    div.className = "recap-item";
    div.innerHTML = `
      <p><strong>Q${i + 1} :</strong> ${q.question}</p>
      <p>Ta réponse : ${userAns}</p>
      <p>Bonne réponse : ${correctAns}</p>
      ${q.explanation ? `<p class="muted">💡 ${q.explanation}</p>` : ""}
      <hr/>
    `;
    recapList.appendChild(div);
  });
}

// -------- Utils --------
function shuffleArray(arr) {
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(o => o.v);
}

// -------- Events --------
startBtn.addEventListener("click", startQuiz);
validateBtn.addEventListener("click", validateAnswer);
prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);
restartBtn && restartBtn.addEventListener("click", () => {
  // revenir au setup
  resultStage.hidden = true;
  quizStage.hidden = true;
  quizSetup.hidden = false;
});

themeSelect.addEventListener("change", updateAvailableInfo);
levelSelect.addEventListener("change", updateAvailableInfo);

// -------- Init --------
(function init() {
  const raw = detectRawData();
  if (!raw) {
    console.error("Aucune source de questions trouvée. Vérifie ton fichier questions.js (ex: const quiz = [...])");
    // Informer l'utilisateur via UI
    if (availableInfo) availableInfo.textContent = "Erreur : données introuvables (voir console).";
    return;
  }

  rawQuestions = raw;
  normalized = normalizeArray(rawQuestions);
  populateSelects();
})();
