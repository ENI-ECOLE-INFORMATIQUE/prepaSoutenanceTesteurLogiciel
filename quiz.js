(function () {
  // --- Raccourcis DOM
  const el = (id) => document.getElementById(id);

  const themeSelect   = el('themeSelect');
  const questionCount = el('questionCount');
  const availableInfo = el('availableInfo');
  const startBtn      = el('startBtn');

  const quizSetup     = el('quizSetup');
  const quizStage     = el('quizStage');
  const resultStage   = el('resultStage');

  const badgeTheme    = el('badgeTheme');
  const badgeLevel    = el('badgeLevel');
  const progressEl    = el('progress');
  const questionText  = el('questionText');
  const answersForm   = el('answersForm');
  const explanationBox= el('explanationBox');

  const prevBtn       = el('prevBtn');
  const validateBtn   = el('validateBtn');
  const nextBtn       = el('nextBtn');
  const scoreLine     = el('scoreLine');
  const recapList     = el('recapList');
  const restartBtn    = el('restartBtn');

  // --- Sécurité (données)
  if (!Array.isArray(window.quiz)) {
    alert('Données quiz introuvables. Assure-toi que questions.js définit window.quiz = quiz (c’est le cas dans ton fichier).');
    return;
  }

  // --- Utilitaires
  const uniq = (arr) => Array.from(new Set(arr));
  const getTheme = (q) => q.theme || 'Non classé';
  const getLevel = (q) => q.niveau || 'Intermédiaire';
  const byTheme = (t) => window.quiz.filter(q => getTheme(q) === t);

  const escapeHtml = (str) => String(str).replace(/[&<>\"']/g, (s) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[s]));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- Construire la liste des thèmes + option Tous
  function populateThemes() {
    const themes = uniq(window.quiz.map(getTheme)).sort((a,b)=>a.localeCompare(b,'fr'));

    // Compter par thème
    const counts = {};
    for (const t of themes) counts[t] = byTheme(t).length;

    // Tous les thèmes
    const total = window.quiz.length;
    const options = [`<option value="__all__">Tous les thèmes (${total})</option>`]
      .concat(themes.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${counts[t]})</option>`));

    themeSelect.innerHTML = options.join('');
  }

  // --- Maintenir le max de questions possible
  function updateAvailableInfo() {
    const selectedTheme = themeSelect.value;
    const poolSize = (selectedTheme === '__all__')
      ? window.quiz.length
      : byTheme(selectedTheme).length;

    const asked = parseInt(questionCount.value, 10) || 1;
    questionCount.max = Math.max(1, poolSize);
    if (asked > poolSize) {
      questionCount.value = poolSize;
    } else if (asked < 1) {
      questionCount.value = 1;
    }
    availableInfo.textContent = `Disponibles pour ce choix : ${poolSize}`;
  }

  // --- État de partie
  let session = {
    pool: [],          // questions choisies (avec réponses mélangées)
    index: 0,          // question courante
    score: 0,
    answers: [],       // index de réponse choisi (ou null)
    checked: []        // booléen : question validée ?
  };

  function buildSession() {
    const selectedTheme = themeSelect.value;
    const N = parseInt(questionCount.value, 10) || 1;

    // Définir le pool de départ
    const basePool = (selectedTheme === '__all__')
      ? window.quiz.slice()
      : byTheme(selectedTheme);

    // Échantillonner aléatoirement N questions
    const sampled = shuffle(basePool).slice(0, Math.min(N, basePool.length));

    // Pour chaque question : mélanger les réponses et recalculer l'index correct
    const prepared = sampled.map(source => {
      const ans = source.answers.slice();
      const indices = ans.map((_, i) => i);
      const shuffledIdx = shuffle(indices);
      const answersShuffled = shuffledIdx.map(i => ans[i]);
      const newCorrect = shuffledIdx.indexOf(source.correct);

      return {
        theme: getTheme(source),
        niveau: getLevel(source),
        question: source.question,
        answers: answersShuffled,
        correct: newCorrect,
        explanation: source.explanation
      };
    });

    session = {
      pool: prepared,
      index: 0,
      score: 0,
      answers: new Array(prepared.length).fill(null),
      checked: new Array(prepared.length).fill(false)
    };
  }

  // --- Rendu d'une question
  function renderQuestion() {
    const i = session.index;
    const q = session.pool[i];

    badgeTheme.textContent = q.theme;
    badgeTheme.className = 'badge badge-theme';
    badgeLevel.textContent = q.niveau;
    badgeLevel.className = 'badge badge-level ' + levelClass(q.niveau);

    progressEl.textContent = `Question ${i + 1} / ${session.pool.length}`;
    questionText.innerHTML = escapeHtml(q.question || '');

    // réponses
    answersForm.innerHTML = '';
    q.answers.forEach((txt, idx) => {
      const id = `ans_${i}_${idx}`;
      const wrapper = document.createElement('label');
      wrapper.className = 'answer-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = String(idx);
      input.id = id;

      if (session.answers[i] === idx) input.checked = true;

      const span = document.createElement('span');
      span.innerHTML = escapeHtml(txt);

      wrapper.appendChild(input);
      wrapper.appendChild(span);
      answersForm.appendChild(wrapper);
    });

    // État des boutons / explication
    explanationBox.hidden = true;
    explanationBox.innerHTML = '';

    prevBtn.disabled = (i === 0);
    nextBtn.hidden = true;
    validateBtn.hidden = false;

    if (session.checked[i]) {
      // déjà validée : re‑montrer l’explication & couleurs
      showCorrection();
      validateBtn.hidden = true;
      nextBtn.hidden = (i === session.pool.length - 1) ? true : false;
    }
  }

  function getSelectedAnswerIndex() {
    const checked = answersForm.querySelector('input[name="answer"]:checked');
    return checked ? parseInt(checked.value, 10) : null;
  }

  function showCorrection() {
    const i = session.index;
    const q = session.pool[i];
    const selected = session.answers[i];
    const isCorrect = selected === q.correct;

    // Marquage visuel des options
    const opts = answersForm.querySelectorAll('label.answer-option');
    opts.forEach((lbl, idx) => {
      lbl.classList.remove('correct', 'wrong');
      if (idx === q.correct) lbl.classList.add('correct');
      if (idx === selected && selected !== q.correct) lbl.classList.add('wrong');
    });

    explanationBox.hidden = false;
    explanationBox.innerHTML = `<strong>${isCorrect ? '✅ Correct' : '❌ Incorrect'}</strong><br>${escapeHtml(q.explanation || '')}`;
  }

  function levelClass(lvl) {
    const l = String(lvl || '').toLowerCase();
    if (l.startsWith('début')) return 'level-beginner';
    if (l.startsWith('inter')) return 'level-intermediate';
    if (l.startsWith('av'))    return 'level-advanced';
    return 'level-intermediate';
  }

  // --- Navigation / Actions
  startBtn.addEventListener('click', () => {
    buildSession();
    if (session.pool.length === 0) {
      alert('Aucune question disponible avec ce choix.');
      return;
    }
    quizSetup.hidden = true;
    resultStage.hidden = true;
    quizStage.hidden = false;
    renderQuestion();
  });

  prevBtn.addEventListener('click', () => {
    if (session.index > 0) {
      session.index--;
      renderQuestion();
    }
  });

  validateBtn.addEventListener('click', () => {
    const i = session.index;
    const q = session.pool[i];
    const sel = getSelectedAnswerIndex();
    if (sel === null) {
      alert('Merci de sélectionner une réponse.');
      return;
    }
    session.answers[i] = sel;

    if (!session.checked[i]) {
      session.checked[i] = true;
      if (sel === q.correct) session.score++;
    }
    showCorrection();

    validateBtn.hidden = true;
    nextBtn.hidden = (i === session.pool.length - 1) ? true : false;

    // Fin du quiz : enchaîner vers résultats
    if (i === session.pool.length - 1) {
      setTimeout(showResults, 350);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (session.index < session.pool.length - 1) {
      session.index++;
      renderQuestion();
    }
  });

  restartBtn.addEventListener('click', () => {
    // Retour au panneau de configuration
    quizSetup.hidden = false;
    quizStage.hidden = true;
    resultStage.hidden = true;
    updateAvailableInfo();
  });

  // --- Résultats
  function showResults() {
    quizStage.hidden = true;
    resultStage.hidden = false;

    const total = session.pool.length;
    const score = session.score;
    const pct = Math.round((score / total) * 100);

    scoreLine.textContent = `Score : ${score} / ${total} (${pct}%)`;

    // Récapitulatif (questions + bonne réponse)
    const frag = document.createDocumentFragment();
    session.pool.forEach((q, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'recap-item';
      const selected = session.answers[i];

      wrap.innerHTML = `
        <div class="meta">
          <span class="badge badge-theme">${escapeHtml(q.theme)}</span>
          <span class="badge badge-level ${levelClass(q.niveau)}">${escapeHtml(q.niveau)}</span>
        </div>
        <div class="recap-q"><strong>Q${i+1}.</strong> ${escapeHtml(q.question)}</div>
        <div class="recap-a ${selected === q.correct ? 'ok' : 'ko'}">
          <strong>Bonne réponse :</strong> ${escapeHtml(q.answers[q.correct])}${
            selected !== q.correct && selected !== null
              ? `<br><em>Votre réponse :</em> ${escapeHtml(q.answers[selected])}`
              : ''
          }
        </div>
      `;
      frag.appendChild(wrap);
    });
    recapList.innerHTML = '';
    recapList.appendChild(frag);
  }

  // --- Initialisation
  populateThemes();
  updateAvailableInfo();

  themeSelect.addEventListener('change', updateAvailableInfo);
  questionCount.addEventListener('input', updateAvailableInfo);
})();
