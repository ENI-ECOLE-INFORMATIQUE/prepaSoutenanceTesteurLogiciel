// === DONNEES DU QUIZ - TESTEURS LOGICIELS ===
// Format : questionsData = { "Theme": [ { theme, question, level, answers, correct, explanation } ] }
// Niveaux : Debutant / Intermediaire / Avance

const questionsData = {
  "Fondamentaux du test": [
    {
      "theme": "Fondamentaux du test",
      "question": "Quel est le rôle principal d’un testeur logiciel ?",
      "level": "Débutant",
      "answers": [
        "Développer de nouvelles fonctionnalités",
        "Identifier les défauts et assurer la qualité du logiciel",
        "Gérer la base de données"
      ],
      "correct": 1,
      "explanation": "Le testeur a pour rôle de trouver les défauts et de garantir que le logiciel répond aux exigences qualité."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Qu’est-ce qu’un bug critique ?",
      "level": "Débutant",
      "answers": [
        "Un bug esthétique qui n’affecte pas le fonctionnement",
        "Un bug qui empêche l’utilisation de la fonctionnalité principale",
        "Un bug qui ralentit légèrement l’application"
      ],
      "correct": 1,
      "explanation": "Un bug critique est un défaut qui empêche le logiciel de fonctionner correctement ou bloque des fonctionnalités essentielles."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Que signifie 'flaky test' ?",
      "level": "Avancé",
      "answers": [
        "Un test qui échoue ou réussit de manière aléatoire",
        "Un test qui prend trop de temps",
        "Un test non automatisé"
      ],
      "correct": 0,
      "explanation": "Un flaky test est instable : il peut passer ou échouer sans modification du code."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Qu’est-ce que l’analyse des causes profondes (Root Cause Analysis) ?",
      "level": "Avancé",
      "answers": [
        "Une méthode pour identifier l’origine d’un bug",
        "Une étape de validation",
        "Un type de test de performance"
      ],
      "correct": 0,
      "explanation": "Le Root Cause Analysis vise à trouver la cause exacte d’un problème pour éviter qu’il ne se reproduise."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Qu’est-ce qu’un bug de type 'off-by-one' ?",
      "level": "Débutant",
      "answers": [
        "Une erreur dans un calcul où l’indice ou la limite est décalé de 1",
        "Un bug critique qui bloque le logiciel",
        "Un bug esthétique"
      ],
      "correct": 0,
      "explanation": "Les erreurs off-by-one se produisent souvent dans les boucles ou les indices, où une valeur est décalée d’une unité."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Peux-tu me donner la définition d'un Framework ?",
      "level": "Débutant",
      "answers": [
        "Un ensemble d’outils et de bibliothèques facilitant le développement",
        "Un langage de programmation",
        "Un type de serveur"
      ],
      "correct": 0,
      "explanation": "Un framework fournit une structure et des composants prêts à l’emploi pour accélérer le développement."
    },
    {
      "theme": "Fondamentaux du test",
      "question": "Qu'est-ce qu'un bug ?",
      "level": "Débutant",
      "answers": [
        "Un défaut dans un logiciel entraînant un comportement inattendu",
        "Une fonctionnalité optionnelle",
        "Un test automatisé"
      ],
      "correct": 0,
      "explanation": "Un bug est une erreur ou anomalie qui empêche le logiciel de fonctionner comme prévu."
    }
  ],
  "Types de tests": [
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test unitaire ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester l’ensemble de l’application",
        "Tester une fonction ou un module isolé",
        "Tester l’application sur plusieurs navigateurs"
      ],
      "correct": 1,
      "explanation": "Un test unitaire vérifie une petite partie du code (une fonction, un module) de manière isolée."
    },
    {
      "theme": "Types de tests",
      "question": "Quel est le but principal d’un test d’intégration ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester les performances du système",
        "Vérifier la compatibilité entre plusieurs modules",
        "Tester uniquement l’interface utilisateur"
      ],
      "correct": 1,
      "explanation": "Le test d’intégration consiste à vérifier que plusieurs composants ou modules fonctionnent correctement ensemble."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test de régression ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester les nouvelles fonctionnalités uniquement",
        "Vérifier qu’une modification n’a pas introduit de nouveaux bugs",
        "Exécuter uniquement des tests automatisés"
      ],
      "correct": 1,
      "explanation": "Un test de régression consiste à vérifier qu’une modification du code n’a pas cassé des fonctionnalités existantes."
    },
    {
      "theme": "Types de tests",
      "question": "Que signifie 'test exploratoire' ?",
      "level": "Intermédiaire",
      "answers": [
        "Test basé sur un plan prédéfini",
        "Test non-scripté où le testeur explore le logiciel",
        "Test automatisé pour détecter les bugs"
      ],
      "correct": 1,
      "explanation": "Le test exploratoire consiste à tester le logiciel sans scénario prédéfini, en explorant les fonctionnalités pour détecter des problèmes."
    },
    {
      "theme": "Types de tests",
      "question": "Quel est l’objectif des tests d’acceptation utilisateur (UAT) ?",
      "level": "Intermédiaire",
      "answers": [
        "Vérifier que le code est bien documenté",
        "S’assurer que le logiciel répond aux besoins des utilisateurs finaux",
        "Tester uniquement la sécurité de l’application"
      ],
      "correct": 1,
      "explanation": "Les tests d’acceptation utilisateur valident que le logiciel satisfait aux exigences et attentes des utilisateurs finaux."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test fumée (Smoke Test) ?",
      "level": "Intermédiaire",
      "answers": [
        "Un test rapide pour vérifier que l’application démarre et fonctionne globalement",
        "Un test pour vérifier la sécurité réseau",
        "Un test effectué uniquement après la mise en production"
      ],
      "correct": 0,
      "explanation": "Le test fumée valide les fonctionnalités principales avant de procéder à des tests plus détaillés."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test de compatibilité ?",
      "level": "Intermédiaire",
      "answers": [
        "Un test de performance",
        "Un test pour vérifier le fonctionnement sur différents environnements",
        "Un test de sécurité"
      ],
      "correct": 1,
      "explanation": "Le test de compatibilité valide que le logiciel fonctionne correctement sur différents navigateurs, systèmes, ou appareils."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test de sécurité ?",
      "level": "Intermédiaire",
      "answers": [
        "Un test visant à détecter les vulnérabilités du logiciel",
        "Un test qui mesure le temps de réponse",
        "Un test de validation métier"
      ],
      "correct": 0,
      "explanation": "Les tests de sécurité visent à identifier les failles de sécurité et à protéger les données."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un 'regression suite' ?",
      "level": "Intermédiaire",
      "answers": [
        "Un ensemble de tests automatisés pour vérifier qu’aucune régression n’est introduite",
        "Un document listant les défauts",
        "Une méthode de débogage"
      ],
      "correct": 0,
      "explanation": "Une regression suite regroupe tous les tests nécessaires pour détecter d’éventuelles régressions."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test end-to-end (E2E) ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester uniquement une fonction isolée",
        "Tester le parcours complet d’un utilisateur dans l’application",
        "Tester les performances du serveur"
      ],
      "correct": 1,
      "explanation": "Un test end-to-end simule l’expérience utilisateur de bout en bout pour s’assurer que tout fonctionne correctement ensemble."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test alpha et un test bêta ?",
      "level": "Intermédiaire",
      "answers": [
        "Alpha : interne, Beta : externe avec utilisateurs finaux",
        "Alpha : performance, Beta : sécurité",
        "Alpha et Beta sont identiques"
      ],
      "correct": 0,
      "explanation": "Les tests alpha sont effectués en interne avant la sortie officielle, tandis que les tests bêta impliquent de vrais utilisateurs pour détecter les problèmes restants."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test exploratoire en agile ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester uniquement selon un plan prédéfini",
        "Explorer librement l’application tout en créant des notes sur les bugs et les comportements",
        "Automatiser tous les tests"
      ],
      "correct": 1,
      "explanation": "Le test exploratoire en agile consiste à tester sans script précis, en s’adaptant aux découvertes et en documentant les problèmes."
    },
    {
      "theme": "Types de tests",
      "question": "Qu’est-ce qu’un test de régression partiel ?",
      "level": "Intermédiaire",
      "answers": [
        "Tester uniquement les modules affectés par une modification",
        "Tester toutes les fonctionnalités de l’application",
        "Tester uniquement les nouvelles fonctionnalités"
      ],
      "correct": 0,
      "explanation": "Un test de régression partiel vérifie uniquement les zones impactées par une modification pour gagner du temps tout en détectant les bugs potentiels."
    },
    {
      "theme": "Types de tests",
      "question": "Qu'est-ce que les 3A ?",
      "level": "Intermédiaire",
      "answers": [
        "Arrange, Act, Assert en test unitaire",
        "Analyse, Automatisation, Application",
        "Audit, Accessibilité, Approbation"
      ],
      "correct": 0,
      "explanation": "Les 3A représentent la structure Arrange (préparer), Act (agir), Assert (vérifier) en test unitaire."
    },
    {
      "theme": "Types de tests",
      "question": "C'est quoi gitlab ?",
      "level": "Intermédiaire",
      "answers": [
        "Une plateforme de gestion de code basée sur Git",
        "Un éditeur de texte",
        "Un serveur de base de données"
      ],
      "correct": 0,
      "explanation": "GitLab est un service de gestion de dépôts Git avec intégration continue et outils collaboratifs."
    },
    {
      "theme": "Types de tests",
      "question": "Laquelle est une spécification non fonctionnelle et son test associé ?",
      "level": "Avancé",
      "answers": [
        "Temps de réponse < 500 ms sous 200 utilisateurs → test de performance/charge.",
        "Pouvoir créer une facture → test fonctionnel de création.",
        "Avoir un bouton ‘Payer’ bleu → test d’UI visuelle uniquement.",
        "Ajouter un champ ‘commentaire’ → test de saisie basique."
      ],
      "correct": 0,
      "explanation": "Les NFR portent sur performance, sécurité, accessibilité, fiabilité, etc. et se valident via des tests non fonctionnels dédiés."
    },
    {
      "theme": "Types de tests",
      "question": "Que signifie la non‑régression ?",
      "level": "Intermédiaire",
      "answers": [
        "Qu’aucune fonctionnalité existante n’est dégradée après une modification ; on le vérifie par des tests de régression.",
        "Que la livraison est toujours plus rapide après chaque sprint.",
        "Que les performances augmentent automatiquement après un refactoring.",
        "Qu’aucun test ne doit jamais échouer en CI."
      ],
      "correct": 0,
      "explanation": "La non‑régression vise l’absence d’effets secondaires sur l’existant ; les suites de régression (souvent automatisées) la contrôlent."
    }
  ],
  "Tests de performance": [
    {
      "theme": "Tests de performance",
      "question": "Quel type de test se concentre sur la performance et la charge du système ?",
      "level": "Avancé",
      "answers": [
        "Test fonctionnel",
        "Test non-fonctionnel",
        "Test unitaire"
      ],
      "correct": 1,
      "explanation": "Les tests non-fonctionnels incluent les tests de performance, de charge, de sécurité ou d’accessibilité."
    },
    {
      "theme": "Tests de performance",
      "question": "Quelle est la principale différence entre un test fonctionnel et un test non-fonctionnel ?",
      "level": "Avancé",
      "answers": [
        "Le test fonctionnel se base sur les exigences métier, le non-fonctionnel sur la qualité du système",
        "Le test fonctionnel est toujours manuel, le non-fonctionnel toujours automatisé",
        "Il n’y a pas de différence"
      ],
      "correct": 0,
      "explanation": "Le test fonctionnel valide le comportement attendu du logiciel, le non-fonctionnel mesure ses performances, sécurité, etc."
    },
    {
      "theme": "Tests de performance",
      "question": "Quel est l’objectif d’un test de charge ?",
      "level": "Avancé",
      "answers": [
        "Tester la compatibilité entre navigateurs",
        "Vérifier la performance du système sous une forte utilisation",
        "Vérifier les permissions utilisateur"
      ],
      "correct": 1,
      "explanation": "Le test de charge évalue la performance du système lorsqu’il est soumis à un grand nombre d’utilisateurs ou de requêtes."
    },
    {
      "theme": "Tests de performance",
      "question": "Qu’est-ce qu’un test de montée en charge (Stress Test) ?",
      "level": "Avancé",
      "answers": [
        "Un test qui simule une augmentation progressive du nombre d’utilisateurs",
        "Un test de compatibilité",
        "Un test uniquement manuel"
      ],
      "correct": 0,
      "explanation": "Un stress test évalue la capacité du système à gérer une augmentation progressive de la charge."
    },
    {
      "theme": "Tests de performance",
      "question": "C'est quoi un test de charge ?",
      "level": "Avancé",
      "answers": [
        "Un test pour mesurer la performance sous forte utilisation",
        "Un test de compatibilité",
        "Un test de sécurité"
      ],
      "correct": 0,
      "explanation": "Le test de charge évalue le comportement du système lorsqu'il est sollicité intensivement."
    },
    {
      "theme": "Tests de performance",
      "question": "Comment faire un test de charge ?",
      "level": "Avancé",
      "answers": [
        "Simuler un grand nombre d’utilisateurs ou de requêtes simultanées",
        "Vérifier le code ligne par ligne",
        "Analyser le code statiquement"
      ],
      "correct": 0,
      "explanation": "Un test de charge se fait via des outils simulant de nombreux utilisateurs ou requêtes."
    },
    {
      "theme": "Tests de performance",
      "question": "Quelle est la principale différence entre un test de charge et un test de stress ?",
      "level": "Avancé",
      "answers": [
        "Le test de charge mesure sous forte utilisation, le stress pousse le système au-delà de ses limites",
        "Le test de charge est plus rapide",
        "Le test de stress est plus précis"
      ],
      "correct": 0,
      "explanation": "Le test de charge évalue les performances en usage intense, le stress cherche à provoquer la panne."
    },
    {
      "theme": "Tests de performance",
      "question": "C'est quoi un rapport Gatling ?",
      "level": "Avancé",
      "answers": [
        "Un rapport généré par un outil de test de charge",
        "Un document de sécurité",
        "Un diagramme de flux"
      ],
      "correct": 0,
      "explanation": "Gatling produit des rapports détaillés sur les performances et le comportement sous charge."
    }
  ],
  "Automatisation & CI/CD": [
    {
      "theme": "Automatisation & CI/CD",
      "question": "Qu’est-ce que l’automatisation des tests ?",
      "level": "Avancé",
      "answers": [
        "Exécuter les tests manuellement",
        "Utiliser des scripts pour exécuter les tests",
        "Ne plus faire de tests du tout"
      ],
      "correct": 1,
      "explanation": "L’automatisation consiste à utiliser des scripts pour exécuter des tests de manière régulière et efficace."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Que signifie 'mock' dans les tests ?",
      "level": "Avancé",
      "answers": [
        "Un faux objet ou service simulé pour isoler un test",
        "Un type de test automatisé",
        "Un script de déploiement"
      ],
      "correct": 0,
      "explanation": "Un mock est un objet simulé qui imite un composant réel pour isoler les tests."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Qu’est-ce que le 'code coverage' (couverture de code) ?",
      "level": "Avancé",
      "answers": [
        "Le pourcentage de lignes de code exécutées par les tests",
        "Le nombre de tests exécutés par jour",
        "La documentation des tests"
      ],
      "correct": 0,
      "explanation": "La couverture de code indique quelle proportion du code source est exécutée lors des tests."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Que signifie 'CI/CD' pour les tests automatisés ?",
      "level": "Avancé",
      "answers": [
        "Continuous Integration / Continuous Deployment",
        "Check Integration / Code Debug",
        "Code Inspection / Continuous Development"
      ],
      "correct": 0,
      "explanation": "CI/CD désigne un processus d’intégration et de déploiement continus qui inclut souvent l’exécution automatique de tests."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Que signifie 'pipeline de tests' dans CI/CD ?",
      "level": "Avancé",
      "answers": [
        "Une suite automatisée de tests exécutée à chaque modification du code",
        "Un document listant les tests",
        "Un outil de monitoring"
      ],
      "correct": 0,
      "explanation": "Un pipeline de tests est une chaîne automatisée qui exécute plusieurs types de tests après chaque mise à jour du code."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Quelle est la principale différence entre un test manuel et un test automatisé ?",
      "level": "Avancé",
      "answers": [
        "Le test manuel est exécuté par un humain, le test automatisé par un script",
        "Le test automatisé est toujours plus rapide",
        "Le test manuel ne détecte pas les bugs"
      ],
      "correct": 0,
      "explanation": "Le test manuel est effectué par un testeur humain, le test automatisé repose sur des scripts ou outils."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Que signifie 'regression testing automation' ?",
      "level": "Avancé",
      "answers": [
        "Automatiser tous les tests unitaires",
        "Automatiser les tests pour détecter des régressions rapidement",
        "Ne tester que les nouvelles fonctionnalités"
      ],
      "correct": 1,
      "explanation": "Il s’agit de mettre en place des tests automatisés afin de détecter rapidement les régressions après une modification du code."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Pourquoi utilise-t-on des tests unitaires mocks et stubs ?",
      "level": "Avancé",
      "answers": [
        "Pour simplifier le code source",
        "Pour isoler les composants et tester uniquement la logique ciblée",
        "Pour accélérer l’exécution du serveur"
      ],
      "correct": 1,
      "explanation": "Mocks et stubs remplacent certains composants afin que le test se concentre uniquement sur l’unité testée."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Qu’est-ce qu’un test de fumée automatisé ?",
      "level": "Avancé",
      "answers": [
        "Un test rapide exécuté automatiquement pour vérifier les fonctionnalités de base",
        "Un test qui mesure le temps de réponse",
        "Un test manuel complexe"
      ],
      "correct": 0,
      "explanation": "Les tests de fumée automatisés valident rapidement que l’application démarre et que les fonctionnalités essentielles fonctionnent."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Qu'est-ce que Playwright ?",
      "level": "Avancé",
      "answers": [
        "Un outil de test automatisé pour navigateurs",
        "Un langage de programmation",
        "Un outil de gestion de projet"
      ],
      "correct": 0,
      "explanation": "Playwright permet d'automatiser les tests de navigateurs pour vérifier le comportement des applications web."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Quels sont les bénéfices ET les limites réelles de l’automatisation des tests ?",
      "level": "Avancé",
      "answers": [
        "Elle réduit le temps d’exécution et sécurise les régressions, mais exige un investissement initial et une maintenance continue, et ne remplace pas les tests exploratoires.",
        "Elle remplace totalement les testeurs une fois en place et ne nécessite plus de maintenance.",
        "Elle est surtout utile pour les tests d’interface manuels et lente pour les régressions.",
        "Elle ne sert qu’aux tests de performance et n’apporte rien en recette fonctionnelle."
      ],
      "correct": 0,
      "explanation": "Automatiser apporte vitesse, répétabilité et feedback rapide, mais demande du design, du code et une maintenance des scripts. Certains tests (exploratoires, ergonomie, aspects UX) restent manuels."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Quels critères privilégier pour choisir un framework d’automatisation ?",
      "level": "Avancé",
      "answers": [
        "Compatibilité avec le stack technique, stabilité, écosystème/plugins, intégration CI/CD, facilité de prise en main et maintenance.",
        "Popularité sur les réseaux sociaux et présence d’un thème sombre.",
        "Exigence d’écrire tout en framework maison pour garder le contrôle total.",
        "Le framework le plus complexe, car il couvrira forcément tous les besoins."
      ],
      "correct": 0,
      "explanation": "Le bon choix s’appuie sur la compatibilité (langage/outils), la robustesse, l’écosystème, l’intégration CI/CD, la maintenabilité et la courbe d’apprentissage."
    },
    {
      "theme": "Automatisation & CI/CD",
      "question": "Quel est le rôle des tests automatisés dans une chaîne CI/CD ?",
      "level": "Avancé",
      "answers": [
        "Fournir un feedback rapide et bloquer le merge/déploiement si des tests critiques échouent.",
        "Créer des rapports uniquement après la mise en production.",
        "Remplacer la revue de code.",
        "Déployer automatiquement même si des tests échouent, pour gagner du temps."
      ],
      "correct": 0,
      "explanation": "La CI exécute automatiquement les suites de tests et empêche l’intégration/livraison en cas d’échec, améliorant la qualité et la vitesse de livraison."
    }
  ],
  "Méthodes & Agile": [
    {
      "theme": "Méthodes & Agile",
      "question": "Que signifie 'BDD' dans le contexte des tests ?",
      "level": "Avancé",
      "answers": [
        "Base De Données",
        "Behavior Driven Development",
        "Bug Detection Delay"
      ],
      "correct": 1,
      "explanation": "BDD signifie Behavior Driven Development : une méthode qui décrit les fonctionnalités en langage naturel pour faciliter la compréhension."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Que signifie 'TDD' ?",
      "level": "Avancé",
      "answers": [
        "Test Driven Development",
        "Technical Data Documentation",
        "Total Debugging Duration"
      ],
      "correct": 0,
      "explanation": "TDD signifie Test Driven Development : on écrit d'abord les tests avant le code."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "En TDD, quelle est la séquence typique ?",
      "level": "Avancé",
      "answers": [
        "Fail → Pass → Refactor",
        "Write Code → Test → Debug",
        "Plan → Implement → Release"
      ],
      "correct": 0,
      "explanation": "En TDD, on écrit un test qui échoue (Fail), on écrit le code pour le faire passer (Pass), puis on améliore le code (Refactor)."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Pourquoi utilise-t-on des environnements de préproduction pour les tests ?",
      "level": "Intermédiaire",
      "answers": [
        "Pour tester sur un environnement identique à la production sans impacter les utilisateurs",
        "Pour accélérer les tests",
        "Pour réduire les coûts"
      ],
      "correct": 0,
      "explanation": "Les environnements de préproduction permettent de tester dans des conditions réelles avant la mise en ligne."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Que signifie 'shift-left testing' ?",
      "level": "Débutant",
      "answers": [
        "Effectuer les tests plus tôt dans le cycle de développement",
        "Tester uniquement la production",
        "Reporter les tests à la fin du projet"
      ],
      "correct": 0,
      "explanation": "Le 'shift-left' vise à détecter les bugs dès le début du développement pour réduire les coûts et améliorer la qualité."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Quelle est l’utilité d’un test pair-review ?",
      "level": "Débutant",
      "answers": [
        "Deux testeurs vérifient le même scénario pour améliorer la qualité et détecter plus de bugs",
        "Deux développeurs écrivent du code ensemble",
        "Deux utilisateurs valident la fonctionnalité"
      ],
      "correct": 0,
      "explanation": "Le test pair-review permet de combiner l’expérience de deux testeurs pour identifier plus efficacement les anomalies."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "A quoi sert un planning poker ?",
      "level": "Débutant",
      "answers": [
        "Estimer la complexité des tâches en Agile",
        "Planifier des réunions",
        "Créer des diagrammes"
      ],
      "correct": 0,
      "explanation": "Le planning poker est une technique Agile pour estimer les efforts nécessaires à une tâche."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Combien de temps dure un sprint en méthode Agile ?",
      "level": "Débutant",
      "answers": [
        "En général entre 1 et 4 semaines",
        "Toujours 1 semaine",
        "Toujours 1 mois"
      ],
      "correct": 0,
      "explanation": "La durée d'un sprint est fixée entre 1 et 4 semaines selon l'équipe et le projet."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Quelle est la première étape de la planification d'un test Agile ?",
      "level": "Intermédiaire",
      "answers": [
        "Identifier les critères d'acceptation et les user stories",
        "Coder les fonctionnalités",
        "Faire un test de performance"
      ],
      "correct": 0,
      "explanation": "En Agile, on commence par analyser les user stories et définir les critères d’acceptation."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Quand est-ce qu'on fait un sprint review ?",
      "level": "Débutant",
      "answers": [
        "À la fin du sprint pour présenter le travail accompli",
        "Au début du sprint",
        "Avant chaque test unitaire"
      ],
      "correct": 0,
      "explanation": "Le sprint review se tient à la fin de chaque sprint pour présenter les fonctionnalités livrées."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Quel est le rôle d'un Product Owner ?",
      "level": "Intermédiaire",
      "answers": [
        "Définir la vision produit et prioriser le backlog",
        "Coder les fonctionnalités",
        "Tester le produit"
      ],
      "correct": 0,
      "explanation": "Le Product Owner gère la vision produit, les priorités et le backlog."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Quels sont les 4 piliers de l'agilité ?",
      "level": "Débutant",
      "answers": [
        "Individus et interactions, logiciel fonctionnel, collaboration client, adaptation au changement",
        "Planification stricte, documentation, validation client, tests automatisés",
        "Itérations, sprints, user stories, tests"
      ],
      "correct": 0,
      "explanation": "Les 4 piliers de l’agilité viennent du manifeste agile : individus/interactions, logiciel fonctionnel, collaboration client, adaptation."
    },
    {
      "theme": "Méthodes & Agile",
      "question": "Comment adapter la communication des résultats entre Product Owner et développeurs ?",
      "level": "Débutant",
      "answers": [
        "PO : synthèse risques/impacts et décisions ; Développeurs : détails techniques, logs, steps reproductibles et priorité d’actions.",
        "Envoyer le même rapport verbeux à tout le monde.",
        "Ne communiquer que les succès pour ne pas bloquer la roadmap.",
        "Réserver les résultats aux testeurs uniquement."
      ],
      "correct": 0,
      "explanation": "Un reporting efficace est ciblé : décisionnel et orienté valeur pour le PO ; actionnable et technique pour l’équipe de dev."
    }
  ],
  "Plan de test": [
    {
      "theme": "Plan de test",
      "question": "Dans un plan de test, que contient la section 'préconditions' ?",
      "level": "Intermédiaire",
      "answers": [
        "Les étapes pour exécuter le test",
        "Les conditions à remplir avant d’exécuter le test",
        "Les résultats attendus"
      ],
      "correct": 1,
      "explanation": "Les préconditions décrivent l’état initial requis avant d’exécuter un test."
    },
    {
      "theme": "Plan de test",
      "question": "Qu’est-ce qu’un plan de test dans le processus de test logiciel ?",
      "level": "Intermédiaire",
      "answers": [
        "Un document qui décrit la stratégie, les objectifs, les ressources et le planning des activités de test.",
        "Un document qui recense uniquement les bugs rencontrés.",
        "Un rapport final envoyé au client à la fin du projet.",
        "Un cahier des charges pour les développeurs."
      ],
      "correct": 0,
      "explanation": "Le plan de test est un document de référence qui décrit la stratégie globale de test, ses objectifs, les ressources nécessaires et la planification."
    },
    {
      "theme": "Plan de test",
      "question": "Que contient généralement un plan de test ?",
      "level": "Avancé",
      "answers": [
        "Les objectifs de test, le périmètre, les ressources, les environnements, la stratégie et le planning.",
        "Uniquement la liste des cas de test.",
        "Les tickets de bug et leurs correctifs.",
        "Uniquement les résultats d’exécution."
      ],
      "correct": 0,
      "explanation": "Un plan de test comprend : objectifs, périmètre, stratégie, ressources, environnement, risques, planning et critères d’entrée/sortie."
    },
    {
      "theme": "Plan de test",
      "question": "Quelle différence entre un plan de test (ISTQB) et une suite de tests ?",
      "level": "Intermédiaire",
      "answers": [
        "Le plan de test décrit la stratégie, le périmètre, les ressources et le planning ; la suite de tests est l’ensemble structuré de cas exécutables.",
        "Aucune : ce sont deux termes pour la même chose.",
        "Le plan de test contient uniquement la liste des bugs ; la suite de tests, la stratégie.",
        "La suite de tests est un document managérial, le plan de test est un script automatisé."
      ],
      "correct": 0,
      "explanation": "Le plan de test est un document de pilotage ; la suite de tests regroupe les cas destinés à l’exécution. Les deux sont complémentaires."
    },
    {
      "theme": "Plan de test",
      "question": "Que faire face à une spécification ambiguë ou incomplète ?",
      "level": "Intermédiaire",
      "answers": [
        "Demander une clarification (PO/BA), documenter les questions, proposer des exemples/exemples concrets et aligner les critères d’acceptation.",
        "Interpréter seul pour gagner du temps et écrire les tests selon son intuition.",
        "Ignorer la spécification et tester uniquement le comportement actuel.",
        "Reporter le sujet en production pour décider plus tard."
      ],
      "correct": 0,
      "explanation": "La clarification amont évite les malentendus : questions écrites, exemples, critères d’acceptation et mise à jour des artefacts."
    },
    {
      "theme": "Plan de test",
      "question": "Quel principe de base pour établir un plan d’exécution des tests ?",
      "level": "Avancé",
      "answers": [
        "Prioriser par risque/criticité métier, gérer les dépendances et la disponibilité des environnements/données.",
        "Exécuter par ordre alphabétique des cas de test.",
        "Toujours commencer par les tests les plus longs.",
        "Lancer tous les cas en parallèle sans tenir compte des environnements."
      ],
      "correct": 0,
      "explanation": "Un scheduling efficace tient compte du risque, des prérequis (données/env), des fenêtres de tir et des ressources."
    },
    {
      "theme": "Plan de test",
      "question": "Quels critères d’entrée/sortie doit-on définir dans un plan de test ?",
      "level": "Intermédiaire",
      "answers": [
        "Critères d’entrée : environnements/données/prérequis prêts ; critères de sortie : couverture, taux d’échec toléré, anomalies critiques closes.",
        "Uniquement le nombre de testeurs disponibles.",
        "La liste des frameworks d’automatisation supportés.",
        "Le budget total du projet et le planning des sprints."
      ],
      "correct": 0,
      "explanation": "Les critères d’entrée/sortie (entry/exit) encadrent le démarrage et l’arrêt : disponibilité des moyens, niveau de couverture et qualité minimale attendue."
    }
  ],
  "Cas de test": [
    {
      "theme": "Cas de test",
      "question": "Pourquoi documenter les cas de test ?",
      "level": "Intermédiaire",
      "answers": [
        "Pour pouvoir répéter les tests et assurer la traçabilité",
        "Pour remplir la documentation du projet",
        "Pour éviter d’utiliser des outils de test"
      ],
      "correct": 0,
      "explanation": "Documenter les cas de test permet de les reproduire et de garantir un suivi clair."
    },
    {
      "theme": "Cas de test",
      "question": "C'est quoi un cahier de tests ?",
      "level": "Débutant",
      "answers": [
        "Un document listant les scénarios et cas de test",
        "Un rapport d'incidents",
        "Un guide utilisateur"
      ],
      "correct": 0,
      "explanation": "Le cahier de tests recense tous les cas de tests à exécuter pour vérifier un logiciel."
    },
    {
      "theme": "Cas de test",
      "question": "Qu’est-ce qu’un cas de test ?",
      "level": "Intermédiaire",
      "answers": [
        "Un scénario documenté qui décrit les conditions, les données, les actions et les résultats attendus pour vérifier une fonctionnalité.",
        "Un bug identifié dans le logiciel.",
        "Un script automatisé exécuté par un outil.",
        "Une documentation de projet sans lien avec les tests."
      ],
      "correct": 0,
      "explanation": "Un cas de test est un scénario structuré qui permet de valider une fonctionnalité précise en suivant des conditions d’entrée, des étapes et des résultats attendus."
    },
    {
      "theme": "Cas de test",
      "question": "Que doit contenir un cas de test bien rédigé ?",
      "level": "Intermédiaire",
      "answers": [
        "Un identifiant unique, un objectif, des prérequis, des étapes, des données de test et un résultat attendu.",
        "Uniquement un résultat attendu.",
        "Un descriptif général de l’application.",
        "Les anomalies rencontrées sur le projet."
      ],
      "correct": 0,
      "explanation": "Un cas de test doit contenir : identifiant, description/objectif, prérequis, étapes détaillées, données de test, résultats attendus et état."
    },
    {
      "theme": "Cas de test",
      "question": "Quel est l’enchaînement logique d’un scénario de test bien rédigé ?",
      "level": "Intermédiaire",
      "answers": [
        "Préconditions → Étapes → Résultats attendus → Post‑conditions",
        "Résultats attendus → Étapes → Préconditions → Post‑conditions",
        "Étapes → Préconditions → Résultats attendus → Post‑conditions",
        "Préconditions → Post‑conditions → Étapes → Résultats attendus"
      ],
      "correct": 0,
      "explanation": "Un scénario clair pose le contexte (préconditions), décrit l’action (étapes), précise le résultat attendu et éventuellement les post‑conditions pour remettre le système dans un état propre."
    },
    {
      "theme": "Cas de test",
      "question": "Quel principe est recommandé pour rédiger un cas de test efficace ?",
      "level": "Intermédiaire",
      "answers": [
        "Un cas = un objectif clair, des données précises, des étapes reproductibles et un résultat attendu mesurable.",
        "Regrouper le maximum de vérifications hétérogènes dans un seul cas pour gagner du temps.",
        "Omettre les données de test pour éviter de figer le scénario.",
        "Écrire uniquement le résultat attendu sans détailler les étapes."
      ],
      "correct": 0,
      "explanation": "Des cas atomiques et reproductibles facilitent l’exécution, l’automatisation et l’analyse des échecs."
    },
    {
      "theme": "Cas de test",
      "question": "Quelle démarche permet de dériver des cas de test à partir des spécifications fonctionnelles ?",
      "level": "Intermédiaire",
      "answers": [
        "Identifier les critères d’acceptation par user story, définir les scénarios (heureux/erreur/bords) et écrire des cas traçables.",
        "Attendre la fin du développement puis improviser des tests exploratoires uniquement.",
        "Écrire des cas de test sans lire les spécifications pour rester neutre.",
        "Se limiter aux scénarios heureux afin de simplifier la recette."
      ],
      "correct": 0,
      "explanation": "L’ingénierie des tests part des exigences/US et critères d’acceptation pour couvrir cas nominal, erreurs et limites, avec traçabilité bidirectionnelle."
    }
  ],
  "Rapport d’exécution": [
    {
      "theme": "Rapport d’exécution",
      "question": "Qu’est-ce qu’un rapport d’exécution de test ?",
      "level": "Intermédiaire",
      "answers": [
        "Un document qui présente les résultats des cas de test exécutés, leur statut (succès/échec) et les anomalies détectées.",
        "Un plan prévisionnel des tests.",
        "Un cahier des charges fonctionnel.",
        "Un script de test automatisé."
      ],
      "correct": 0,
      "explanation": "Le rapport d’exécution fournit une vision claire des résultats des tests, des cas réussis, échoués et des anomalies détectées."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Que doit contenir un rapport d’exécution ?",
      "level": "Intermédiaire",
      "answers": [
        "La liste des cas de test exécutés, leur statut, les anomalies rencontrées et une synthèse globale.",
        "Uniquement les bugs corrigés.",
        "Les cas de test qui n’ont pas encore été rédigés.",
        "La documentation technique du produit."
      ],
      "correct": 0,
      "explanation": "Un rapport d’exécution inclut : cas exécutés, résultats, anomalies, statistiques et une synthèse pour les parties prenantes."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Comment transmettre efficacement un rapport d’exécution aux parties prenantes ?",
      "level": "Intermédiaire",
      "answers": [
        "En utilisant un format clair (PDF, outil de gestion de tests, email) et en adaptant le niveau de détail selon le public.",
        "Uniquement par oral lors d’une réunion.",
        "En envoyant les fichiers de logs bruts.",
        "En stockant le rapport sans le partager."
      ],
      "correct": 0,
      "explanation": "Un rapport doit être transmis dans un format adapté (document ou outil) et présenter un niveau de détail compréhensible pour le public (manager, client, équipe technique)."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Quels éléments clés présenter lors d’un reporting de tests ?",
      "level": "Avancé",
      "answers": [
        "Taux de réussite/échec, cas bloqués, couverture, risques et tendances, avec un focus sur les impacts métier.",
        "La liste exhaustive des logs techniques uniquement.",
        "Uniquement les succès pour rassurer les parties prenantes.",
        "Le nom des testeurs et la durée quotidienne de chacun."
      ],
      "correct": 0,
      "explanation": "Un bon reporting combine indicateurs quantitatifs et analyse des risques pour aider à la décision (go/no‑go, priorisation)."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Comment garantir la confidentialité lors d’une présentation des résultats ?",
      "level": "Intermédiaire",
      "answers": [
        "Anonymiser/masquer les données sensibles, limiter les accès, partager le strict nécessaire et utiliser des environnements non‑prod.",
        "Utiliser des données de production en clair pour rester fidèle à la réalité.",
        "Transférer tous les dumps de base de données pour que chacun puisse vérifier.",
        "Envoyer les rapports à l’ensemble de l’entreprise pour transparence totale."
      ],
      "correct": 0,
      "explanation": "La confidentialité passe par l’anonymisation, le masquage, le contrôle d’accès et l’absence de données personnelles réelles dans les supports."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Quels KPI sont utiles pour une décision Go/No‑Go ?",
      "level": "Avancé",
      "answers": [
        "Taux de réussite, défauts ouverts (par sévérité), tendance des échecs, couverture et risques résiduels.",
        "Le nombre de commits par développeur.",
        "Le volume d’emails envoyés pendant le sprint.",
        "La taille des logs générés par l’application."
      ],
      "correct": 0,
      "explanation": "Les KPI doivent éclairer le risque produit : statut des tests, défauts critiques, couverture, tendances et impacts métier."
    },
    {
      "theme": "Rapport d’exécution",
      "question": "Quel format de restitution facilite la compréhension rapide par les décideurs ?",
      "level": "Intermédiaire",
      "answers": [
        "Un tableau de bord synthétique (tendances, heatmaps, défauts critiques) accompagné d’un résumé des risques.",
        "Un export brut de tous les logs et des cas détaillés.",
        "Une présentation uniquement textuelle de 30 pages.",
        "Des captures d’écran sans légende."
      ],
      "correct": 0,
      "explanation": "Une vue exécutive synthétique + détails sur demande accélère les décisions sans noyer l’audience."
    }
  ],
  "Ticket de bug": [
    {
      "theme": "Ticket de bug",
      "question": "Qu’est-ce qu’un ticket de bug ?",
      "level": "Intermédiaire",
      "answers": [
        "Un enregistrement dans un outil de suivi permettant de décrire, prioriser et suivre la résolution d’une anomalie.",
        "Un document qui décrit les objectifs de test.",
        "Un cas de test automatisé.",
        "Un rapport final de projet."
      ],
      "correct": 0,
      "explanation": "Un ticket de bug est une fiche descriptive dans un outil de suivi (Jira, Redmine, etc.) qui permet de signaler une anomalie et d’en suivre l’évolution."
    },
    {
      "theme": "Ticket de bug",
      "question": "Que doit contenir un ticket de bug bien rédigé ?",
      "level": "Intermédiaire",
      "answers": [
        "Un titre clair, un identifiant, la description, la sévérité, la priorité, l’environnement, les étapes de reproduction, le résultat obtenu et le résultat attendu.",
        "Uniquement une capture d’écran.",
        "Le code source du module concerné.",
        "Les objectifs du plan de test."
      ],
      "correct": 0,
      "explanation": "Un ticket de bug doit être précis : titre, description, sévérité, priorité, environnement, étapes de reproduction, résultat obtenu vs attendu et éventuellement des pièces jointes."
    },
    {
      "theme": "Ticket de bug",
      "question": "Quel élément améliore le plus la capacité à reproduire une anomalie ?",
      "level": "Intermédiaire",
      "answers": [
        "Des étapes de reproduction précises avec données, contexte, captures/logs et résultat attendu vs obtenu.",
        "Un titre créatif et court sans détails.",
        "Uniquement le code source soupçonné.",
        "La sévérité sans description."
      ],
      "correct": 0,
      "explanation": "La qualité d’un ticket repose sur la reproductibilité : étapes, données, environnement, preuves et attente métier."
    },
    {
      "theme": "Ticket de bug",
      "question": "Laquelle des propositions décrit correctement la différence entre sévérité et priorité ?",
      "level": "Avancé",
      "answers": [
        "La sévérité mesure l’impact fonctionnel/technique ; la priorité définit l’urgence de correction.",
        "La sévérité est décidée par le PO ; la priorité par le testeur.",
        "La priorité est l’impact, la sévérité l’ordre d’exécution.",
        "Ce sont des synonymes."
      ],
      "correct": 0,
      "explanation": "Sévérité = gravité du dysfonctionnement ; priorité = ordre/urgence de traitement, décidé selon le risque et le contexte projet."
    },
    {
      "theme": "Ticket de bug",
      "question": "Quel est le workflow standard d’un ticket d’anomalie ?",
      "level": "Débutant",
      "answers": [
        "Nouveau → En cours → Résolu → Vérifié/Retest → Fermé",
        "Nouveau → Fermé → Résolu → En cours",
        "Résolu → Nouveau → En cours → Fermé",
        "En cours → Nouveau → Fermé → Résolu"
      ],
      "correct": 0,
      "explanation": "Le flux standard va de la création à la résolution, puis à la vérification par le testeur avant fermeture."
    },
    {
      "theme": "Ticket de bug",
      "question": "Comment documenter un défaut intermittent (flaky) ?",
      "level": "Intermédiaire",
      "answers": [
        "Préciser la fréquence, les conditions observées, ajouter logs/vidéos et hypothèses, puis marquer le ticket comme intermittent.",
        "Le fermer car il n’est pas systématique.",
        "Retirer toutes les informations pour éviter de biaiser l’analyse.",
        "Le requalifier en amélioration."
      ],
      "correct": 0,
      "explanation": "Les défauts intermittents nécessitent des preuves (logs/vidéos), un contexte précis et un suivi pour corrélation."
    },
    {
      "theme": "Ticket de bug",
      "question": "Que faire si le testeur ne parvient pas à reproduire un bug ?",
      "level": "Intermédiaire",
      "answers": [
        "Demander des informations complémentaires (données, environnement, version), ajouter instrumentation et tenter en conditions proches.",
        "Supposer qu’il est corrigé et fermer le ticket.",
        "Baisser la sévérité automatiquement.",
        "Attendre la production pour décider."
      ],
      "correct": 0,
      "explanation": "La reproduction passe par la collecte d’informations, l’alignement d’environnement et parfois l’ajout de logs/instrumentation."
    }
  ],
  "Cahier de tests": [
    {
      "theme": "Cahier de tests",
      "question": "Que doit-on mettre dans un cahier de tests ?",
      "level": "Intermédiaire",
      "answers": [
        "Les prérequis, scénarios, résultats attendus et observés",
        "Uniquement les bugs détectés",
        "Les tâches de développement"
      ],
      "correct": 0,
      "explanation": "Un cahier de tests contient les préconditions, les étapes de test, les résultats attendus et ceux observés."
    },
    {
      "theme": "Cahier de tests",
      "question": "Quel est l’objectif principal d’un cahier de tests ?",
      "level": "Débutant",
      "answers": [
        "Décrire l’ensemble des cas permettant de vérifier les exigences et soutenir la traçabilité et le pilotage.",
        "Lister uniquement les anomalies rencontrées.",
        "Remplacer le backlog produit.",
        "Documenter la charte graphique."
      ],
      "correct": 0,
      "explanation": "Le cahier de tests structure la couverture par rapport aux exigences et sert de base de pilotage qualité."
    },
    {
      "theme": "Cahier de tests",
      "question": "Quels éléments clés figurent dans un cahier de tests complet ?",
      "level": "Intermédiaire",
      "answers": [
        "Index, périmètre, traçabilité exigences↔tests, cas détaillés, statut, risques et historique des exécutions.",
        "Uniquement les user stories.",
        "Uniquement les environnements techniques.",
        "Uniquement la liste des testeurs."
      ],
      "correct": 0,
      "explanation": "Un cahier de tests complet relie exigences et cas, suit l’état d’exécution et met en évidence les risques."
    },
    {
      "theme": "Cahier de tests",
      "question": "Comment assurer la traçabilité entre exigences et cas de test ?",
      "level": "Intermédiaire",
      "answers": [
        "À l’aide d’une matrice de traçabilité bidirectionnelle (exigence ↔ cas ↔ défauts).",
        "En reliant seulement les cas entre eux.",
        "En supprimant les identifiants uniques.",
        "En stockant les documents sur des partages non versionnés."
      ],
      "correct": 0,
      "explanation": "La matrice de traçabilité garantit la couverture et facilite l’analyse d’impact lors des changements."
    },
    {
      "theme": "Cahier de tests",
      "question": "Comment gérer les versions du cahier de tests ?",
      "level": "Avancé",
      "answers": [
        "Baseliner par release, versionner les changements et tracer les cas ajoutés/modifiés/supprimés.",
        "Écraser toujours le document précédent.",
        "Ne pas dater les modifications pour alléger le suivi.",
        "Multiplier les copies e‑mail sans référentiel commun."
      ],
      "correct": 0,
      "explanation": "Le versioning par release facilite les audits et la reproductibilité des campagnes."
    },
    {
      "theme": "Cahier de tests",
      "question": "Quelles techniques de conception peut-on consigner pour guider la couverture ?",
      "level": "Intermédiaire",
      "answers": [
        "Partitions d’équivalence, valeurs limites, tables de décision, cas d’usage et diagrammes d’états.",
        "Exclusivement des tests exploratoires.",
        "Uniquement les tests de performance.",
        "Uniquement des tests UI."
      ],
      "correct": 0,
      "explanation": "Les techniques de conception aident à systématiser la couverture et à réduire le nombre de cas redondants."
    },
    {
      "theme": "Cahier de tests",
      "question": "Comment maintenir le cahier de tests à jour pendant le projet ?",
      "level": "Intermédiaire",
      "answers": [
        "Mettre en place un processus de revue (PO/QA/Dev), actualiser après chaque changement d’exigence et marquer les cas impactés.",
        "Le figer en début de projet et ne plus le modifier.",
        "Supprimer les cas obsolètes sans trace.",
        "Laisser chaque testeur le modifier librement sans revue."
      ],
      "correct": 0,
      "explanation": "Les revues régulières et l’annotation des impacts assurent l’actualité du référentiel de tests."
    }
  ],
  "Vérification & Confirmation": [
    {
      "theme": "Vérification & Confirmation",
      "question": "Dans les tests automatisés, que signifie 'assertion' ?",
      "level": "Intermédiaire",
      "answers": [
        "Une commande qui vérifie si une condition est vraie",
        "Une configuration de serveur",
        "Une mesure de performance"
      ],
      "correct": 0,
      "explanation": "Une assertion est une vérification qui confirme qu’un résultat obtenu correspond au résultat attendu."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Qu'est-ce qu'un test de vérification ?",
      "level": "Intermédiaire",
      "answers": [
        "Un test qui permet de vérifier que le logiciel respecte les spécifications et exigences définies.",
        "Un test réalisé uniquement après la mise en production.",
        "Un test qui sert à vérifier la performance de l'application.",
        "Un test réalisé uniquement par les utilisateurs finaux."
      ],
      "correct": 0,
      "explanation": "Les tests de vérification consistent à s'assurer que le produit respecte les spécifications et exigences définies (validation de la conception par rapport au cahier des charges)."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "À quel moment effectue-t-on généralement des tests de vérification ?",
      "level": "Intermédiaire",
      "answers": [
        "Pendant les phases de développement et d'intégration.",
        "Uniquement en production.",
        "Après la livraison finale au client.",
        "Seulement si une anomalie est détectée."
      ],
      "correct": 0,
      "explanation": "Les tests de vérification sont effectués pendant le développement et l’intégration pour s’assurer que chaque module respecte les spécifications avant la validation globale."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Qu'est-ce qu'un test de confirmation ?",
      "level": "Intermédiaire",
      "answers": [
        "Un test qui permet de vérifier qu'un bug corrigé ne réapparaît plus.",
        "Un test qui valide la conformité du produit aux spécifications initiales.",
        "Un test de charge exécuté pour confirmer la performance.",
        "Un test obligatoire avant la mise en production."
      ],
      "correct": 0,
      "explanation": "Un test de confirmation est exécuté pour s’assurer qu’un défaut signalé a bien été corrigé et que la fonctionnalité concernée fonctionne désormais correctement."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Quelle est la différence entre un test de régression et un test de confirmation ?",
      "level": "Intermédiaire",
      "answers": [
        "Le test de confirmation vérifie qu'un bug corrigé est bien résolu, tandis que le test de régression s'assure que la correction n'a pas introduit de nouveaux problèmes ailleurs.",
        "Le test de régression et le test de confirmation sont identiques.",
        "Le test de régression se concentre sur les performances, le test de confirmation sur la sécurité.",
        "Le test de confirmation se fait avant livraison, le test de régression après."
      ],
      "correct": 0,
      "explanation": "Le test de confirmation valide la correction d’un bug précis, tandis que le test de régression vérifie que cette correction n’a pas impacté négativement d’autres fonctionnalités."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Quelle est la principale différence entre un test de vérification et un test de confirmation ?",
      "level": "Débutant",
      "answers": [
        "La vérification s’assure que le produit respecte les spécifications, tandis que la confirmation vérifie qu’un bug corrigé fonctionne correctement.",
        "La vérification est faite après la livraison, la confirmation avant la livraison.",
        "La vérification teste uniquement les performances, la confirmation uniquement la sécurité.",
        "La vérification est réalisée par le client, la confirmation par le développeur."
      ],
      "correct": 0,
      "explanation": "La vérification se concentre sur la conformité aux spécifications initiales, tandis que la confirmation consiste à tester la correction d’un bug précis."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Dans quel cas utiliserait-on un test de vérification plutôt qu’un test de confirmation ?",
      "level": "Intermédiaire",
      "answers": [
        "Lorsqu’on veut valider que les fonctionnalités développées respectent les spécifications.",
        "Lorsqu’on veut s’assurer qu’un bug corrigé est bien résolu.",
        "Lorsqu’on veut tester les performances sous forte charge.",
        "Lorsqu’on veut valider la sécurité de l’application."
      ],
      "correct": 0,
      "explanation": "On utilise un test de vérification pour valider que les fonctionnalités sont conformes aux spécifications. Le test de confirmation, lui, intervient après correction d’un défaut."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Quel type de test est directement lié au cycle de correction d’anomalies ?",
      "level": "Débutant",
      "answers": [
        "Le test de confirmation.",
        "Le test de vérification.",
        "Le test unitaire.",
        "Le test de charge."
      ],
      "correct": 0,
      "explanation": "Le test de confirmation est lié au processus de correction d’anomalies : il permet de vérifier qu’un bug signalé a bien été corrigé."
    },
    {
      "theme": "Vérification & Confirmation",
      "question": "Les tests de vérification et de confirmation font partie de quel objectif global ?",
      "level": "Intermédiaire",
      "answers": [
        "Améliorer la qualité et la fiabilité du logiciel.",
        "Mesurer la performance du logiciel.",
        "Garantir uniquement la sécurité de l’application.",
        "Évaluer l’expérience utilisateur."
      ],
      "correct": 0,
      "explanation": "Les deux types de tests participent à l’assurance qualité en visant à améliorer la fiabilité et la robustesse du logiciel."
    }
  ],
  "Outils & Plateformes": [
    {
      "theme": "Outils & Plateformes",
      "question": "C'est quoi Notion ?",
      "level": "Intermédiaire",
      "answers": [
        "Un outil de prise de notes et gestion de projets collaboratif",
        "Un framework web",
        "Une base de données"
      ],
      "correct": 0,
      "explanation": "Notion est un espace de travail collaboratif permettant notes, gestion de tâches et documentation."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "C'est quoi git ?",
      "level": "Débutant",
      "answers": [
        "Un système de gestion de versions de code",
        "Un langage de programmation",
        "Un serveur web"
      ],
      "correct": 0,
      "explanation": "Git est un outil de contrôle de version distribué pour suivre l’évolution du code."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "C'est quoi GitHub ?",
      "level": "Intermédiaire",
      "answers": [
        "Une plateforme d’hébergement de projets Git",
        "Un framework web",
        "Un système de débogage"
      ],
      "correct": 0,
      "explanation": "GitHub est un service d’hébergement et de gestion de projets utilisant Git."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "C'est quoi une branche dans git ?",
      "level": "Débutant",
      "answers": [
        "Une version parallèle du code pour développer sans impacter la principale",
        "Un serveur secondaire",
        "Un module d’extension"
      ],
      "correct": 0,
      "explanation": "Une branche permet de travailler sur des fonctionnalités ou correctifs séparément du code principal."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "Qu'est-ce que SonarQube ?",
      "level": "Intermédiaire",
      "answers": [
        "Un outil d'analyse de qualité du code",
        "Un langage de programmation",
        "Un serveur web"
      ],
      "correct": 0,
      "explanation": "SonarQube analyse le code pour détecter les bugs, failles et mauvaises pratiques."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "Bonne pratique pour joindre des documents dans un ticket Jira ?",
      "level": "Intermédiaire",
      "answers": [
        "Attacher captures, logs, jeux de données et lier commits/PRs ; nommer clairement et contrôler l’accès.",
        "Éviter toute pièce jointe pour alléger l’outil.",
        "Mettre un zip de la base de production pour simplifier la reproduction.",
        "Remplacer la description par une capture d’écran sans texte."
      ],
      "correct": 0,
      "explanation": "Des artefacts bien nommés et traçables (captures, logs, liens vers PR/CI) accélèrent la compréhension et la correction."
    },
    {
      "theme": "Outils & Plateformes",
      "question": "Quel est l’intérêt des pipelines CI intégrés (GitLab/GitHub) pour les tests ?",
      "level": "Intermédiaire",
      "answers": [
        "Déclencher automatiquement les suites de tests à chaque change et publier des rapports unifiés dans le dépôt.",
        "Remplacer tous les tests manuels par magie.",
        "Empêcher toute personnalisation du process.",
        "Exécuter uniquement des tests en production."
      ],
      "correct": 0,
      "explanation": "L’intégration native facilite l’automatisation, la traçabilité et la visibilité des résultats au plus près du code."
    }
  ],
  "Web & Développement": [
    {
      "theme": "Web & Développement",
      "question": "C'est quoi une webapp ?",
      "level": "Débutant",
      "answers": [
        "Une application accessible depuis un navigateur web",
        "Une application installée sur un ordinateur uniquement",
        "Un logiciel sans interface graphique"
      ],
      "correct": 0,
      "explanation": "Une webapp est une application accessible via un navigateur, souvent responsive et pouvant fonctionner sur différents appareils."
    },
    {
      "theme": "Web & Développement",
      "question": "C'est quoi la différence entre une webapp et une application standard ?",
      "level": "Débutant",
      "answers": [
        "La webapp est accessible via un navigateur, l'application standard doit être installée",
        "La webapp fonctionne uniquement hors ligne",
        "La webapp ne peut pas avoir de base de données"
      ],
      "correct": 0,
      "explanation": "Une webapp fonctionne dans un navigateur, tandis qu'une application standard nécessite une installation locale."
    },
    {
      "theme": "Web & Développement",
      "question": "C'est quoi une API ?",
      "level": "Intermédiaire",
      "answers": [
        "Un ensemble de règles permettant à des applications de communiquer entre elles",
        "Un type de base de données",
        "Un langage de programmation"
      ],
      "correct": 0,
      "explanation": "Une API définit comment deux systèmes peuvent interagir par le biais de requêtes et de réponses."
    },
    {
      "theme": "Web & Développement",
      "question": "C'est quoi une promesse en JavaScript ?",
      "level": "Débutant",
      "answers": [
        "Un objet représentant l'achèvement ou l'échec d'une opération asynchrone",
        "Une fonction qui s'exécute immédiatement",
        "Un script de sécurité"
      ],
      "correct": 0,
      "explanation": "Une promesse gère des opérations asynchrones et fournit un résultat futur."
    },
    {
      "theme": "Web & Développement",
      "question": "A quoi sert await dans un script JS ?",
      "level": "Débutant",
      "answers": [
        "Attendre qu'une promesse soit résolue avant de continuer l'exécution",
        "Lancer une fonction immédiatement",
        "Arrêter le script"
      ],
      "correct": 0,
      "explanation": "Await permet de suspendre l'exécution d'une fonction asynchrone jusqu'à ce qu'une promesse soit terminée."
    },
    {
      "theme": "Web & Développement",
      "question": "Peux-tu me donner la définition de Cloud Functions ?",
      "level": "Débutant",
      "answers": [
        "Du code exécuté à la demande dans le cloud sans gérer de serveur",
        "Un service de stockage en ligne",
        "Un outil de débogage"
      ],
      "correct": 0,
      "explanation": "Les Cloud Functions permettent d'exécuter du code dans un environnement géré, déclenché par des événements."
    },
    {
      "theme": "Web & Développement",
      "question": "Peux-tu m'expliquer ce qu'est NodeJS ?",
      "level": "Intermédiaire",
      "answers": [
        "Un environnement d'exécution JavaScript côté serveur",
        "Un langage de programmation",
        "Une base de données"
      ],
      "correct": 0,
      "explanation": "NodeJS permet d'exécuter du JavaScript en dehors du navigateur, notamment pour le backend."
    },
    {
      "theme": "Web & Développement",
      "question": "Peux-tu m'expliquer ce qu'est Firebase ?",
      "level": "Intermédiaire",
      "answers": [
        "Une plateforme de développement d'applications proposée par Google",
        "Un langage de programmation",
        "Un outil de versionning"
      ],
      "correct": 0,
      "explanation": "Firebase fournit des services comme l'hébergement, l'authentification et la base de données en temps réel."
    },
    {
      "theme": "Web & Développement",
      "question": "Peux-tu m'expliquer ce qu'est Angular ?",
      "level": "Intermédiaire",
      "answers": [
        "Un framework JavaScript pour créer des applications web",
        "Un langage de programmation",
        "Une base de données"
      ],
      "correct": 0,
      "explanation": "Angular est un framework développé par Google pour créer des applications web dynamiques."
    },
    {
      "theme": "Web & Développement",
      "question": "C'est quoi une enum ?",
      "level": "Débutant",
      "answers": [
        "Un type de donnée énuméré avec des valeurs prédéfinies",
        "Une boucle de programmation",
        "Une variable temporaire"
      ],
      "correct": 0,
      "explanation": "Une enum permet de définir un ensemble constant de valeurs nommées."
    },
    {
      "theme": "Web & Développement",
      "question": "C'est quoi un locator dans du code JS ?",
      "level": "Débutant",
      "answers": [
        "Un sélecteur permettant de trouver un élément dans le DOM",
        "Une variable temporaire",
        "Un module d’importation"
      ],
      "correct": 0,
      "explanation": "Un locator est un identifiant (CSS, XPath, etc.) utilisé pour cibler un élément HTML dans le DOM."
    },
    {
      "theme": "Web & Développement",
      "question": "Quelle est la différence entre Front end et Back end ?",
      "level": "Débutant",
      "answers": [
        "Le front end est la partie visible par l’utilisateur, le back end gère la logique et les données",
        "Le front end gère les bases de données",
        "Le back end affiche l’interface"
      ],
      "correct": 0,
      "explanation": "Le front end est l’interface utilisateur, le back end traite les données et la logique métier."
    },
    {
      "theme": "Web & Développement",
      "question": "Quelle est la différence entre clé primaire et clé étrangère ?",
      "level": "Débutant",
      "answers": [
        "La clé primaire identifie de façon unique une ligne dans sa table ; la clé étrangère référence la clé primaire d’une autre table pour créer une relation.",
        "La clé primaire est toujours un texte ; la clé étrangère toujours un nombre.",
        "La clé étrangère identifie de façon unique une ligne ; la clé primaire référence une autre table.",
        "Elles sont strictement équivalentes et interchangeables."
      ],
      "correct": 0,
      "explanation": "PK = identifiant unique local ; FK = lien référentiel vers une autre table (intégrité référentielle)."
    }
  ],
  "Accessibilité": [
    {
      "theme": "Accessibilité",
      "question": "C'est quoi un test RGA ?",
      "level": "Avancé",
      "answers": [
        "Un test de conformité réglementaire d’accessibilité",
        "Un test de performance réseau",
        "Un test de sécurité"
      ],
      "correct": 0,
      "explanation": "RGA signifie Référentiel Général d’Accessibilité et vérifie la conformité aux règles d’accessibilité numérique."
    },
    {
      "theme": "Accessibilité",
      "question": "Quelle approche est la plus adaptée pour tester l’accessibilité d’une application web ?",
      "level": "Avancé",
      "answers": [
        "Combiner des outils automatiques (linting, contrastes, ARIA) et des tests manuels (navigation clavier, lecteurs d’écran) selon les référentiels (WCAG/RGAA).",
        "Se fier à un seul outil automatique : s’il est vert, c’est conforme.",
        "Tester uniquement avec la souris car c’est l’usage majoritaire.",
        "Vérifier la charte graphique sans regarder le code."
      ],
      "correct": 0,
      "explanation": "Les tests d’accessibilité exigent des vérifications automatiques et manuelles (clavier, focus, lecteurs d’écran) par rapport aux critères WCAG/RGAA."
    },
    {
      "theme": "Accessibilité",
      "question": "Quelles références doit‑on connaître pour l’accessibilité web (France) ?",
      "level": "Avancé",
      "answers": [
        "Les WCAG (W3C) et le référentiel RGAA, qui en est l’adaptation française.",
        "Uniquement la norme ISO/IEC 27001 sur la sécurité de l’information.",
        "Le manifeste agile et les user stories d’accessibilité.",
        "Aucune : seule la charte graphique interne compte."
      ],
      "correct": 0,
      "explanation": "Les critères WCAG constituent la base internationale ; en France, le RGAA s’appuie sur les WCAG pour cadrer la conformité des sites publics."
    },
    {
      "theme": "Accessibilité",
      "question": "Quel contraste minimum WCAG AA pour du texte normal ?",
      "level": "Intermédiaire",
      "answers": [
        "Au moins 4,5:1",
        "Au moins 7:1",
        "Au moins 3:1",
        "Aucun seuil n’est recommandé"
      ],
      "correct": 0,
      "explanation": "Les WCAG AA recommandent un contraste ≥ 4,5:1 pour le texte normal (≥ 3:1 pour gros caractères)."
    },
    {
      "theme": "Accessibilité",
      "question": "Quelle règle de navigation clavier vérifier en priorité ?",
      "level": "Débutant",
      "answers": [
        "Ordre de focus logique et visible sur tous les éléments interactifs.",
        "Masquer le focus pour un look plus propre.",
        "Exiger un périphérique tactile.",
        "Désactiver la touche Tab."
      ],
      "correct": 0,
      "explanation": "La navigation au clavier impose un ordre de tabulation cohérent et un indicateur de focus visible."
    },
    {
      "theme": "Accessibilité",
      "question": "Concernant ARIA, quelle pratique est recommandée ?",
      "level": "Intermédiaire",
      "answers": [
        "N’utiliser ARIA qu’en complément du HTML sémantique, avec des rôles/attributs pertinents.",
        "Remplacer tout le HTML par ARIA.",
        "Ajouter le plus d’attributs ARIA possible pour être sûr.",
        "Éviter tout attribut de rôle."
      ],
      "correct": 0,
      "explanation": "Le HTML sémantique prime ; ARIA comble les lacunes sans sur‑spécifier inutilement."
    },
    {
      "theme": "Accessibilité",
      "question": "Quel contrôle avec lecteurs d’écran est le plus critique ?",
      "level": "Intermédiaire",
      "answers": [
        "Présence d’alternatives textuelles, libellés corrects et ordre de lecture cohérent.",
        "Un visuel animé pour chaque bouton.",
        "Des raccourcis clavier propriétaires uniquement.",
        "Aucun test avec lecteur d’écran n’est nécessaire."
      ],
      "correct": 0,
      "explanation": "Les lecteurs d’écran s’appuient sur des libellés/alternatives corrects et une structure DOM cohérente."
    }
  ],
  "Organisation & rôles produit": [
    {
      "theme": "Organisation & rôles produit",
      "question": "C'est quoi un CTPO ?",
      "level": "Débutant",
      "answers": [
        "Chief Technical and Product Officer",
        "Central Test Process Operator",
        "Cloud Technology Processing Option"
      ],
      "correct": 0,
      "explanation": "Le CTPO est un poste de direction qui combine les responsabilités techniques et produit."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "Quel est le rôle d'un CTPO ?",
      "level": "Débutant",
      "answers": [
        "Superviser la partie technique et produit d’une organisation",
        "Développer uniquement le backend",
        "Faire la maintenance des serveurs"
      ],
      "correct": 0,
      "explanation": "Le CTPO coordonne la vision produit et la stratégie technique."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "Quel est le rôle d’un QA Lead/Test Manager ?",
      "level": "Intermédiaire",
      "answers": [
        "Définir la stratégie de test, piloter la qualité, gérer les risques et coordonner l’équipe QA.",
        "Coder toutes les fonctionnalités critiques.",
        "Valider seul le Go/No‑Go sans avis du métier.",
        "Administrer uniquement les serveurs."
      ],
      "correct": 0,
      "explanation": "Le QA Lead pilote la qualité (stratégie, planification, risques) et coordonne les activités de test."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "Qui définit les critères d’acceptation d’une user story ?",
      "level": "Débutant",
      "answers": [
        "Le Product Owner avec l’appui de l’équipe (dev/QA/BA).",
        "Uniquement le développeur.",
        "Uniquement le testeur.",
        "Uniquement le manager."
      ],
      "correct": 0,
      "explanation": "Les critères d’acceptation sont définis par le PO en collaboration avec l’équipe pour clarifier le besoin et la validation."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "En quoi consiste une matrice RACI appliquée aux anomalies ?",
      "level": "Avancé",
      "answers": [
        "À clarifier qui est Responsable, Approbateur, Consulté et Informé pour chaque étape du traitement.",
        "À mesurer la performance réseau.",
        "À définir les priorités techniques seulement.",
        "À attribuer un owner unique pour tout le projet."
      ],
      "correct": 0,
      "explanation": "RACI évite les flous de responsabilité et fluidifie la résolution."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "Quelle est la différence entre BA (Business Analyst) et PO (Product Owner) ?",
      "level": "Intermédiaire",
      "answers": [
        "Le BA analyse/process formalise les besoins et les processus ; le PO porte la vision produit et priorise le backlog.",
        "Le BA code, le PO teste.",
        "Le PO rédige les contrats, le BA choisit l’architecture.",
        "Aucune : c’est le même rôle."
      ],
      "correct": 0,
      "explanation": "BA et PO sont complémentaires : analyse/process vs vision/valeur et priorisation."
    },
    {
      "theme": "Organisation & rôles produit",
      "question": "Qui arbitre la décision Go/No‑Go ?",
      "level": "Avancé",
      "answers": [
        "Selon la gouvernance : PO/PM avec parties prenantes, en s’appuyant sur le rapport de tests et les risques.",
        "Toujours le développeur en charge du module.",
        "Exclusivement le testeur le plus expérimenté.",
        "Un vote anonyme de toute l’entreprise."
      ],
      "correct": 0,
      "explanation": "Le Go/No‑Go relève de la gouvernance projet/produit sur la base d’éléments qualité, risques et valeur."
    }
  ]
};

