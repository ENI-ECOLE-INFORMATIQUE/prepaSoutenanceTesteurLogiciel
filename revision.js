import quiz from './questions.js';
const container = document.getElementById('quiz-container');

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
        });
