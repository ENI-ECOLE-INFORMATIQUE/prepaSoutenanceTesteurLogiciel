# Révision et Quiz Soutenance - Testeurs Logiciels (BAC+2)

Ce projet est une **application web interactive** permettant de réviser et de tester ses connaissances pour le métier de **Testeur Logiciel**.
Il est conçu pour préparer une **soutenance** devant des apprenants/testeurs de niveau **BAC+2**.

Application 100% statique (HTML / CSS / JavaScript vanilla), sans framework ni dépendance : elle fonctionne en local ou sur GitHub Pages.

Le contenu est aligné sur le titre **[RNCP39088 « Testeur logiciels »](https://www.francecompetences.fr/recherche/rncp/39088)** (niveau 5, ENI Ecole) : concevoir les tests, exécuter et restituer, automatiser.

## 🎯 Objectif

- Proposer un **quiz interactif** : questions chronométrées, retour immédiat et explication pédagogique après chaque question
- Fournir une **base de questions** consultable par thème et par niveau, avec recherche plein texte, réponses complètes et **synthèses de thème**
- Offrir une page **« À retenir »** avec les points clés à formuler pendant l'oral de soutenance
- Mettre à disposition un **Vademecum** : les bonnes pratiques du testeur logiciel, chapitre par chapitre
- **Suivre la progression** : questions vues, thèmes maîtrisés, réussite par thème, taux de réussite des derniers quiz et recommandations de révision

## 📚 Contenu pédagogique

- **181 questions** réparties en **15 thèmes** :
  Fondamentaux du test, Types de tests, Tests de performance, Automatisation & CI/CD, Méthodes & Agile, Plan de test, Cas de test, Rapport d'exécution, Ticket de bug, Cahier de tests, Vérification & Confirmation, Outils & Plateformes, Web & Développement, Accessibilité, Organisation & rôles produit
- **3 niveaux de difficulté** : Débutant, Intermédiaire, Avancé
- **Synthèse par thème** : définition, points clés, pièges fréquents et 3 points à retenir — affichée en tête de chaque thème dans la base de questions

## ✨ Fonctionnalités

### Quiz interactif
- Configuration : thème, niveau, nombre de questions (1 à 50), temps par question (10 à 300 s)
- Questions dans un ordre aléatoire à chaque session
- Chronomètre par question avec alerte visuelle et barre de progression
- Réponse possible au clavier (touches 1 à N)
- Explication pédagogique après chaque réponse
- Score final avec pourcentage animé, temps total et revue des questions ratées
- **Mode « Simulation soutenance »** : 20 questions tous thèmes/niveaux, 60 s par question, pour se mettre en condition réelle

### Flashcards
- Une carte tirée au hasard parmi les 136 questions
- On réfléchit, on révèle la réponse et son explication, puis on s'auto-évalue (« Je savais » / « À revoir »)
- Bilan de la série en fin de paquet

### Base de questions
- Toutes les questions organisées par thème et niveau avec réponses et explications
- Recherche plein texte (questions et explications) et filtre par niveau
- Synthèse rapide du thème (définition, formules clés, pièges, points à retenir)
- **Version imprimable** : impression propre de la base et des pages À retenir / Vademecum (feuille blanche, sans interface)

### Suivi de progression (stockage local `localStorage`)
- **Historique** des 5 derniers quiz avec scores
- **Progression** : questions vues, thèmes maîtrisés (seuil de 70%), réussite des 3 derniers quiz
- **Réussite par thème** : barres de progression, themes les plus faibles en premier
- **Révisions recommandées** : suggestions automatiques basées sur les thèmes les moins réussis

### Navigation et ergonomie
- Pages accueil / quiz / questions / flashcards accessibles via `?page=...` ou ancres
- Header et footer mutualisés, chargés dynamiquement (`layout.js`) avec repli en cas d'absence de `fetch`
- Design responsive, animations d'entrée, bouton retour en haut sur toutes les pages
- **Application installable** (manifest PWA) et favicon ENI
- Lien vers le **[podcast ISTQB](https://eni-ecole-informatique.github.io/PodcastITSQB/)** dans le footer

---

## 🚀 Utilisation

### 1. Lancer en local
- Ouvrir le fichier `index.html` dans un navigateur web
*(Compatible avec Chrome, Firefox, Edge, Safari)*

### 2. Jouer
- Lire la question affichée
- Choisir une réponse parmi les propositions (clic ou touches 1 à N)
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
│── index.html            # Page principale : accueil, configuration quiz, quiz, résultats, questions, flashcards
│── a-retenir.html        # Points clés à retenir pour la soutenance (3 blocs RNCP + 15 questions clés)
│── vademecum.html        # Bonnes pratiques du testeur logiciel (11 chapitres dépliables)
│── header.html           # Partial HTML de l'en-tête (chargé dynamiquement)
│── footer.html           # Partial HTML du pied de page (chargé dynamiquement)
│── questions.js          # Données : les 136 questions (thème, niveau, réponses, explication) + synthèses par thème
│── script.js             # Logique : timer, questions, navigation, progression, historique, stats, flashcards
│── layout.js             # Injection dynamique du header/footer avec fallback
│── back-to-top.js        # Bouton retour en haut de page
│── style.css             # Styles du projet (thème sombre, print)
│── manifest.webmanifest  # Manifest PWA (application installable)
│── img\
│────── logo_eni.png          # Logo ENI original (texte noir)
│────── logo_eni_blanc.png    # Logo ENI adapté au thème sombre (texte blanc)
│────── favicon-32.png        # Favicon (carré ENI)
│────── icon-192.png           # Icône PWA 192x192
│────── icon-512.png           # Icône PWA 512x512
│── README.md             # Documentation du projet
```

---

## 📜 Licence

Ce projet est publié sous licence **MIT**.
Vous pouvez l'utiliser, le modifier et le partager librement.