// === SYNTHÈSES PAR THÈME (affichées dans la base de questions) ===
const themeSyntheses = {
    "Fondamentaux du test": {
        definition: "Le test logiciel consiste à contrôler le produit pour révéler des défauts et fournir des informations sur la qualité, avec un objectif de prévention autant que de détection.",
        keyFacts: [
            "Un défaut (bug) est l'écart entre le résultat attendu et le résultat obtenu.",
            "Le testeur ne corrige pas : il rapporte, il documente, il informe.",
            "Le coût d'un défaut augmente fortement quand il est découvert tard dans le projet."
        ],
        pitfalls: [
            "Confondre « tester » et « déboguer » : le débogage relève du développeur.",
            "Croire qu'un test qui réussit prouve l'absence de défauts.",
            "Tester sans exigence claire : sans attendu, pas de verdict possible."
        ],
        takeaways: [
            "Tester = chercher des défauts pour améliorer la qualité perçue du produit.",
            "La qualité est la responsabilité de toute l'équipe, pas du seul testeur.",
            "Plus un défaut est trouvé tôt, moins il coûte cher à corriger."
        ]
    },
    "Types de tests": {
        definition: "On distingue les tests fonctionnels (ce que fait le produit), non fonctionnels (comment il le fait : performance, sécurité, utilisabilité) et les niveaux : unitaire, intégration, système, acceptation.",
        keyFacts: [
            "Tests unitaires : une seule unité, par le développeur, automatisables.",
            "Tests d'intégration : vérifier les interfaces entre composants.",
            "Tests de bout en bout (E2E) : parcours utilisateurs complets.",
            "UAT / recette : validation métier avant mise en production."
        ],
        pitfalls: [
            "Confondre test fonctionnel et test de validation.",
            "Oublier les tests non fonctionnels (charge, sécurité, accessibilité).",
            "Tout automatiser : certains tests exploratoires restent manuels."
        ],
        takeaways: [
            "Chaque type de test répond à une question qualité différente.",
            "La pyramide de tests : beaucoup d'unitaires, moins d'intégration, peu d'E2E.",
            "Le choix du type de test dépend du risque à couvrir."
        ]
    },
    "Tests de performance": {
        definition: "Les tests de performance mesurent le comportement du système sous charge : temps de réponse, débit, stabilité et scalabilité.",
        keyFacts: [
            "Test de charge (load) : charge attendue en conditions réelles.",
            "Test de stress : au-delà des limites, pour observer la dégradation.",
            "Temps de réponse souvent mesuré en percentiles (P90, P95, P99).",
            "Outils courants : JMeter, Gatling, k6, LoadRunner."
        ],
        pitfalls: [
            "Ne tester qu'avec un seul utilisateur : le temps de réponse seul ne suffit pas.",
            "Tester en environnement non représentatif de la production.",
            "Confondre charge moyenne et pic de charge ( saisonnalité, événements )."
        ],
        takeaways: [
            "Une performance se juge avec des seuils définis à l'avance.",
            "Le stress testing révise les points de rupture du système.",
            "Un test de performance sans métriques précises n'a pas de valeur."
        ]
    },
    "Automatisation & CI/CD": {
        definition: "L'automatisation des tests exécute des suites scriptées à chaque changement ; la CI/CD enchaîne build, tests et déploiement de manière continue.",
        keyFacts: [
            "CI : intégration continue — chaque commit déclenche build + tests.",
            "CD : livraison/déploiement continu — mises en production fréquentes et automatisées.",
            "Pipeline type : build → tests unitaires → intégration → déploiement.",
            "Selenium/Cypress/Playwright pour le Web, xUnit/JUnit pour le code."
        ],
        pitfalls: [
            "Automatiser des cas instables avant de les avoir fiabilisés.",
            "Un pipeline rouge ignoré : la CI perd sa crédibilité.",
            "Couvrir tout en UI là où un test d'API suffit."
        ],
        takeaways: [
            "On automatise ce qui est répétitif, critique et stable.",
            "Un retour rapide de la CI est sa première valeur.",
            "Automatiser n'empêche pas le test exploratoire manuel."
        ]
    },
    "Méthodes & Agile": {
        definition: "Dans un contexte Agile (Scrum, Kanban), le testeur travaille en continu : il participe aux rituels, affine les critères d'acceptation et teste au fil du sprint plutôt qu'à la fin.",
        keyFacts: [
            "Le testeur aide à rendre les user stories testables (critères d'acceptation).",
            "Definition of Done : inclut généralement « tests passés ».",
            "Le test agile est préventif : qualité intégrée dès le backlog.",
            "Shift-left : tester le plus tôt possible dans le cycle."
        ],
        pitfalls: [
            "Garder un schéma en « V » dans une équipe qui travaille en sprints.",
            "Considérer le test comme une phase finale de validation.",
            "Négliger les tests de régression entre sprints."
        ],
        takeaways: [
            "En Agile, la qualité se construit avec toute l'équipe, itération après itération.",
            "Les critères d'acceptation servent à la fois de spec et de plan de test.",
            "La régression continue empêche les défauts de revenir."
        ]
    },
    "Plan de test": {
        definition: "Le plan de test formalise la stratégie : périmètre, objectifs, ressources, planning, critères d'entrée et de sortie, et gestion des risques.",
        keyFacts: [
            "Contenu type : périmètre, approche, environnement, planning, risques.",
            "Critères de sortie (exit criteria) : couverture atteinte, taux de défauts, seuils.",
            "Support de communication entre équipe de test, MOA et management."
        ],
        pitfalls: [
            "Un plan de test exhaustif mais jamais mis à jour.",
            "Oublier les critères d'entrée : tester sur une base instable.",
            "Aucun critère de sortie défini : « quand a-t-on fini ? »."
        ],
        takeaways: [
            "Le plan de test répond à : quoi, comment, qui, quand, avec quoi.",
            "Les risques du projet guident la priorité des tests.",
            "Un plan vivant vaut mieux qu'un plan parfait figé."
        ]
    },
    "Cas de test": {
        definition: "Un cas de test décrit un scénario précis : conditions initiales, pas à pas, données et résultat attendu, pour vérifier une exigence.",
        keyFacts: [
            "Champs classiques : objectif, préconditions, étapes, données, attendu.",
            "Un cas de test doit être reproductible par une autre personne.",
            "Traçabilité exigence ↔ cas de test ↔ défaut pour prouver la couverture."
        ],
        pitfalls: [
            "Étapes vagues du type « vérifier que ça marche ».",
            "Un seul attendu implicite au lieu d'un attendu vérifiable.",
            "Cas dupliqués qui gonflent le cahier de tests sans couverture réelle."
        ],
        takeaways: [
            "Un bon cas de test est clair, concis, réutilisable et traçable.",
            "Pas d'attendu vérifiable = pas de verdict possible.",
            "La relecture des cas de test est un test en soi."
        ]
    },
    "Rapport d’exécution": {
        definition: "Le rapport d'exécution restitue l'état de la campagne : cas exécutés, réussis, bloqués, défauts trouvés, et éclaire la décision de mise en production.",
        keyFacts: [
            "Indicateurs courants : taux d'exécution, taux de réussite, couverture.",
            "Un cas bloqué est signalé comme tel, avec sa cause.",
            "Le rapport final alimente la décision « go / no-go »."
        ],
        pitfalls: [
            "Livrer des chiffres sans interprétation ni recommandation.",
            "Ne pas distinguer un échec de test d'un défaut réel (ou d'une anomaly d'environnement).",
            "Oublier les cas non exécutés dans le calcul de la couverture."
        ],
        takeaways: [
            "Un rapport d'exécution doit être actionnable pour son lecteur.",
            "Le testeur informe une décision : il ne prend pas la décision finale.",
            "La traçabilité entre rapport, cas et défauts est essentielle."
        ]
    },
    "Ticket de bug": {
        definition: "Le ticket de bug (rapport de défaut) transmet l'information nécessaire pour comprendre, reproduire et corriger un défaut.",
        keyFacts: [
            "Champs clés : titre explicite, étapes de reproduction, attendu vs obtenu, environnement, sévérité, captures.",
            "La sévérité mesure l'impact technique ; la priorité mesure l'urgence de traitement.",
            "Un défaut non reproductible est difficilement corrigeable."
        ],
        pitfalls: [
            "Titres vagues : « ça ne marche pas ».",
            "Oublier la version, l'environnement ou les données utilisées.",
            "Mélanger deux défauts dans un seul ticket."
        ],
        takeaways: [
            "Un bon ticket fait gagner du temps au développeur et au testeur.",
            "Reproductible > complet > concis : dans cet ordre.",
            "La communication avec le développeur complète le ticket, elle ne le remplace pas."
        ]
    },
    "Cahier de tests": {
        definition: "Le cahier de tests regroupe l'ensemble des cas de test d'un périmètre et sert de référentiel pour l'exécution et la traçabilité.",
        keyFacts: [
            "Structure par thème/fonctionnalité, version, priorité.",
            "Permet de constituer des campagnes de régression reproductibles.",
            "Outils : TestRail, Zephyr, Xray, Jira, ou tableur partagé."
        ],
        pitfalls: [
            "Cahier jamais maintenu après les évolutions du produit.",
            "Aucun lien exigence ↔ cas : couverture invérifiable.",
            "Conserver des cas obsolètes qui polluent les campagnes."
        ],
        takeaways: [
            "Un cahier de tests vivant reflète l'état réel de la couverture.",
            "La régression s'appuie sur un cahier structuré et à jour.",
            "Mieux vaut moins de cas bien maintenus que beaucoup de cas douteux."
        ]
    },
    "Vérification & Confirmation": {
        definition: "Vérification : « construit-on le produit correctement ? » (conformité à la spec). Confirmation (validation) : « construit-on le bon produit ? » (besoin réel de l'utilisateur).",
        keyFacts: [
            "Vérification = revues, inspections, tests statiques sur les specs.",
            "Confirmation = tests dynamiques face au besoin métier.",
            "Les deux sont complémentaires et s'appliquent à chaque niveau de test."
        ],
        pitfalls: [
            "Réduire le test à la simple vérification de la spécification.",
            "Une spec fausse donne des tests « verts » et un produit inutile.",
            "Confondre recette technique et recette métier."
        ],
        takeaways: [
            "Bien tester = vérifier la conformité ET valider la valeur métier.",
            "Le doute méthodique est la posture du testeur.",
            "Questionner la spec fait partie du travail de test."
        ]
    },
    "Outils & Plateformes": {
        definition: "Le testeur s'appuie sur des outils de gestion (Jira, TestRail), d'automatisation (Selenium, Cypress, Playwright), d'API (Postman), de performance (JMeter) et de CI (GitLab CI, Jenkins).",
        keyFacts: [
            "Jira : suivi des défauts et des campagnes de test (plugins QA).",
            "Postman/Newman : tests d'API manuels et automatisés.",
            "Playwright/Cypress : automatisation Web moderne, souvent en CI.",
            "Git : versionner les scripts de test comme le code applicatif."
        ],
        pitfalls: [
            "Choisir l'outil avant d'avoir défini la stratégie de test.",
            "Outil mal maîtrisé : résultats faux et temps perdu.",
            "Aucun versionnement des jeux de données et scripts de test."
        ],
        takeaways: [
            "L'outil sert la stratégie, jamais l'inverse.",
            "Savoir justifier son choix d'outil est une compétence de soutenance.",
            "Un outil collaboratif partagé vaut mieux qu'un outil puissant isolé."
        ]
    },
    "Web & Développement": {
        definition: "Le testeur Web connaît les bases techniques du produit : client/serveur, HTTP, HTML/CSS/JS, formulaires, API, et les spécificités des navigateurs.",
        keyFacts: [
            "HTTP : codes de réponse (200, 404, 500…), méthodes GET/POST.",
            "Un bug peut venir du front, du back, du réseau ou des données.",
            "DevTools : onglets Network et Console, premiers réflexes de diagnostic.",
            "Compatibilité navigateurs et responsive à tester systématiquement."
        ],
        pitfalls: [
            "Tester uniquement sur son navigateur et sa résolution.",
            "Ignorer les erreurs de la console pendant les tests.",
            "Confondre une panne réseau avec un défaut applicatif."
        ],
        takeaways: [
            "Comprendre l'architecture aide à localiser et à décrire les défauts.",
            "DevTools est le compagnon quotidien du testeur Web.",
            "Un défaut bien qualifié (front/back/env) accélère sa correction."
        ]
    },
    "Accessibilité": {
        definition: "L'accessibilité (a11y) garantit qu'un site est utilisable par tous, y compris les personnes en situation de handicap ; WCAG est le référentiel de référence.",
        keyFacts: [
            "4 principes WCAG : perceptible, utilisable, compréhensible, robuste.",
            "Alternatives texte pour les images, structure de titres, contrastes.",
            "Navigation clavier complète et focus visible.",
            "Outils : lecteurs d'écran (NVDA), axe, WAVE, Lighthouse."
        ],
        pitfalls: [
            "Considérer l'accessibilité comme une option à ajouter à la fin.",
            "Tester uniquement avec la souris.",
            "Contrastes et tailles de police non vérifiés."
        ],
        takeaways: [
            "L'accessibilité est une exigence qualité comme une autre : elle se teste.",
            "Un site inaccessible exclut une partie des utilisateurs.",
            "Navigation clavier + lecteur d'écran = deux réflexes de base."
        ]
    },
    "Organisation & rôles produit": {
        definition: "Le testeur évolue dans une organisation produit : PO, développeurs, Scrum Master, stakeholders — et doit savoir situer son rôle et ses livrables.",
        keyFacts: [
            "PO : porte la vision et priorise le backlog.",
            "Scrum Master : facilite le processus, pas un chef de projet.",
            "Le testeur : garde-fou qualité, fournisseur d'informations.",
            "Communication écrite (tickets, rapports) autant que orale."
        ],
        pitfalls: [
            "Se positionner en « policier de la qualité » contre les développeurs.",
            "Ne pas formaliser ses livrables (plan, cas, rapports).",
            "Ignorer les contraintes de planning et de périmètre des autres rôles."
        ],
        takeaways: [
            "Le testeur est un membre de l'équipe produit, pas un intervenant externe.",
            "Savoir expliquer son rôle et ses livrables est clé en soutenance.",
            "La qualité est un travail d'équipe basé sur la confiance."
        ]
    },
    "default": {
        definition: "Synthèse à compléter selon le thème choisi.",
        keyFacts: [
            "Identifier le concept central du thème.",
            "Connaître au moins un exemple concret.",
            "Rester clair pendant l'oral."
        ],
        pitfalls: [
            "Rester trop vague.",
            "Oublier les erreurs fréquentes.",
            "Confondre concept et exemple."
        ],
        takeaways: [
            "Expliquer simplement.",
            "Lier théorie et pratique.",
            "Repérer les pièges fréquents."
        ]
    }
};
