/*const container = document.getElementById('quiz-container');

        quiz.forEach((q, index) => {
            // Créer la carte
            const card = document.createElement('div');
            card.className = 'card';

            // Question
            const questionEl = document.createElement('div');
            questionEl.className = 'question';
            questionEl.textContent = (index + 1) + ". " + q.question;
            card.appendChild(questionEl);

            // Réponse et explication
            const answerEl = document.createElement('div');
            answerEl.className = 'answer';
            answerEl.innerHTML = "<strong>Réponse :</strong> " + q.answers[q.correct] + "<br><strong>Explication :</strong> " + q.explanation;
            card.appendChild(answerEl);

            // Toggle l'affichage de la réponse au clic
            card.addEventListener('click', () => {
                answerEl.style.display = answerEl.style.display === 'block' ? 'none' : 'block';
            });

            container.appendChild(card);
        });*/


        (function () {
  const container = document.getElementById('quiz-container');
  const themeFilter = document.getElementById('themeFilter');
  const countInfo = document.getElementById('countInfo');

  // --- Helpers ---
  const getTheme = (q) => q.theme || 'Non classé';
  const getLevel = (q) => q.niveau || 'Intermédiaire';

  const levelClass = (lvl) => {
    const l = (lvl || '').toLowerCase();
    if (l.startsWith('début')) return 'level-beginner';
    if (l.startsWith('inter')) return 'level-intermediate';
    if (l.startsWith('av')) return 'level-advanced';
    return 'level-intermediate';
  };

  // Construit la liste des thèmes (unique) + "Tous les thèmes"
  function populateThemeFilter(quiz) {
    const themes = Array.from(new Set(quiz.map(getTheme))).sort((a, b) => a.localeCompare(b, 'fr'));
    // "Tous les thèmes"
    themeFilter.innerHTML = ['<option value="__all__">Tous les thèmes</option>']
      .concat(themes.map(t => `<option value="${t}">${t}</option>`))
      .join('');
  }

  // Rendu d'une carte question
  function renderCard(q, index) {
    const card = document.createElement('div');
    card.className = 'card';

    // Bandeau meta (thème + niveau)
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `
      <span class="badge badge-theme" title="Thème">${escapeHtml(getTheme(q))}</span>
      <span class="badge badge-level ${levelClass(getLevel(q))}" title="Niveau">${escapeHtml(getLevel(q))}</span>
    `;
    card.appendChild(meta);

    // Question
    const questionEl = document.createElement('div');
    questionEl.className = 'question';
    questionEl.textContent = (index + 1) + ". " + (q.question || '');
    card.appendChild(questionEl);

    // Réponse + explication (masquées par défaut)
    const answerEl = document.createElement('div');
    answerEl.className = 'answer';
    const correctIndex = Number.isInteger(q.correct) ? q.correct : 0;
    const correctText = (q.answers && q.answers[correctIndex]) ? q.answers[correctIndex] : '';
    answerEl.innerHTML = `<strong>Réponse :</strong> ${escapeHtml(correctText)}<br><strong>Explication :</strong> ${escapeHtml(q.explanation || '')}`;
    answerEl.style.display = 'none';
    card.appendChild(answerEl);

    // Toggle au clic sur la carte (ou sur la question)
    card.addEventListener('click', () => {
      const visible = answerEl.style.display === 'block';
      answerEl.style.display = visible ? 'none' : 'block';
    });

    return card;
  }

  // Rendu global avec filtre de thème
  function renderQuiz(quiz, selectedThemeValue) {
    container.innerHTML = '';
    const filtered = (selectedThemeValue && selectedThemeValue !== '__all__')
      ? quiz.filter(q => getTheme(q) === selectedThemeValue)
      : quiz.slice();

    filtered.forEach((q, i) => container.appendChild(renderCard(q, i)));
    countInfo.textContent = `Affichées : ${filtered.length} / ${quiz.length}`;
  }

  // Protection XSS minimale pour les textes
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (s) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }

  // --- Initialisation ---
  if (!Array.isArray(window.quiz)) {
    console.error('Le tableau global "quiz" est introuvable. Vérifie le chargement de questions.thematiques.v3.js et le window.quiz.');
    container.innerHTML = '<p style="color:#b00">Erreur : données quiz introuvables.</p>';
    return;
  }

  // Injecte les options de filtre et affiche tout
  populateThemeFilter(window.quiz);
  renderQuiz(window.quiz, themeFilter.value);

  // Écouteur filtre
  themeFilter.addEventListener('change', () => {
    renderQuiz(window.quiz, themeFilter.value);
  });
})();
