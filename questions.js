// Fichier thématique enrichi (ajout des questions demandées)
const quiz = [
  {
    theme: "Fondamentaux du test",
    question: "Quel est le rôle principal d’un testeur logiciel ?",
    answers: [
      "Développer de nouvelles fonctionnalités",
      "Identifier les défauts et assurer la qualité du logiciel",
      "Gérer la base de données"
    ],
    correct: 1,
    explanation: "Le testeur a pour rôle de trouver les défauts et de garantir que le logiciel répond aux exigences qualité."
  },
  {
    theme: "Fondamentaux du test",
    question: "Qu’est-ce qu’un bug critique ?",
    answers: [
      "Un bug esthétique qui n’affecte pas le fonctionnement",
      "Un bug qui empêche l’utilisation de la fonctionnalité principale",
      "Un bug qui ralentit légèrement l’application"
    ],
    correct: 1,
    explanation: "Un bug critique est un défaut qui empêche le logiciel de fonctionner correctement ou bloque des fonctionnalités essentielles."
  },
  {
    theme: "Fondamentaux du test",
    question: "Que signifie 'flaky test' ?",
    answers: [
      "Un test qui échoue ou réussit de manière aléatoire",
      "Un test qui prend trop de temps",
      "Un test non automatisé"
    ],
    correct: 0,
    explanation: "Un flaky test est instable : il peut passer ou échouer sans modification du code."
  },
  {
    theme: "Fondamentaux du test",
    question: "Qu’est-ce que l’analyse des causes profondes (Root Cause Analysis) ?",
    answers: [
      "Une méthode pour identifier l’origine d’un bug",
      "Une étape de validation",
      "Un type de test de performance"
    ],
    correct: 0,
    explanation: "Le Root Cause Analysis vise à trouver la cause exacte d’un problème pour éviter qu’il ne se reproduise."
  },
  {
    theme: "Fondamentaux du test",
    question: "Qu’est-ce qu’un bug de type 'off-by-one' ?",
    answers: [
      "Une erreur dans un calcul où l’indice ou la limite est décalé de 1",
      "Un bug critique qui bloque le logiciel",
      "Un bug esthétique"
    ],
    correct: 0,
    explanation: "Les erreurs off-by-one se produisent souvent dans les boucles ou les indices, où une valeur est décalée d’une unité."
  },
  {
    theme: "Fondamentaux du test",
    question: "Peux-tu me donner la définition d'un Framework ?",
    answers: [
      "Un ensemble d’outils et de bibliothèques facilitant le développement",
      "Un langage de programmation",
      "Un type de serveur"
    ],
    correct: 0,
    explanation: "Un framework fournit une structure et des composants prêts à l’emploi pour accélérer le développement."
  },
  {
    theme: "Fondamentaux du test",
    question: "Qu'est-ce qu'un bug ?",
    answers: [
      "Un défaut dans un logiciel entraînant un comportement inattendu",
      "Une fonctionnalité optionnelle",
      "Un test automatisé"
    ],
    correct: 0,
    explanation: "Un bug est une erreur ou anomalie qui empêche le logiciel de fonctionner comme prévu."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test unitaire ?",
    answers: [
      "Tester l’ensemble de l’application",
      "Tester une fonction ou un module isolé",
      "Tester l’application sur plusieurs navigateurs"
    ],
    correct: 1,
    explanation: "Un test unitaire vérifie une petite partie du code (une fonction, un module) de manière isolée."
  },
  {
    theme: "Types de tests",
    question: "Quel est le but principal d’un test d’intégration ?",
    answers: [
      "Tester les performances du système",
      "Vérifier la compatibilité entre plusieurs modules",
      "Tester uniquement l’interface utilisateur"
    ],
    correct: 1,
    explanation: "Le test d’intégration consiste à vérifier que plusieurs composants ou modules fonctionnent correctement ensemble."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test de régression ?",
    answers: [
      "Tester les nouvelles fonctionnalités uniquement",
      "Vérifier qu’une modification n’a pas introduit de nouveaux bugs",
      "Exécuter uniquement des tests automatisés"
    ],
    correct: 1,
    explanation: "Un test de régression consiste à vérifier qu’une modification du code n’a pas cassé des fonctionnalités existantes."
  },
  {
    theme: "Types de tests",
    question: "Que signifie 'test exploratoire' ?",
    answers: [
      "Test basé sur un plan prédéfini",
      "Test non-scripté où le testeur explore le logiciel",
      "Test automatisé pour détecter les bugs"
    ],
    correct: 1,
    explanation: "Le test exploratoire consiste à tester le logiciel sans scénario prédéfini, en explorant les fonctionnalités pour détecter des problèmes."
  },
  {
    theme: "Types de tests",
    question: "Quel est l’objectif des tests d’acceptation utilisateur (UAT) ?",
    answers: [
      "Vérifier que le code est bien documenté",
      "S’assurer que le logiciel répond aux besoins des utilisateurs finaux",
      "Tester uniquement la sécurité de l’application"
    ],
    correct: 1,
    explanation: "Les tests d’acceptation utilisateur valident que le logiciel satisfait aux exigences et attentes des utilisateurs finaux."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test fumée (Smoke Test) ?",
    answers: [
      "Un test rapide pour vérifier que l’application démarre et fonctionne globalement",
      "Un test pour vérifier la sécurité réseau",
      "Un test effectué uniquement après la mise en production"
    ],
    correct: 0,
    explanation: "Le test fumée valide les fonctionnalités principales avant de procéder à des tests plus détaillés."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test de compatibilité ?",
    answers: [
      "Un test de performance",
      "Un test pour vérifier le fonctionnement sur différents environnements",
      "Un test de sécurité"
    ],
    correct: 1,
    explanation: "Le test de compatibilité valide que le logiciel fonctionne correctement sur différents navigateurs, systèmes, ou appareils."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test de sécurité ?",
    answers: [
      "Un test visant à détecter les vulnérabilités du logiciel",
      "Un test qui mesure le temps de réponse",
      "Un test de validation métier"
    ],
    correct: 0,
    explanation: "Les tests de sécurité visent à identifier les failles de sécurité et à protéger les données."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un 'regression suite' ?",
    answers: [
      "Un ensemble de tests automatisés pour vérifier qu’aucune régression n’est introduite",
      "Un document listant les défauts",
      "Une méthode de débogage"
    ],
    correct: 0,
    explanation: "Une regression suite regroupe tous les tests nécessaires pour détecter d’éventuelles régressions."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test end-to-end (E2E) ?",
    answers: [
      "Tester uniquement une fonction isolée",
      "Tester le parcours complet d’un utilisateur dans l’application",
      "Tester les performances du serveur"
    ],
    correct: 1,
    explanation: "Un test end-to-end simule l’expérience utilisateur de bout en bout pour s’assurer que tout fonctionne correctement ensemble."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test alpha et un test bêta ?",
    answers: [
      "Alpha : interne, Beta : externe avec utilisateurs finaux",
      "Alpha : performance, Beta : sécurité",
      "Alpha et Beta sont identiques"
    ],
    correct: 0,
    explanation: "Les tests alpha sont effectués en interne avant la sortie officielle, tandis que les tests bêta impliquent de vrais utilisateurs pour détecter les problèmes restants."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test exploratoire en agile ?",
    answers: [
      "Tester uniquement selon un plan prédéfini",
      "Explorer librement l’application tout en créant des notes sur les bugs et les comportements",
      "Automatiser tous les tests"
    ],
    correct: 1,
    explanation: "Le test exploratoire en agile consiste à tester sans script précis, en s’adaptant aux découvertes et en documentant les problèmes."
  },
  {
    theme: "Types de tests",
    question: "Qu’est-ce qu’un test de régression partiel ?",
    answers: [
      "Tester uniquement les modules affectés par une modification",
      "Tester toutes les fonctionnalités de l’application",
      "Tester uniquement les nouvelles fonctionnalités"
    ],
    correct: 0,
    explanation: "Un test de régression partiel vérifie uniquement les zones impactées par une modification pour gagner du temps tout en détectant les bugs potentiels."
  },
  {
    theme: "Types de tests",
    question: "Qu'est-ce que les 3A ?",
    answers: [
      "Arrange, Act, Assert en test unitaire",
      "Analyse, Automatisation, Application",
      "Audit, Accessibilité, Approbation"
    ],
    correct: 0,
    explanation: "Les 3A représentent la structure Arrange (préparer), Act (agir), Assert (vérifier) en test unitaire."
  },
  {
    theme: "Types de tests",
    question: "C'est quoi gitlab ?",
    answers: [
      "Une plateforme de gestion de code basée sur Git",
      "Un éditeur de texte",
      "Un serveur de base de données"
    ],
    correct: 0,
    explanation: "GitLab est un service de gestion de dépôts Git avec intégration continue et outils collaboratifs."
  },
  {
    theme: "Types de tests",
    question: "Laquelle est une spécification non fonctionnelle et son test associé ?",
    answers: [
      "Temps de réponse < 500 ms sous 200 utilisateurs → test de performance/charge.",
      "Pouvoir créer une facture → test fonctionnel de création.",
      "Avoir un bouton ‘Payer’ bleu → test d’UI visuelle uniquement.",
      "Ajouter un champ ‘commentaire’ → test de saisie basique."
    ],
    correct: 0,
    explanation: "Les NFR portent sur performance, sécurité, accessibilité, fiabilité, etc. et se valident via des tests non fonctionnels dédiés."
  },
  {
    theme: "Types de tests",
    question: "Que signifie la non‑régression ?",
    answers: [
      "Qu’aucune fonctionnalité existante n’est dégradée après une modification ; on le vérifie par des tests de régression.",
      "Que la livraison est toujours plus rapide après chaque sprint.",
      "Que les performances augmentent automatiquement après un refactoring.",
      "Qu’aucun test ne doit jamais échouer en CI."
    ],
    correct: 0,
    explanation: "La non‑régression vise l’absence d’effets secondaires sur l’existant ; les suites de régression (souvent automatisées) la contrôlent."
  },
  {
    theme: "Tests de performance",
    question: "Quel type de test se concentre sur la performance et la charge du système ?",
    answers: [
      "Test fonctionnel",
      "Test non-fonctionnel",
      "Test unitaire"
    ],
    correct: 1,
    explanation: "Les tests non-fonctionnels incluent les tests de performance, de charge, de sécurité ou d’accessibilité."
  },
  {
    theme: "Tests de performance",
    question: "Quelle est la principale différence entre un test fonctionnel et un test non-fonctionnel ?",
    answers: [
      "Le test fonctionnel se base sur les exigences métier, le non-fonctionnel sur la qualité du système",
      "Le test fonctionnel est toujours manuel, le non-fonctionnel toujours automatisé",
      "Il n’y a pas de différence"
    ],
    correct: 0,
    explanation: "Le test fonctionnel valide le comportement attendu du logiciel, le non-fonctionnel mesure ses performances, sécurité, etc."
  },
  {
    theme: "Tests de performance",
    question: "Quel est l’objectif d’un test de charge ?",
    answers: [
      "Tester la compatibilité entre navigateurs",
      "Vérifier la performance du système sous une forte utilisation",
      "Vérifier les permissions utilisateur"
    ],
    correct: 1,
    explanation: "Le test de charge évalue la performance du système lorsqu’il est soumis à un grand nombre d’utilisateurs ou de requêtes."
  },
  {
    theme: "Tests de performance",
    question: "Qu’est-ce qu’un test de montée en charge (Stress Test) ?",
    answers: [
      "Un test qui simule une augmentation progressive du nombre d’utilisateurs",
      "Un test de compatibilité",
      "Un test uniquement manuel"
    ],
    correct: 0,
    explanation: "Un stress test évalue la capacité du système à gérer une augmentation progressive de la charge."
  },
  {
    theme: "Tests de performance",
    question: "C'est quoi un test de charge ?",
    answers: [
      "Un test pour mesurer la performance sous forte utilisation",
      "Un test de compatibilité",
      "Un test de sécurité"
    ],
    correct: 0,
    explanation: "Le test de charge évalue le comportement du système lorsqu'il est sollicité intensivement."
  },
  {
    theme: "Tests de performance",
    question: "Comment faire un test de charge ?",
    answers: [
      "Simuler un grand nombre d’utilisateurs ou de requêtes simultanées",
      "Vérifier le code ligne par ligne",
      "Analyser le code statiquement"
    ],
    correct: 0,
    explanation: "Un test de charge se fait via des outils simulant de nombreux utilisateurs ou requêtes."
  },
  {
    theme: "Tests de performance",
    question: "Quelle est la principale différence entre un test de charge et un test de stress ?",
    answers: [
      "Le test de charge mesure sous forte utilisation, le stress pousse le système au-delà de ses limites",
      "Le test de charge est plus rapide",
      "Le test de stress est plus précis"
    ],
    correct: 0,
    explanation: "Le test de charge évalue les performances en usage intense, le stress cherche à provoquer la panne."
  },
  {
    theme: "Tests de performance",
    question: "C'est quoi un rapport Gatling ?",
    answers: [
      "Un rapport généré par un outil de test de charge",
      "Un document de sécurité",
      "Un diagramme de flux"
    ],
    correct: 0,
    explanation: "Gatling produit des rapports détaillés sur les performances et le comportement sous charge."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Qu’est-ce que l’automatisation des tests ?",
    answers: [
      "Exécuter les tests manuellement",
      "Utiliser des scripts pour exécuter les tests",
      "Ne plus faire de tests du tout"
    ],
    correct: 1,
    explanation: "L’automatisation consiste à utiliser des scripts pour exécuter des tests de manière régulière et efficace."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Que signifie 'mock' dans les tests ?",
    answers: [
      "Un faux objet ou service simulé pour isoler un test",
      "Un type de test automatisé",
      "Un script de déploiement"
    ],
    correct: 0,
    explanation: "Un mock est un objet simulé qui imite un composant réel pour isoler les tests."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Qu’est-ce que le 'code coverage' (couverture de code) ?",
    answers: [
      "Le pourcentage de lignes de code exécutées par les tests",
      "Le nombre de tests exécutés par jour",
      "La documentation des tests"
    ],
    correct: 0,
    explanation: "La couverture de code indique quelle proportion du code source est exécutée lors des tests."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Que signifie 'CI/CD' pour les tests automatisés ?",
    answers: [
      "Continuous Integration / Continuous Deployment",
      "Check Integration / Code Debug",
      "Code Inspection / Continuous Development"
    ],
    correct: 0,
    explanation: "CI/CD désigne un processus d’intégration et de déploiement continus qui inclut souvent l’exécution automatique de tests."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Que signifie 'pipeline de tests' dans CI/CD ?",
    answers: [
      "Une suite automatisée de tests exécutée à chaque modification du code",
      "Un document listant les tests",
      "Un outil de monitoring"
    ],
    correct: 0,
    explanation: "Un pipeline de tests est une chaîne automatisée qui exécute plusieurs types de tests après chaque mise à jour du code."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Quelle est la principale différence entre un test manuel et un test automatisé ?",
    answers: [
      "Le test manuel est exécuté par un humain, le test automatisé par un script",
      "Le test automatisé est toujours plus rapide",
      "Le test manuel ne détecte pas les bugs"
    ],
    correct: 0,
    explanation: "Le test manuel est effectué par un testeur humain, le test automatisé repose sur des scripts ou outils."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Que signifie 'regression testing automation' ?",
    answers: [
      "Automatiser tous les tests unitaires",
      "Automatiser les tests pour détecter des régressions rapidement",
      "Ne tester que les nouvelles fonctionnalités"
    ],
    correct: 1,
    explanation: "Il s’agit de mettre en place des tests automatisés afin de détecter rapidement les régressions après une modification du code."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Pourquoi utilise-t-on des tests unitaires mocks et stubs ?",
    answers: [
      "Pour simplifier le code source",
      "Pour isoler les composants et tester uniquement la logique ciblée",
      "Pour accélérer l’exécution du serveur"
    ],
    correct: 1,
    explanation: "Mocks et stubs remplacent certains composants afin que le test se concentre uniquement sur l’unité testée."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Qu’est-ce qu’un test de fumée automatisé ?",
    answers: [
      "Un test rapide exécuté automatiquement pour vérifier les fonctionnalités de base",
      "Un test qui mesure le temps de réponse",
      "Un test manuel complexe"
    ],
    correct: 0,
    explanation: "Les tests de fumée automatisés valident rapidement que l’application démarre et que les fonctionnalités essentielles fonctionnent."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Qu'est-ce que Playwright ?",
    answers: [
      "Un outil de test automatisé pour navigateurs",
      "Un langage de programmation",
      "Un outil de gestion de projet"
    ],
    correct: 0,
    explanation: "Playwright permet d'automatiser les tests de navigateurs pour vérifier le comportement des applications web."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Quels sont les bénéfices ET les limites réelles de l’automatisation des tests ?",
    answers: [
      "Elle réduit le temps d’exécution et sécurise les régressions, mais exige un investissement initial et une maintenance continue, et ne remplace pas les tests exploratoires.",
      "Elle remplace totalement les testeurs une fois en place et ne nécessite plus de maintenance.",
      "Elle est surtout utile pour les tests d’interface manuels et lente pour les régressions.",
      "Elle ne sert qu’aux tests de performance et n’apporte rien en recette fonctionnelle."
    ],
    correct: 0,
    explanation: "Automatiser apporte vitesse, répétabilité et feedback rapide, mais demande du design, du code et une maintenance des scripts. Certains tests (exploratoires, ergonomie, aspects UX) restent manuels."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Quels critères privilégier pour choisir un framework d’automatisation ?",
    answers: [
      "Compatibilité avec le stack technique, stabilité, écosystème/plugins, intégration CI/CD, facilité de prise en main et maintenance.",
      "Popularité sur les réseaux sociaux et présence d’un thème sombre.",
      "Exigence d’écrire tout en framework maison pour garder le contrôle total.",
      "Le framework le plus complexe, car il couvrira forcément tous les besoins."
    ],
    correct: 0,
    explanation: "Le bon choix s’appuie sur la compatibilité (langage/outils), la robustesse, l’écosystème, l’intégration CI/CD, la maintenabilité et la courbe d’apprentissage."
  },
  {
    theme: "Automatisation & CI/CD",
    question: "Quel est le rôle des tests automatisés dans une chaîne CI/CD ?",
    answers: [
      "Fournir un feedback rapide et bloquer le merge/déploiement si des tests critiques échouent.",
      "Créer des rapports uniquement après la mise en production.",
      "Remplacer la revue de code.",
      "Déployer automatiquement même si des tests échouent, pour gagner du temps."
    ],
    correct: 0,
    explanation: "La CI exécute automatiquement les suites de tests et empêche l’intégration/livraison en cas d’échec, améliorant la qualité et la vitesse de livraison."
  },
  {
    theme: "Méthodes & Agile",
    question: "Que signifie 'BDD' dans le contexte des tests ?",
    answers: [
      "Base De Données",
      "Behavior Driven Development",
      "Bug Detection Delay"
    ],
    correct: 1,
    explanation: "BDD signifie Behavior Driven Development : une méthode qui décrit les fonctionnalités en langage naturel pour faciliter la compréhension."
  },
  {
    theme: "Méthodes & Agile",
    question: "Que signifie 'TDD' ?",
    answers: [
      "Test Driven Development",
      "Technical Data Documentation",
      "Total Debugging Duration"
    ],
    correct: 0,
    explanation: "TDD signifie Test Driven Development : on écrit d'abord les tests avant le code."
  },
  {
    theme: "Méthodes & Agile",
    question: "En TDD, quelle est la séquence typique ?",
    answers: [
      "Fail → Pass → Refactor",
      "Write Code → Test → Debug",
      "Plan → Implement → Release"
    ],
    correct: 0,
    explanation: "En TDD, on écrit un test qui échoue (Fail), on écrit le code pour le faire passer (Pass), puis on améliore le code (Refactor)."
  },
  {
    theme: "Méthodes & Agile",
    question: "Pourquoi utilise-t-on des environnements de préproduction pour les tests ?",
    answers: [
      "Pour tester sur un environnement identique à la production sans impacter les utilisateurs",
      "Pour accélérer les tests",
      "Pour réduire les coûts"
    ],
    correct: 0,
    explanation: "Les environnements de préproduction permettent de tester dans des conditions réelles avant la mise en ligne."
  },
  {
    theme: "Méthodes & Agile",
    question: "Que signifie 'shift-left testing' ?",
    answers: [
      "Effectuer les tests plus tôt dans le cycle de développement",
      "Tester uniquement la production",
      "Reporter les tests à la fin du projet"
    ],
    correct: 0,
    explanation: "Le 'shift-left' vise à détecter les bugs dès le début du développement pour réduire les coûts et améliorer la qualité."
  },
  {
    theme: "Méthodes & Agile",
    question: "Quelle est l’utilité d’un test pair-review ?",
    answers: [
      "Deux testeurs vérifient le même scénario pour améliorer la qualité et détecter plus de bugs",
      "Deux développeurs écrivent du code ensemble",
      "Deux utilisateurs valident la fonctionnalité"
    ],
    correct: 0,
    explanation: "Le test pair-review permet de combiner l’expérience de deux testeurs pour identifier plus efficacement les anomalies."
  },
  {
    theme: "Méthodes & Agile",
    question: "A quoi sert un planning poker ?",
    answers: [
      "Estimer la complexité des tâches en Agile",
      "Planifier des réunions",
      "Créer des diagrammes"
    ],
    correct: 0,
    explanation: "Le planning poker est une technique Agile pour estimer les efforts nécessaires à une tâche."
  },
  {
    theme: "Méthodes & Agile",
    question: "Combien de temps dure un sprint en méthode Agile ?",
    answers: [
      "En général entre 1 et 4 semaines",
      "Toujours 1 semaine",
      "Toujours 1 mois"
    ],
    correct: 0,
    explanation: "La durée d'un sprint est fixée entre 1 et 4 semaines selon l'équipe et le projet."
  },
  {
    theme: "Méthodes & Agile",
    question: "Quelle est la première étape de la planification d'un test Agile ?",
    answers: [
      "Identifier les critères d'acceptation et les user stories",
      "Coder les fonctionnalités",
      "Faire un test de performance"
    ],
    correct: 0,
    explanation: "En Agile, on commence par analyser les user stories et définir les critères d’acceptation."
  },
  {
    theme: "Méthodes & Agile",
    question: "Quand est-ce qu'on fait un sprint review ?",
    answers: [
      "À la fin du sprint pour présenter le travail accompli",
      "Au début du sprint",
      "Avant chaque test unitaire"
    ],
    correct: 0,
    explanation: "Le sprint review se tient à la fin de chaque sprint pour présenter les fonctionnalités livrées."
  },
  {
    theme: "Méthodes & Agile",
    question: "Quel est le rôle d'un Product Owner ?",
    answers: [
      "Définir la vision produit et prioriser le backlog",
      "Coder les fonctionnalités",
      "Tester le produit"
    ],
    correct: 0,
    explanation: "Le Product Owner gère la vision produit, les priorités et le backlog."
  },
  {
    theme: "Méthodes & Agile",
    question: "Quels sont les 4 piliers de l'agilité ?",
    answers: [
      "Individus et interactions, logiciel fonctionnel, collaboration client, adaptation au changement",
      "Planification stricte, documentation, validation client, tests automatisés",
      "Itérations, sprints, user stories, tests"
    ],
    correct: 0,
    explanation: "Les 4 piliers de l’agilité viennent du manifeste agile : individus/interactions, logiciel fonctionnel, collaboration client, adaptation."
  },
  {
    theme: "Méthodes & Agile",
    question: "Comment adapter la communication des résultats entre Product Owner et développeurs ?",
    answers: [
      "PO : synthèse risques/impacts et décisions ; Développeurs : détails techniques, logs, steps reproductibles et priorité d’actions.",
      "Envoyer le même rapport verbeux à tout le monde.",
      "Ne communiquer que les succès pour ne pas bloquer la roadmap.",
      "Réserver les résultats aux testeurs uniquement."
    ],
    correct: 0,
    explanation: "Un reporting efficace est ciblé : décisionnel et orienté valeur pour le PO ; actionnable et technique pour l’équipe de dev."
  },
  {
    theme: "Plan de test",
    question: "Dans un plan de test, que contient la section 'préconditions' ?",
    answers: [
      "Les étapes pour exécuter le test",
      "Les conditions à remplir avant d’exécuter le test",
      "Les résultats attendus"
    ],
    correct: 1,
    explanation: "Les préconditions décrivent l’état initial requis avant d’exécuter un test."
  },
  {
    theme: "Plan de test",
    question: "Qu’est-ce qu’un plan de test dans le processus de test logiciel ?",
    answers: [
      "Un document qui décrit la stratégie, les objectifs, les ressources et le planning des activités de test.",
      "Un document qui recense uniquement les bugs rencontrés.",
      "Un rapport final envoyé au client à la fin du projet.",
      "Un cahier des charges pour les développeurs."
    ],
    correct: 0,
    explanation: "Le plan de test est un document de référence qui décrit la stratégie globale de test, ses objectifs, les ressources nécessaires et la planification."
  },
  {
    theme: "Plan de test",
    question: "Que contient généralement un plan de test ?",
    answers: [
      "Les objectifs de test, le périmètre, les ressources, les environnements, la stratégie et le planning.",
      "Uniquement la liste des cas de test.",
      "Les tickets de bug et leurs correctifs.",
      "Uniquement les résultats d’exécution."
    ],
    correct: 0,
    explanation: "Un plan de test comprend : objectifs, périmètre, stratégie, ressources, environnement, risques, planning et critères d’entrée/sortie."
  },
  {
    theme: "Plan de test",
    question: "Quelle différence entre un plan de test (ISTQB) et une suite de tests ?",
    answers: [
      "Le plan de test décrit la stratégie, le périmètre, les ressources et le planning ; la suite de tests est l’ensemble structuré de cas exécutables.",
      "Aucune : ce sont deux termes pour la même chose.",
      "Le plan de test contient uniquement la liste des bugs ; la suite de tests, la stratégie.",
      "La suite de tests est un document managérial, le plan de test est un script automatisé."
    ],
    correct: 0,
    explanation: "Le plan de test est un document de pilotage ; la suite de tests regroupe les cas destinés à l’exécution. Les deux sont complémentaires."
  },
  {
    theme: "Plan de test",
    question: "Que faire face à une spécification ambiguë ou incomplète ?",
    answers: [
      "Demander une clarification (PO/BA), documenter les questions, proposer des exemples/exemples concrets et aligner les critères d’acceptation.",
      "Interpréter seul pour gagner du temps et écrire les tests selon son intuition.",
      "Ignorer la spécification et tester uniquement le comportement actuel.",
      "Reporter le sujet en production pour décider plus tard."
    ],
    correct: 0,
    explanation: "La clarification amont évite les malentendus : questions écrites, exemples, critères d’acceptation et mise à jour des artefacts."
  },
  {
    theme: "Plan de test",
    question: "Quel principe de base pour établir un plan d’exécution des tests ?",
    answers: [
      "Prioriser par risque/criticité métier, gérer les dépendances et la disponibilité des environnements/données.",
      "Exécuter par ordre alphabétique des cas de test.",
      "Toujours commencer par les tests les plus longs.",
      "Lancer tous les cas en parallèle sans tenir compte des environnements."
    ],
    correct: 0,
    explanation: "Un scheduling efficace tient compte du risque, des prérequis (données/env), des fenêtres de tir et des ressources."
  },
  {
    theme: "Cas de test",
    question: "Pourquoi documenter les cas de test ?",
    answers: [
      "Pour pouvoir répéter les tests et assurer la traçabilité",
      "Pour remplir la documentation du projet",
      "Pour éviter d’utiliser des outils de test"
    ],
    correct: 0,
    explanation: "Documenter les cas de test permet de les reproduire et de garantir un suivi clair."
  },
  {
    theme: "Cas de test",
    question: "C'est quoi un cahier de tests ?",
    answers: [
      "Un document listant les scénarios et cas de test",
      "Un rapport d'incidents",
      "Un guide utilisateur"
    ],
    correct: 0,
    explanation: "Le cahier de tests recense tous les cas de tests à exécuter pour vérifier un logiciel."
  },
  {
    theme: "Cas de test",
    question: "Qu’est-ce qu’un cas de test ?",
    answers: [
      "Un scénario documenté qui décrit les conditions, les données, les actions et les résultats attendus pour vérifier une fonctionnalité.",
      "Un bug identifié dans le logiciel.",
      "Un script automatisé exécuté par un outil.",
      "Une documentation de projet sans lien avec les tests."
    ],
    correct: 0,
    explanation: "Un cas de test est un scénario structuré qui permet de valider une fonctionnalité précise en suivant des conditions d’entrée, des étapes et des résultats attendus."
  },
  {
    theme: "Cas de test",
    question: "Que doit contenir un cas de test bien rédigé ?",
    answers: [
      "Un identifiant unique, un objectif, des prérequis, des étapes, des données de test et un résultat attendu.",
      "Uniquement un résultat attendu.",
      "Un descriptif général de l’application.",
      "Les anomalies rencontrées sur le projet."
    ],
    correct: 0,
    explanation: "Un cas de test doit contenir : identifiant, description/objectif, prérequis, étapes détaillées, données de test, résultats attendus et état."
  },
  {
    theme: "Cas de test",
    question: "Quel est l’enchaînement logique d’un scénario de test bien rédigé ?",
    answers: [
      "Préconditions → Étapes → Résultats attendus → Post‑conditions",
      "Résultats attendus → Étapes → Préconditions → Post‑conditions",
      "Étapes → Préconditions → Résultats attendus → Post‑conditions",
      "Préconditions → Post‑conditions → Étapes → Résultats attendus"
    ],
    correct: 0,
    explanation: "Un scénario clair pose le contexte (préconditions), décrit l’action (étapes), précise le résultat attendu et éventuellement les post‑conditions pour remettre le système dans un état propre."
  },
  {
    theme: "Cas de test",
    question: "Quel principe est recommandé pour rédiger un cas de test efficace ?",
    answers: [
      "Un cas = un objectif clair, des données précises, des étapes reproductibles et un résultat attendu mesurable.",
      "Regrouper le maximum de vérifications hétérogènes dans un seul cas pour gagner du temps.",
      "Omettre les données de test pour éviter de figer le scénario.",
      "Écrire uniquement le résultat attendu sans détailler les étapes."
    ],
    correct: 0,
    explanation: "Des cas atomiques et reproductibles facilitent l’exécution, l’automatisation et l’analyse des échecs."
  },
  {
    theme: "Cas de test",
    question: "Quelle démarche permet de dériver des cas de test à partir des spécifications fonctionnelles ?",
    answers: [
      "Identifier les critères d’acceptation par user story, définir les scénarios (heureux/erreur/bords) et écrire des cas traçables.",
      "Attendre la fin du développement puis improviser des tests exploratoires uniquement.",
      "Écrire des cas de test sans lire les spécifications pour rester neutre.",
      "Se limiter aux scénarios heureux afin de simplifier la recette."
    ],
    correct: 0,
    explanation: "L’ingénierie des tests part des exigences/US et critères d’acceptation pour couvrir cas nominal, erreurs et limites, avec traçabilité bidirectionnelle."
  },
  {
    theme: "Rapport d’exécution",
    question: "Qu’est-ce qu’un rapport d’exécution de test ?",
    answers: [
      "Un document qui présente les résultats des cas de test exécutés, leur statut (succès/échec) et les anomalies détectées.",
      "Un plan prévisionnel des tests.",
      "Un cahier des charges fonctionnel.",
      "Un script de test automatisé."
    ],
    correct: 0,
    explanation: "Le rapport d’exécution fournit une vision claire des résultats des tests, des cas réussis, échoués et des anomalies détectées."
  },
  {
    theme: "Rapport d’exécution",
    question: "Que doit contenir un rapport d’exécution ?",
    answers: [
      "La liste des cas de test exécutés, leur statut, les anomalies rencontrées et une synthèse globale.",
      "Uniquement les bugs corrigés.",
      "Les cas de test qui n’ont pas encore été rédigés.",
      "La documentation technique du produit."
    ],
    correct: 0,
    explanation: "Un rapport d’exécution inclut : cas exécutés, résultats, anomalies, statistiques et une synthèse pour les parties prenantes."
  },
  {
    theme: "Rapport d’exécution",
    question: "Comment transmettre efficacement un rapport d’exécution aux parties prenantes ?",
    answers: [
      "En utilisant un format clair (PDF, outil de gestion de tests, email) et en adaptant le niveau de détail selon le public.",
      "Uniquement par oral lors d’une réunion.",
      "En envoyant les fichiers de logs bruts.",
      "En stockant le rapport sans le partager."
    ],
    correct: 0,
    explanation: "Un rapport doit être transmis dans un format adapté (document ou outil) et présenter un niveau de détail compréhensible pour le public (manager, client, équipe technique)."
  },
  {
    theme: "Rapport d’exécution",
    question: "Quels éléments clés présenter lors d’un reporting de tests ?",
    answers: [
      "Taux de réussite/échec, cas bloqués, couverture, risques et tendances, avec un focus sur les impacts métier.",
      "La liste exhaustive des logs techniques uniquement.",
      "Uniquement les succès pour rassurer les parties prenantes.",
      "Le nom des testeurs et la durée quotidienne de chacun."
    ],
    correct: 0,
    explanation: "Un bon reporting combine indicateurs quantitatifs et analyse des risques pour aider à la décision (go/no‑go, priorisation)."
  },
  {
    theme: "Rapport d’exécution",
    question: "Comment garantir la confidentialité lors d’une présentation des résultats ?",
    answers: [
      "Anonymiser/masquer les données sensibles, limiter les accès, partager le strict nécessaire et utiliser des environnements non‑prod.",
      "Utiliser des données de production en clair pour rester fidèle à la réalité.",
      "Transférer tous les dumps de base de données pour que chacun puisse vérifier.",
      "Envoyer les rapports à l’ensemble de l’entreprise pour transparence totale."
    ],
    correct: 0,
    explanation: "La confidentialité passe par l’anonymisation, le masquage, le contrôle d’accès et l’absence de données personnelles réelles dans les supports."
  },
  {
    theme: "Ticket de bug",
    question: "Qu’est-ce qu’un ticket de bug ?",
    answers: [
      "Un enregistrement dans un outil de suivi permettant de décrire, prioriser et suivre la résolution d’une anomalie.",
      "Un document qui décrit les objectifs de test.",
      "Un cas de test automatisé.",
      "Un rapport final de projet."
    ],
    correct: 0,
    explanation: "Un ticket de bug est une fiche descriptive dans un outil de suivi (Jira, Redmine, etc.) qui permet de signaler une anomalie et d’en suivre l’évolution."
  },
  {
    theme: "Ticket de bug",
    question: "Que doit contenir un ticket de bug bien rédigé ?",
    answers: [
      "Un titre clair, un identifiant, la description, la sévérité, la priorité, l’environnement, les étapes de reproduction, le résultat obtenu et le résultat attendu.",
      "Uniquement une capture d’écran.",
      "Le code source du module concerné.",
      "Les objectifs du plan de test."
    ],
    correct: 0,
    explanation: "Un ticket de bug doit être précis : titre, description, sévérité, priorité, environnement, étapes de reproduction, résultat obtenu vs attendu et éventuellement des pièces jointes."
  },
  {
    theme: "Ticket de bug",
    question: "Quel élément améliore le plus la capacité à reproduire une anomalie ?",
    answers: [
      "Des étapes de reproduction précises avec données, contexte, captures/logs et résultat attendu vs obtenu.",
      "Un titre créatif et court sans détails.",
      "Uniquement le code source soupçonné.",
      "La sévérité sans description."
    ],
    correct: 0,
    explanation: "La qualité d’un ticket repose sur la reproductibilité : étapes, données, environnement, preuves et attente métier."
  },
  {
    theme: "Ticket de bug",
    question: "Laquelle des propositions décrit correctement la différence entre sévérité et priorité ?",
    answers: [
      "La sévérité mesure l’impact fonctionnel/technique ; la priorité définit l’urgence de correction.",
      "La sévérité est décidée par le PO ; la priorité par le testeur.",
      "La priorité est l’impact, la sévérité l’ordre d’exécution.",
      "Ce sont des synonymes."
    ],
    correct: 0,
    explanation: "Sévérité = gravité du dysfonctionnement ; priorité = ordre/urgence de traitement, décidé selon le risque et le contexte projet."
  },
  {
    theme: "Cahier de tests",
    question: "Que doit-on mettre dans un cahier de tests ?",
    answers: [
      "Les prérequis, scénarios, résultats attendus et observés",
      "Uniquement les bugs détectés",
      "Les tâches de développement"
    ],
    correct: 0,
    explanation: "Un cahier de tests contient les préconditions, les étapes de test, les résultats attendus et ceux observés."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Dans les tests automatisés, que signifie 'assertion' ?",
    answers: [
      "Une commande qui vérifie si une condition est vraie",
      "Une configuration de serveur",
      "Une mesure de performance"
    ],
    correct: 0,
    explanation: "Une assertion est une vérification qui confirme qu’un résultat obtenu correspond au résultat attendu."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Qu'est-ce qu'un test de vérification ?",
    answers: [
      "Un test qui permet de vérifier que le logiciel respecte les spécifications et exigences définies.",
      "Un test réalisé uniquement après la mise en production.",
      "Un test qui sert à vérifier la performance de l'application.",
      "Un test réalisé uniquement par les utilisateurs finaux."
    ],
    correct: 0,
    explanation: "Les tests de vérification consistent à s'assurer que le produit respecte les spécifications et exigences définies (validation de la conception par rapport au cahier des charges)."
  },
  {
    theme: "Vérification & Confirmation",
    question: "À quel moment effectue-t-on généralement des tests de vérification ?",
    answers: [
      "Pendant les phases de développement et d'intégration.",
      "Uniquement en production.",
      "Après la livraison finale au client.",
      "Seulement si une anomalie est détectée."
    ],
    correct: 0,
    explanation: "Les tests de vérification sont effectués pendant le développement et l’intégration pour s’assurer que chaque module respecte les spécifications avant la validation globale."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Qu'est-ce qu'un test de confirmation ?",
    answers: [
      "Un test qui permet de vérifier qu'un bug corrigé ne réapparaît plus.",
      "Un test qui valide la conformité du produit aux spécifications initiales.",
      "Un test de charge exécuté pour confirmer la performance.",
      "Un test obligatoire avant la mise en production."
    ],
    correct: 0,
    explanation: "Un test de confirmation est exécuté pour s’assurer qu’un défaut signalé a bien été corrigé et que la fonctionnalité concernée fonctionne désormais correctement."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Quelle est la différence entre un test de régression et un test de confirmation ?",
    answers: [
      "Le test de confirmation vérifie qu'un bug corrigé est bien résolu, tandis que le test de régression s'assure que la correction n'a pas introduit de nouveaux problèmes ailleurs.",
      "Le test de régression et le test de confirmation sont identiques.",
      "Le test de régression se concentre sur les performances, le test de confirmation sur la sécurité.",
      "Le test de confirmation se fait avant livraison, le test de régression après."
    ],
    correct: 0,
    explanation: "Le test de confirmation valide la correction d’un bug précis, tandis que le test de régression vérifie que cette correction n’a pas impacté négativement d’autres fonctionnalités."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Quelle est la principale différence entre un test de vérification et un test de confirmation ?",
    answers: [
      "La vérification s’assure que le produit respecte les spécifications, tandis que la confirmation vérifie qu’un bug corrigé fonctionne correctement.",
      "La vérification est faite après la livraison, la confirmation avant la livraison.",
      "La vérification teste uniquement les performances, la confirmation uniquement la sécurité.",
      "La vérification est réalisée par le client, la confirmation par le développeur."
    ],
    correct: 0,
    explanation: "La vérification se concentre sur la conformité aux spécifications initiales, tandis que la confirmation consiste à tester la correction d’un bug précis."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Dans quel cas utiliserait-on un test de vérification plutôt qu’un test de confirmation ?",
    answers: [
      "Lorsqu’on veut valider que les fonctionnalités développées respectent les spécifications.",
      "Lorsqu’on veut s’assurer qu’un bug corrigé est bien résolu.",
      "Lorsqu’on veut tester les performances sous forte charge.",
      "Lorsqu’on veut valider la sécurité de l’application."
    ],
    correct: 0,
    explanation: "On utilise un test de vérification pour valider que les fonctionnalités sont conformes aux spécifications. Le test de confirmation, lui, intervient après correction d’un défaut."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Quel type de test est directement lié au cycle de correction d’anomalies ?",
    answers: [
      "Le test de confirmation.",
      "Le test de vérification.",
      "Le test unitaire.",
      "Le test de charge."
    ],
    correct: 0,
    explanation: "Le test de confirmation est lié au processus de correction d’anomalies : il permet de vérifier qu’un bug signalé a bien été corrigé."
  },
  {
    theme: "Vérification & Confirmation",
    question: "Les tests de vérification et de confirmation font partie de quel objectif global ?",
    answers: [
      "Améliorer la qualité et la fiabilité du logiciel.",
      "Mesurer la performance du logiciel.",
      "Garantir uniquement la sécurité de l’application.",
      "Évaluer l’expérience utilisateur."
    ],
    correct: 0,
    explanation: "Les deux types de tests participent à l’assurance qualité en visant à améliorer la fiabilité et la robustesse du logiciel."
  },
  {
    theme: "Outils & Plateformes",
    question: "C'est quoi Notion ?",
    answers: [
      "Un outil de prise de notes et gestion de projets collaboratif",
      "Un framework web",
      "Une base de données"
    ],
    correct: 0,
    explanation: "Notion est un espace de travail collaboratif permettant notes, gestion de tâches et documentation."
  },
  {
    theme: "Outils & Plateformes",
    question: "C'est quoi git ?",
    answers: [
      "Un système de gestion de versions de code",
      "Un langage de programmation",
      "Un serveur web"
    ],
    correct: 0,
    explanation: "Git est un outil de contrôle de version distribué pour suivre l’évolution du code."
  },
  {
    theme: "Outils & Plateformes",
    question: "C'est quoi GitHub ?",
    answers: [
      "Une plateforme d’hébergement de projets Git",
      "Un framework web",
      "Un système de débogage"
    ],
    correct: 0,
    explanation: "GitHub est un service d’hébergement et de gestion de projets utilisant Git."
  },
  {
    theme: "Outils & Plateformes",
    question: "C'est quoi une branche dans git ?",
    answers: [
      "Une version parallèle du code pour développer sans impacter la principale",
      "Un serveur secondaire",
      "Un module d’extension"
    ],
    correct: 0,
    explanation: "Une branche permet de travailler sur des fonctionnalités ou correctifs séparément du code principal."
  },
  {
    theme: "Outils & Plateformes",
    question: "Qu'est-ce que SonarQube ?",
    answers: [
      "Un outil d'analyse de qualité du code",
      "Un langage de programmation",
      "Un serveur web"
    ],
    correct: 0,
    explanation: "SonarQube analyse le code pour détecter les bugs, failles et mauvaises pratiques."
  },
  {
    theme: "Outils & Plateformes",
    question: "Bonne pratique pour joindre des documents dans un ticket Jira ?",
    answers: [
      "Attacher captures, logs, jeux de données et lier commits/PRs ; nommer clairement et contrôler l’accès.",
      "Éviter toute pièce jointe pour alléger l’outil.",
      "Mettre un zip de la base de production pour simplifier la reproduction.",
      "Remplacer la description par une capture d’écran sans texte."
    ],
    correct: 0,
    explanation: "Des artefacts bien nommés et traçables (captures, logs, liens vers PR/CI) accélèrent la compréhension et la correction."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi une webapp ?",
    answers: [
      "Une application accessible depuis un navigateur web",
      "Une application installée sur un ordinateur uniquement",
      "Un logiciel sans interface graphique"
    ],
    correct: 0,
    explanation: "Une webapp est une application accessible via un navigateur, souvent responsive et pouvant fonctionner sur différents appareils."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi la différence entre une webapp et une application standard ?",
    answers: [
      "La webapp est accessible via un navigateur, l'application standard doit être installée",
      "La webapp fonctionne uniquement hors ligne",
      "La webapp ne peut pas avoir de base de données"
    ],
    correct: 0,
    explanation: "Une webapp fonctionne dans un navigateur, tandis qu'une application standard nécessite une installation locale."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi une API ?",
    answers: [
      "Un ensemble de règles permettant à des applications de communiquer entre elles",
      "Un type de base de données",
      "Un langage de programmation"
    ],
    correct: 0,
    explanation: "Une API définit comment deux systèmes peuvent interagir par le biais de requêtes et de réponses."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi une promesse en JavaScript ?",
    answers: [
      "Un objet représentant l'achèvement ou l'échec d'une opération asynchrone",
      "Une fonction qui s'exécute immédiatement",
      "Un script de sécurité"
    ],
    correct: 0,
    explanation: "Une promesse gère des opérations asynchrones et fournit un résultat futur."
  },
  {
    theme: "Web & Développement",
    question: "A quoi sert await dans un script JS ?",
    answers: [
      "Attendre qu'une promesse soit résolue avant de continuer l'exécution",
      "Lancer une fonction immédiatement",
      "Arrêter le script"
    ],
    correct: 0,
    explanation: "Await permet de suspendre l'exécution d'une fonction asynchrone jusqu'à ce qu'une promesse soit terminée."
  },
  {
    theme: "Web & Développement",
    question: "Peux-tu me donner la définition de Cloud Functions ?",
    answers: [
      "Du code exécuté à la demande dans le cloud sans gérer de serveur",
      "Un service de stockage en ligne",
      "Un outil de débogage"
    ],
    correct: 0,
    explanation: "Les Cloud Functions permettent d'exécuter du code dans un environnement géré, déclenché par des événements."
  },
  {
    theme: "Web & Développement",
    question: "Peux-tu m'expliquer ce qu'est NodeJS ?",
    answers: [
      "Un environnement d'exécution JavaScript côté serveur",
      "Un langage de programmation",
      "Une base de données"
    ],
    correct: 0,
    explanation: "NodeJS permet d'exécuter du JavaScript en dehors du navigateur, notamment pour le backend."
  },
  {
    theme: "Web & Développement",
    question: "Peux-tu m'expliquer ce qu'est Firebase ?",
    answers: [
      "Une plateforme de développement d'applications proposée par Google",
      "Un langage de programmation",
      "Un outil de versionning"
    ],
    correct: 0,
    explanation: "Firebase fournit des services comme l'hébergement, l'authentification et la base de données en temps réel."
  },
  {
    theme: "Web & Développement",
    question: "Peux-tu m'expliquer ce qu'est Angular ?",
    answers: [
      "Un framework JavaScript pour créer des applications web",
      "Un langage de programmation",
      "Une base de données"
    ],
    correct: 0,
    explanation: "Angular est un framework développé par Google pour créer des applications web dynamiques."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi une enum ?",
    answers: [
      "Un type de donnée énuméré avec des valeurs prédéfinies",
      "Une boucle de programmation",
      "Une variable temporaire"
    ],
    correct: 0,
    explanation: "Une enum permet de définir un ensemble constant de valeurs nommées."
  },
  {
    theme: "Web & Développement",
    question: "C'est quoi un locator dans du code JS ?",
    answers: [
      "Un sélecteur permettant de trouver un élément dans le DOM",
      "Une variable temporaire",
      "Un module d’importation"
    ],
    correct: 0,
    explanation: "Un locator est un identifiant (CSS, XPath, etc.) utilisé pour cibler un élément HTML dans le DOM."
  },
  {
    theme: "Web & Développement",
    question: "Quelle est la différence entre Front end et Back end ?",
    answers: [
      "Le front end est la partie visible par l’utilisateur, le back end gère la logique et les données",
      "Le front end gère les bases de données",
      "Le back end affiche l’interface"
    ],
    correct: 0,
    explanation: "Le front end est l’interface utilisateur, le back end traite les données et la logique métier."
  },
  {
    theme: "Web & Développement",
    question: "Quelle est la différence entre clé primaire et clé étrangère ?",
    answers: [
      "La clé primaire identifie de façon unique une ligne dans sa table ; la clé étrangère référence la clé primaire d’une autre table pour créer une relation.",
      "La clé primaire est toujours un texte ; la clé étrangère toujours un nombre.",
      "La clé étrangère identifie de façon unique une ligne ; la clé primaire référence une autre table.",
      "Elles sont strictement équivalentes et interchangeables."
    ],
    correct: 0,
    explanation: "PK = identifiant unique local ; FK = lien référentiel vers une autre table (intégrité référentielle)."
  },
  {
    theme: "Accessibilité",
    question: "C'est quoi un test RGA ?",
    answers: [
      "Un test de conformité réglementaire d’accessibilité",
      "Un test de performance réseau",
      "Un test de sécurité"
    ],
    correct: 0,
    explanation: "RGA signifie Référentiel Général d’Accessibilité et vérifie la conformité aux règles d’accessibilité numérique."
  },
  {
    theme: "Accessibilité",
    question: "Quelle approche est la plus adaptée pour tester l’accessibilité d’une application web ?",
    answers: [
      "Combiner des outils automatiques (linting, contrastes, ARIA) et des tests manuels (navigation clavier, lecteurs d’écran) selon les référentiels (WCAG/RGAA).",
      "Se fier à un seul outil automatique : s’il est vert, c’est conforme.",
      "Tester uniquement avec la souris car c’est l’usage majoritaire.",
      "Vérifier la charte graphique sans regarder le code."
    ],
    correct: 0,
    explanation: "Les tests d’accessibilité exigent des vérifications automatiques et manuelles (clavier, focus, lecteurs d’écran) par rapport aux critères WCAG/RGAA."
  },
  {
    theme: "Accessibilité",
    question: "Quelles références doit‑on connaître pour l’accessibilité web (France) ?",
    answers: [
      "Les WCAG (W3C) et le référentiel RGAA, qui en est l’adaptation française.",
      "Uniquement la norme ISO/IEC 27001 sur la sécurité de l’information.",
      "Le manifeste agile et les user stories d’accessibilité.",
      "Aucune : seule la charte graphique interne compte."
    ],
    correct: 0,
    explanation: "Les critères WCAG constituent la base internationale ; en France, le RGAA s’appuie sur les WCAG pour cadrer la conformité des sites publics."
  },
  {
    theme: "Organisation & rôles produit",
    question: "C'est quoi un CTPO ?",
    answers: [
      "Chief Technical and Product Officer",
      "Central Test Process Operator",
      "Cloud Technology Processing Option"
    ],
    correct: 0,
    explanation: "Le CTPO est un poste de direction qui combine les responsabilités techniques et produit."
  },
  {
    theme: "Organisation & rôles produit",
    question: "Quel est le rôle d'un CTPO ?",
    answers: [
      "Superviser la partie technique et produit d’une organisation",
      "Développer uniquement le backend",
      "Faire la maintenance des serveurs"
    ],
    correct: 0,
    explanation: "Le CTPO coordonne la vision produit et la stratégie technique."
  }
];

