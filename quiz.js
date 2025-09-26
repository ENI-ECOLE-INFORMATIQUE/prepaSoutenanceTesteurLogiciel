let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

// On mémorise les réponses mélangées pour gérer le timeout proprement
let currentShuffledAnswers = [];

/* ---------- Helpers ---------- */

// Mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Valeurs par défaut si le fichier de questions n'a pas ces champs
const getTheme = (q) => q.theme || 'Non classé';
const getLevel = (q) => q.niveau || 'Intermédiaire';

// Couleur du badge niveau (reprise de la logique côté révision)
function levelClass(lvl) {
  const l = (lvl || '').toLowerCase();
  if (l.startsWith('début')) return 'level-beginner';
  if (l.startsWith('inter')) return 'level-intermediate';
  if (l.startsWith('av')) return 'level-advanced';
  return 'level-intermediate';
}

/* ---------- Minuteur ---------- */
function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      // Timeout : on montre l'explication sans réponse sélectionnée
      showExplanation(null, /*answersShuffled=*/undefined);
    }
  }, 1000);
}

/* ---------- Affichage question ---------- */
function showQuestion(index) {
  const q = window.quiz[index]; // quiz vient du fichier questions.thematiques.v3.js

  // Construire { text, isCorrect } et mélanger
  currentShuffledAnswers = q.answers.map((answer, i) => ({
    text: answer,
    isCorrect: i === q.correct
  }));
  currentShuffledAnswers = shuffleArray(currentShuffledAnswers);

  // Afficher la méta (thème + niveau)
  const metaTheme = document.getElementById("metaTheme");
  const metaLevel = document.getElementById("metaLevel");
  metaTheme.textContent = getTheme(q);
  // reset classes puis appliquer couleur de niveau
  metaLevel.className = 'badge badge-level ' + levelClass(getLevel(q));
  metaLevel.textContent = getLevel(q);

  // Afficher la question
  document.getElementById("question").textContent = q.question;

  // Afficher les réponses (boutons)
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  currentShuffledAnswers.forEach((answerObj, i) => {
    const btn = document.createElement("button");
    btn.textContent = answerObj.text;
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', `Réponse ${i + 1}`);
    btn.onclick = () => showExplanation(i, currentShuffledAnswers);
    answersDiv.appendChild(btn);
  });

  // Reset feedback & boutons nav
  document.getElementById("feedback").textContent = "";
  document.getElementById("prevBtn").disabled = index === 0;
  document.getElementById("nextBtn").disabled = true;

  startTimer();
}

/* ---------- Explication + correction ---------- */
function showExplanation(selected, answersShuffled) {
  clearInterval(timer);

  const q = window.quiz[currentQuestion];
  const feedbackDiv = document.getElementById("feedback");
  const buttons = document.querySelectorAll("#answers button");

  // Fallback si appelé par timeout (answersShuffled non fourni)
  const localAnswers = Array.isArray(answersShuffled) ? answersShuffled : currentShuffledAnswers;

  // Colorer les boutons & les désactiver
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (localAnswers[i]?.isCorrect) btn.style.backgroundColor = "#4CAF50";  // vert
    if (i === selected && !localAnswers[i]?.isCorrect) btn.style.backgroundColor = "#f44336"; // rouge
  });

  // Feedback
  if (selected !== null && localAnswers[selected]?.isCorrect) {
    score++;
    feedbackDiv.textContent = "✅ Bonne réponse ! " + (q.explanation || "");
  } else if (selected === null) {
    feedbackDiv.textContent = "⏰ Temps écoulé ! " + (q.explanation || "");
  } else {
    feedbackDiv.textContent = "❌ Mauvaise réponse. " + (q.explanation || "");
  }

  document.getElementById("nextBtn").disabled = false;
}

/* ---------- Résultat ---------- */
function showResult() {
  const percent = Math.round((score / window.quiz.length) * 100);
  let message = "Pas mal, mais tu peux mieux faire 💪";
  if (percent === 100) message = "Parfait ! Tu es prêt(e) pour la soutenance 🎉";
  else if (percent >= 70) message = "Très bien ! Tu maîtrises bien le sujet 👍";

  document.getElementById("quizContainer").innerHTML = `
    <div class="result">
      <h2>Quiz terminé 🎯</h2>
      <p>Score : ${score}/${window.quiz.length} (${percent}%)</p>
      <p>${message}</p>
      <button onclick="restartQuiz()">🔄 Recommencer</button>
    </div>
  `;
}

/* ---------- Redémarrage ---------- */
function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  document.getElementById("quizContainer").innerHTML = `
    img/logo_eni.png
    <nav>
      index.htmlAccueil</a>
      quiz.htmlQuiz</a>
      revision.htmlRévision</a>
    </nav>
    <h1>Quiz Soutenance - Testeurs Logiciels</h1>
    <a id="top"></a>

    <div class="meta">
      <span id="metaTheme" class="badge badge-theme" title="Thème"></span>
      <span id="metaLevel" class="badge badge-level" title="Niveau"></span>
    </div>

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

/* ---------- Navigation ---------- */
function addNavEvents() {
  document.getElementById("prevBtn").onclick = () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  };
  document.getElementById("nextBtn").onclick = () => {
    if (currentQuestion < window.quiz.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  };
}

/* ---------- Initialisation ---------- */
if (!Array.isArray(window.quiz)) {
  // Sécurité : si le fichier questions n'a pas été chargé correctement
  document.getElementById("quizContainer").innerHTML =
    '<p style="color:#b00">Erreur : données quiz introuvables. Vérifie le chargement de questions.thematiques.v3.js et son export en window.quiz.</p>';
} else {
  addNavEvents();
  showQuestion(currentQuestion);
}
