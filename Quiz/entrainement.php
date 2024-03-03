<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questionnaire à Choix Multiples avec Chronomètre</title>
    <style>
        /* CSS pour le chronomètre */
        .timer-container {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            align-items: center;
        }

        .timer-container button {
            background-color: yellow;
            border: none;
            color: black;
            padding: 5px 10px;
            margin-left: 5px;
            cursor: pointer;
            border-radius: 5px;
        }

        /* Styles pour le questionnaire */
        .question {
            border: 2px solid #000;
            padding: 10px;
            margin-bottom: 20px;
            position: relative;
        }

        .custom-button {
            background-color: #ccc;
            border: none;
            color: black;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 20px;
            /* Pour rendre les boutons ovales */
            cursor: pointer;
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .custom-button.selected {
            background-color: #34CCE4;
        }

        /* Style pour le score */
        .score-container {
            background-color: blue;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            margin-left: 20px;
        }

        .bouton-ovale {
            background-color: #999;
            /* Couleur de fond grise */
            color: #fff;
            /* Couleur du texte blanc */
            border: none;
            /* Supprimer la bordure */
            border-radius: 20px;
            /* Définir le rayon de la bordure pour obtenir une forme ovale */
            padding: 10px 20px;
            /* Ajouter un espace intérieur pour le contenu */
            font-size: 16px;
            /* Taille de la police */
            cursor: pointer;
            /* Curseur de la souris en forme de main */
        }

        /* Ajouter ces styles pour mettre en surbrillance les réponses correctes */
        .custom-button.correct {
            background-color: green;
            /* Couleur de fond verte */
            color: white;
            /* Couleur du texte blanc */
        }

        /* Ajouter ces styles pour mettre en surbrillance les réponses incorrectes */
        .custom-button.incorrect {
            background-color: red;
            /* Couleur de fond rouge */
            color: white;
            /* Couleur du texte blanc */
        }
    </style>
</head>

<body>
    <h1>Questionnaire à Choix Multiples<span class="score-container">Score: 0</span></h1>
    <div class="question" id="question1">
        <div class="timer-container">
            <h1 class="display1">30</h1>
            <button class="hint-button" onclick="giveHint('question1')">Indice</button>
            <button class="remove-button" onclick="removeWrongAnswer('question1')">Supprimer une réponse fausse</button>
        </div>
        <h2>Question 1 :</h2>
        <p>Quelle est la capitale de la République tchèque ?</p>
        <button class="custom-button correct-answer" id="Prague" name="question1" value="Prague" onclick="selectAnswer(this)">Prague</button>
        <button class="custom-button" id="Londres" name="question1" value="Londres" onclick="selectAnswer(this)">Londres</button>
        <button class="custom-button" id="Berlin" name="question1" value="Berlin" onclick="selectAnswer(this)">Berlin</button>
    </div>

    <div class="question" id="question2">
        <div class="timer-container">
            <h1 class="display2">30</h1>
            <button class="hint-button" onclick="giveHint('question2')">Indice</button>
            <button class="remove-button" onclick="removeWrongAnswer('question2')">Supprimer une réponse fausse</button>
        </div>
        <h2>Question 2 :</h2>
        <p>Qui est le joueur Ukranien qui a remporté le ballon d'or en 2004 ?</p>
        <button class="custom-button" id="Toney Kroos" name="question2" value="Tony Kroos" onclick="selectAnswer(this)">Tony Kroos</button>
        <button class="custom-button correct-answer" id="Andriy Shevchenko" name="question2" value="Andriy Shevchenko" onclick="selectAnswer(this)">Andriy Shevchenko</button>
        <button class="custom-button" id="Luis Figo" name="question2" value="Luis Figo" onclick="selectAnswer(this)">Luis Figo</button>
    </div>

    <div class="question" id="question3">
        <div class="timer-container">
            <h1 class="display3">30</h1>
            <button class="hint-button" onclick="giveHint('question3')">Indice</button>
            <button class="remove-button" onclick="removeWrongAnswer('question3')">Supprimer une réponse fausse</button>
        </div>
        <h2>Question 3 :</h2>
        <p>Quelle est la capitale de la Suisse ?</p>
        <button class="custom-button correct-answer" id="Berne" name="question3" value="Berne" onclick="selectAnswer(this)">Berne</button>
        <button class="custom-button" id="Geneve" name="question3" value="Geneve" onclick="selectAnswer(this)">Genève</button>
        <button class="custom-button" id="Zurich" name="question3" value="Zurich" onclick="selectAnswer(this)">Zurich</button>
    </div>

    <div class="question" id="question4">
        <div class="timer-container">
            <h1 class="display4">30</h1>
            <button class="hint-button" onclick="giveHint('question4')">Indice</button>
            <button class="remove-button" onclick="removeWrongAnswer('question4')">Supprimer une réponse fausse</button>
        </div>
        <h2>Question 4 :</h2>
        <p>En quelle année la sélection espagnole a remporté la Coupe du Monde ?</p>
        <button class="custom-button correct-answer" id="2010" name="question4" value="2010" onclick="selectAnswer(this)">2010</button>
        <button class="custom-button" id="2002" name="question4" value="2002" onclick="selectAnswer(this)">2002</button>
        <button class="custom-button" id="2006" name="question4" value="2006" onclick="selectAnswer(this)">2006</button>
    </div>

    <div class="question" id="question5">
        <div class="timer-container">
            <h1 class="display5">30</h1>
            <button class="hint-button" onclick="giveHint('question5')">Indice</button>
            <button class="remove-button" onclick="removeWrongAnswer('question5')">Supprimer une réponse fausse</button>
        </div>
        <h2>Question 5 :</h2>
        <p>Quel est le pays qui a remporté le plus de Coupes du Monde ? </p>
        <button class="custom-button" id="Italie" name="question5" value="Italie" onclick="selectAnswer(this)">Italie</button>
        <button class="custom-button correct-answer" id="Brésil" name="question5" value="Brésil" onclick="selectAnswer(this)">Brésil</button>
        <button class="custom-button" id="France" name="question5" value="France" onclick="selectAnswer(this)">France</button>
    </div>


    <button type="button" class="bouton-ovale" onclick="checkAnswers()">Soumettre</button>




    <script>
        // Variables pour suivre si une réponse incorrecte a été supprimée pour chaque question
        let removedWrongAnswerQuestion1 = false;
        let removedWrongAnswerQuestion2 = false;
        let removedWrongAnswerQuestion3 = false;
        let removedWrongAnswerQuestion4 = false;
        let removedWrongAnswerQuestion5 = false;

        // Variable pour stocker le score total
        let totalScore = 0;

        // Fonction pour démarrer le chronomètre automatiquement
        function startTimer(display) {
            let timeleft = parseInt(display.textContent);

            let timer = setInterval(function() {
                if (timeleft <= 0) {
                    clearInterval(timer);
                    let nextQuestion = display.closest('.question').nextElementSibling;
                    if (nextQuestion) {
                        nextQuestion.querySelector('.timer-container h1').textContent = '30'; // Réinitialiser le chronomètre
                        startTimer(nextQuestion.querySelector('.timer-container h1')); // Démarrer le chronomètre de la question suivante
                        nextQuestion.scrollIntoView({
                            behavior: 'smooth'
                        }); // Scroll automatique vers la question suivante
                    }

                } else {
                    display.textContent = timeleft;
                    timeleft -= 1;
                }
            }, 1000);
        }

        // Sélectionnez tous les éléments avec la classe .display et démarrez le chronomètre
        let displays = document.querySelectorAll('.question .timer-container h1');

        function startTimersSequentially(index) {
            if (index < displays.length) {
                let display = displays[index];
                startTimer(display);
                setTimeout(function() {
                    startTimersSequentially(index + 1);
                }, 31000); // Délai pour démarrer le prochain chronomètre après que le précédent soit terminé
            }
        }

        startTimersSequentially(0);

        // Fonction pour donner un indice
        function giveHint(questionId) {
            // Vous pouvez implémenter la logique pour donner un indice ici
            console.log("Indice pour la question :", questionId);
        }

        // Fonction pour supprimer une réponse fausse
        function removeWrongAnswer(questionId) {
            // Vérifier si une réponse incorrecte a déjà été supprimée pour cette question
            let alreadyRemoved = false;
            switch (questionId) {
                case 'question1':
                    alreadyRemoved = removedWrongAnswerQuestion1;
                    removedWrongAnswerQuestion1 = true;
                    break;
                case 'question2':
                    alreadyRemoved = removedWrongAnswerQuestion2;
                    removedWrongAnswerQuestion2 = true;
                    break;
                case 'question3':
                    alreadyRemoved = removedWrongAnswerQuestion3;
                    removedWrongAnswerQuestion3 = true;
                    break;
                case 'question4':
                    alreadyRemoved = removedWrongAnswerQuestion4;
                    removedWrongAnswerQuestion4 = true;
                    break;
                case 'question5':
                    alreadyRemoved = removedWrongAnswerQuestion5;
                    removedWrongAnswerQuestion5 = true;
                    break;
            }

            // Si une réponse incorrecte n'a pas encore été supprimée, supprimez-en une
            if (!alreadyRemoved) {
                // Sélectionner tous les boutons de réponse incorrects pour cette question
                let wrongAnswers = document.querySelectorAll('.question[id="' + questionId + '"] .custom-button:not(.selected)');

                // Vérifier s'il y a des mauvaises réponses à supprimer
                if (wrongAnswers.length > 0) {
                    // Sélectionner aléatoirement une réponse fausse à supprimer
                    let randomIndex = Math.floor(Math.random() * wrongAnswers.length);
                    let answerToRemove = wrongAnswers[randomIndex];

                    // Supprimer la réponse fausse sélectionnée
                    answerToRemove.remove();

                    console.log("Suppression d'une réponse fausse pour la question :", questionId);
                } else {
                    console.log("Il n'y a pas de mauvaise réponse à supprimer pour la question :", questionId);
                }
            } else {
                console.log("Une réponse fausse a déjà été supprimée pour la question :", questionId);
            }
        }

        // Fonction pour sélectionner une réponse et la mettre en surbrillance

        function selectAnswer(button) {
            // Désélectionner toutes les autres réponses de cette question
            let questionId = button.getAttribute('name');
            let allButtons = document.querySelectorAll('.question[id="' + questionId + '"] .custom-button');
            allButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('selected');
                }
            });

            // Mettre en surbrillance la réponse sélectionnée
            button.classList.add('selected');
        }

        // Indices pour chaque question
        let hints = {
            question1: "Cette ville est connue pour l'horloge astronomique .",
            question2: "C'est le seul joueur ukranien qui a  remporté le Ballon d'Or en 2004 et il remportera peut-être le super Ballon d'Or en2029.",
            question3: "Le nom de cette ville commence par la lettre 'B' et malheursement les gens trompent de capital.",
            question4: "C'est le pays qui a remporté le'euro 2 fois '.",
            question5: "Ce pays a remporté le plus de Coupes du Monde de football mais c'est un pays non européan."
        };

        // Fonction pour afficher l'indice
        function giveHint(questionId) {
            let hint = hints[questionId];
            if (hint) {
                alert("Indice : " + hint);
            } else {
                console.log("Aucun indice disponible pour cette question.");
            }
        }

        // Fonction pour vérifier les réponses et calculer le score
        // Fonction pour vérifier les réponses et calculer le score
        function checkAnswers() {
            // Initialiser le score à 0 à chaque vérification
            totalScore = 0;

            // Parcourir toutes les questions
            document.querySelectorAll('.question').forEach(question => {
                // Sélectionner la réponse correcte pour cette question
                let correctAnswerButton = question.querySelector('.correct-answer');

                // Vérifier si une réponse a été sélectionnée
                let selectedButton = question.querySelector('.custom-button.selected');

                // Si une réponse a été sélectionnée, vérifier si elle est correcte ou non
                if (selectedButton) {
                    if (selectedButton === correctAnswerButton) {
                        // Si la réponse sélectionnée est correcte, ajouter 20 points au score
                        totalScore += 20;

                        // Ajouter une classe pour la mise en surbrillance en vert
                        selectedButton.classList.add('correct');
                    } else {
                        // Si la réponse sélectionnée est incorrecte, ajouter une classe pour la mise en surbrillance en rouge
                        selectedButton.classList.add('incorrect');
                    }
                } else {
                    // Si aucune réponse n'a été sélectionnée, mettre en surbrillance la réponse correcte en vert
                    correctAnswerButton.classList.add('correct');
                }
            });
            // Afficher le score total
            console.log("Score total : ", totalScore);
            // Mettre à jour le contenu de la balise <span class="score-container">
            document.querySelector('.score-container').textContent = "Score: " + totalScore;
        }
    </script>

</body>

</html>