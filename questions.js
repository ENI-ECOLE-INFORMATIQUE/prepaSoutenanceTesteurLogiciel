const quiz = [
    // --- Niveau Débutant ---
    {
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
        question: "Quel est l’objectif des tests d’acceptation utilisateur (UAT) ?",
        answers: [
            "Vérifier que le code est bien documenté",
            "S’assurer que le logiciel répond aux besoins des utilisateurs finaux",
            "Tester uniquement la sécurité de l’application"
        ],
        correct: 1,
        explanation: "Les tests d’acceptation utilisateur valident que le logiciel satisfait aux exigences et attentes des utilisateurs finaux."
    },

    // --- Niveau Intermédiaire ---
    {
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
        question: "Qu’est-ce qu’un test de sécurité ?",
        answers: [
            "Un test visant à détecter les vulnérabilités du logiciel",
            "Un test qui mesure le temps de réponse",
            "Un test de validation métier"
        ],
        correct: 0,
        explanation: "Les tests de sécurité visent à identifier les failles de sécurité et à protéger les données."
    },

    // --- Niveau Avancé ---
    {
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
        question: "Qu’est-ce que l’analyse des causes profondes (Root Cause Analysis) ?",
        answers: [
            "Une méthode pour identifier l’origine d’un bug",
            "Une étape de validation",
            "Un type de test de performance"
        ],
        correct: 0,
        explanation: "Le Root Cause Analysis vise à trouver la cause exacte d’un problème pour éviter qu’il ne se reproduise."
    }
];
