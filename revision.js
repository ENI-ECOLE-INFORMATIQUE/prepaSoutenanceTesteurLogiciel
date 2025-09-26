(function () {
  const container = document.getElementById('quiz-container');
  const themeFilter = document.getElementById('themeFilter');
  const levelFilter = document.getElementById('levelFilter');
  const searchInput = document.getElementById('searchInput');
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

  // Accent-insensitive normalize
  const stripAccents = (s) =>
    String(s || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  // Secure text
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (s) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[s]));
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }
  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Highlight occurrences of query in an already-escaped string
  function highlightEscapedText(escapedText, query) {
    const q = (query || '').trim();
    if (!q) return escapedText;
    // Accent-insensitive: on travaille sur des chaînes sans accents
    const base = stripAccents(escapedText);
    const qBase = stripAccents(escapeHtml(q));
    const pattern = new RegExp(escapeRegex(qBase), 'gi');

    // Pour conserver la casse et l'HTML échappé, on reconstruit en parcourant les matchs
    let result = '';
    let lastIndex = 0;
    let match;
    while ((match = pattern.exec(base)) !== null) {
      const start = match.index;
      const end = start + match[0].length;
      result += escapedText.slice(lastIndex, start);
      result += '<mark>' + escapedText.slice(start, end) + '</mark>';
      lastIndex = end;
    }
    result += escapedText.slice(lastIndex);
    return result;
  }

  // Tri des niveaux
  const levelOrder = ['Débutant', 'Intermédiaire', 'Avancé'];
  const sortLevels = (arr) =>
    arr.slice().sort((a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b));

  // Construit les listes des filtres + options "Tous"
  function populateThemeFilter(quiz) {
    const themes = Array.from(new Set(quiz.map(getTheme))).sort((a, b) => a.localeCompare(b, 'fr'));
    themeFilter.innerHTML = ['<option value="__all__">Tous les thèmes</option>']
      .concat(themes.map(t => `<option value="${escapeAttr(t)}">${escapeHtml(t)}</option>`))
      .join('');
  }
  function populateLevelFilter(quiz) {
    const levels = Array.from(new Set(quiz.map(getLevel)));
    const sorted = sortLevels(levels);
    levelFilter.innerHTML = ['<option value="__all__">Tous niveaux</option>']
      .concat(sorted.map(l => `<option value="${escapeAttr(l)}">${escapeHtml(l)}</option>`))
      .join('');
  }

  // Rendu d'une carte
  function renderCard(q, index, query) {
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

    // Question (avec highlight)
    const questionEl = document.createElement('div');
    questionEl.className = 'question';
    const qTextEscaped = escapeHtml(q.question || '');
    questionEl.innerHTML = (index + 1) + ". " + highlightEscapedText(qTextEscaped, query);
    card.appendChild(questionEl);

    // Réponse + explication (masquées par défaut)
    const answerEl = document.createElement('div');
    answerEl.className = 'answer';
    const correctIndex = Number.isInteger(q.correct) ? q.correct : 0;
    const correctText = (q.answers && q.answers[correctIndex]) ? q.answers[correctIndex] : '';
    const ansEsc = escapeHtml(correctText);
    const expEsc = escapeHtml(q.explanation || '');

    // Highlight dans la réponse et l’explication
    const ansHi = highlightEscapedText(ansEsc, query);
    const expHi = highlightEscapedText(expEsc, query);

    answerEl.innerHTML = `<strong>Réponse :</strong> ${ansHi}<br><strong>Explication :</strong> ${expHi}`;
    answerEl.style.display = 'none';
    card.appendChild(answerEl);

    // Toggle au clic
    card.addEventListener('click', () => {
      const visible = answerEl.style.display === 'block';
      answerEl.style.display = visible ? 'none' : 'block';
    });

    return card;
  }

  // Filtrage combiné Thème + Niveau + Recherche
  function applyFilters(quiz, themeValue, levelValue, query) {
    const qNorm = stripAccents((query || '').trim().toLowerCase());
    return quiz.filter(item => {
      const themeOk = (themeValue === '__all__') || (getTheme(item) === themeValue);
      const levelOk = (levelValue === '__all__') || (getLevel(item) === levelValue);

      if (!qNorm) return themeOk && levelOk;

      // concat des champs pour la recherche
      const haystack = [
        item.question,
        ...(Array.isArray(item.answers) ? item.answers : []),
        item.explanation,
        getTheme(item),
        getLevel(item)
      ].join(' ');
      const hayNorm = stripAccents(haystack).toLowerCase();

      const searchOk = hayNorm.includes(qNorm);
      return themeOk && levelOk && searchOk;
    });
  }

  // Rendu global
  function renderQuiz(quiz, themeValue, levelValue, query) {
    container.innerHTML = '';
    const filtered = applyFilters(quiz, themeValue, levelValue, query);

    if (filtered.length === 0) {
      container.innerHTML = '<p style="color:#666;margin:.5rem 0;">Aucun résultat pour ces critères.</p>';
    } else {
      filtered.forEach((q, i) => container.appendChild(renderCard(q, i, query)));
    }
    countInfo.textContent = `Affichées : ${filtered.length} / ${quiz.length}`;
  }

  // Debounce pour la recherche
  function debounce(fn, delay = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  }

  // Persistance simple des filtres (localStorage)
  const LS_KEYS = {
    theme: 'rev_theme',
    level: 'rev_level',
    search: 'rev_search'
  };

  function loadState() {
    return {
      theme: localStorage.getItem(LS_KEYS.theme) || '__all__',
      level: localStorage.getItem(LS_KEYS.level) || '__all__',
      search: localStorage.getItem(LS_KEYS.search) || ''
    };
  }
  function saveState(theme, level, search) {
    localStorage.setItem(LS_KEYS.theme, theme);
    localStorage.setItem(LS_KEYS.level, level);
    localStorage.setItem(LS_KEYS.search, search);
  }

  // --- Initialisation ---
  if (!Array.isArray(window.quiz)) {
    console.error('Le tableau global "quiz" est introuvable. Vérifie le chargement de questions.thematiques.v3.js et le window.quiz.');
    container.innerHTML = '<p style="color:#b00">Erreur : données quiz introuvables.</p>';
    return;
  }

  // Injecte les options de filtres
  populateThemeFilter(window.quiz);
  populateLevelFilter(window.quiz);

  // Restaure l’état
  const state = loadState();
  if ([...themeFilter.options].some(o => o.value === state.theme)) {
    themeFilter.value = state.theme;
  }
  if ([...levelFilter.options].some(o => o.value === state.level)) {
    levelFilter.value = state.level;
  }
  searchInput.value = state.search;

  // Premier rendu
  renderQuiz(window.quiz, themeFilter.value, levelFilter.value, searchInput.value);

  // Écouteurs
  const onChange = () => {
    saveState(themeFilter.value, levelFilter.value, searchInput.value);
    renderQuiz(window.quiz, themeFilter.value, levelFilter.value, searchInput.value);
  };

  themeFilter.addEventListener('change', onChange);
  levelFilter.addEventListener('change', onChange);
  searchInput.addEventListener('input', debounce(onChange, 200));
})();
