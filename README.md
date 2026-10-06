# Révision et Quiz Soutenance - Testeurs Logiciels (BAC+2)

Ce projet est une **application web interactive** permettant de réviser et de tester ses connaissances pour le métier de **Testeur Logiciel**.
Il est conçu pour préparer une **soutenance** devant des apprenants/testeurs de niveau **BAC+2**.

Application 100% statique (HTML / CSS / JavaScript vanilla), sans framework ni dépendance : elle fonctionne en local ou sur GitHub Pages.

## 🎯 Objectif

- Proposer un **quiz interactif** : questions chronométrées, retour immédiat ("Bonne réponse" / "Mauvaise réponse") et explication pédagogique après chaque question
- Fournir une **base de questions** consultable par thème et par niveau, avec recherche plein texte, réponses complètes et **synthèses de thème**
- **Suivre la progression** : questions vues, thèmes maîtrisés, taux de réussite des derniers quiz et recommandations de révision

## 📚 Contenu pédagogique

- **136 questions** réparties en **15 thèmes** :
  Fondamentaux du test, Types de tests, Tests de performance, Automatisation & CI/CD, Méthodes & Agile, Plan de test, Cas de test, Rapport d'exécution, Ticket de bug, Cahier de tests, Vérification & Confirmation, Outils & Plateformes, Web & Développement, Accessibilité, Organisation & rôles produit
- **3 niveaux de difficulté** : Débutant, Intermédiaire, Avancé
- **Synthèse par thème** : définition, points clés, pièges fréquents et 3 points à retenir — affichée en tête de chaque thème dans la base de questions

## ✨ Fonctionnalités

### Quiz interactif
- Configuration : thème, niveau, nombre de questions (1 à 50), temps par question (10 à 300 s)
- Questions dans un ordre aléatoire à chaque session
- Chronomètre par question avec alerte visuelle et barre de progression
- Explication pédagogique après chaque réponse
- Score final avec pourcentage animé, temps total et revue des questions ratées

### Base de questions
- Toutes les questions organisées par thème et niveau avec réponses et explications
- Recherche plein texte (questions et explications)
- Filtre par niveau de difficulté
- Synthèse rapide du thème (définition, formules clés, pièges, points à retenir)

### Suivi de progression (stockage local `localStorage`)
- **Historique** des 5 derniers quiz avec scores
- **Progression** : questions vues, thèmes maîtrisés (seuil de 70%), réussite des 3 derniers quiz
- **Révisions recommandées** : suggestions automatiques basées sur les thèmes les moins réussis

### Navigation et ergonomie
- Pages accueil / quiz / questions accessibles via `?page=...` ou ancres
- Header et footer mutualisés, chargés dynamiquement (`layout.js`) avec repli en cas d'absence de `fetch`
- Design responsive et animations d'entrée

---

## 🚀 Utilisation

### 1. Lancer en local
- Ouvrir le fichier `index.html` dans un navigateur web
*(Compatible avec Chrome, Firefox, Edge, Safari)*

### 2. Jouer
- Lire la question affichée
- Choisir une réponse parmi les propositions
- Lire l'explication affichée après votre réponse
- Passer à la question suivante
- Recevoir votre score final et la revue de vos erreurs à la fin du quiz

### 3. Accéder au quiz en ligne
- Ouvrir le lien fourni par GitHub Pages
- Partager l'URL avec les futurs testeurs logiciels

## 🎯 Accéder à l'application en ligne

**[Cliquez ici pour accéder au quiz en ligne](https://eni-ecole-informatique.github.io/prepaSoutenanceTesteurLogiciel/)**

---

## 📂 Structure du projet

```
prepaSoutenanceTesteurLogiciel\
│── index.html      # Page principale : accueil, configuration quiz, quiz, résultats, base de questions
│── header.html     # Partial HTML de l'en-tête (chargé dynamiquement)
│── footer.html     # Partial HTML du pied de page (chargé dynamiquement)
│── questions.js    # Données : l'ensemble des questions (thème, niveau, réponses, explication) + synthèses par thème
│── script.js       # Logique : timer, gestion des questions, navigation, progression, historique, recommandations
│── layout.js       # Injection dynamique du header/footer avec fallback
│── style.css       # Styles du projet
│── img\
│────── logo_eni.png
│── README.md       # Documentation du projet
```

---

## 📜 Licence

Ce projet est publié sous licence **MIT**.
Vous pouvez l'utiliser, le modifier et le partager librement.
