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
    },
    // --- Nouvelles questions ---
    {
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
        question: "Quelle est l’utilité d’un test pair-review ?",
        answers: [
            "Deux testeurs vérifient le même scénario pour améliorer la qualité et détecter plus de bugs",
            "Deux développeurs écrivent du code ensemble",
            "Deux utilisateurs valident la fonctionnalité"
        ],
        correct: 0,
        explanation: "Le test pair-review permet de combiner l’expérience de deux testeurs pour identifier plus efficacement les anomalies."
    },

    // --- Nouvelles questions ---
    {
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
        question: "Quel est le rôle d'un CTPO ?",
        answers: [
            "Superviser la partie technique et produit d’une organisation",
            "Développer uniquement le backend",
            "Faire la maintenance des serveurs"
        ],
        correct: 0,
        explanation: "Le CTPO coordonne la vision produit et la stratégie technique."
    },
    {
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
        question: "Quels sont les 4 piliers de l'agilité ?",
        answers: [
            "Individus et interactions, logiciel fonctionnel, collaboration client, adaptation au changement",
            "Planification stricte, documentation, validation client, tests automatisés",
            "Itérations, sprints, user stories, tests"
        ],
        correct: 0,
        explanation: "Les 4 piliers de l’agilité viennent du manifeste agile : individus/interactions, logiciel fonctionnel, collaboration client, adaptation."
    }
];
