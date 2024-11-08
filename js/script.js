let button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    display_non();
});

// Sélectionnez le bouton pour afficher le score
const showScoreButton = document.getElementById("showScore");

// Ajoutez un événement au bouton pour afficher un message avec le score
let niveau;
showScoreButton.addEventListener("click", function() {
    alert(`Le quiz est terminé : votre score est ${score}/${questions.length}, votre niveau : ${niveau}`);
});

function display_non() {
    let quezz = document.getElementById("quezz");
    quezz.style.display = "block";
}

const questions = [
    {
        question: "1. comment tu t'appelles ?",
        options: ["fouad", "ayoub", "amine", "abdesatar"],
        correct: 0
    },
    {
        question: "2. le roi de la forêt ?",
        options: ["le lion", "le tigre", "le chien", "le chat"],
        correct: 0
    },
    {
        question: "3. auxiliaire ?",
        options: ["manger", "être", "prendre", "venir"],
        correct: 1
    },
    {
        question: "4. première personne du pluriel ?",
        options: ["je", "ils", "nous", "tu"],
        correct: 2
    },
    {
        question: "5. nous disons à quelqu'un qui nous aide ?",
        options: ["pardon", "de rien", "merci", "pourquoi"],
        correct: 2
    },
    {
        question: "6. il est arrivé __ retard?",
        options: ["sur", "en", "à", "avec"],
        correct: 2
    },
    {
        question: "7. Quel est le contraire du mot (propre)?",
        options: ["intelligent", "sale", "petit", "grand"],
        correct: 1
    },
    {
        question: "8. Quel est le synonyme du mot (agrandir)?",
        options: ["suprimer", "ajouter", "augmenter", "reduire"],
        correct: 2
    },
    {
        question: "9. fouad __ à nador ?",
        options: ["habitons", "habitez", "habitent", "habite"],
        correct: 3
    },
    {
        question: "10. quel est le contraire du mot (facile) ?",
        options: ["simple", "difficile", "rapide", "excellent"],
        correct: 1
    }
];

let currentQuestion = 0; // Pour suivre les questions
let score = 0; // Pour suivre le score
const nextButton = document.getElementById("next"); // Pour passer à la question suivante

// Cacher le bouton "Suivant" au début
nextButton.style.display = "none";

// Affichage de la première question
displayQuestion();

// Fonction pour afficher une question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestion].question;

    document.getElementById("option1").innerText = questions[currentQuestion].options[0];
    document.getElementById("option2").innerText = questions[currentQuestion].options[1];
    document.getElementById("option3").innerText = questions[currentQuestion].options[2];
    document.getElementById("option4").innerText = questions[currentQuestion].options[3];

    const questionCounter = document.getElementById("questionCounter");
    questionCounter.innerText = `Question ${currentQuestion + 1} / ${questions.length}`;

    document.querySelectorAll(".button2").forEach(function(button) {
        button.style.backgroundColor = "";
        button.disabled = false;
    });

    // Masquer le bouton "Suivant" au début de chaque question
    nextButton.style.display = "none";
}

// Fonction qui vérifie la réponse et affiche le bouton "Suivant"
function selectOption(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    const options = document.querySelectorAll(".button2");

    if (selected === correctAnswer) {
        options[selected].style.backgroundColor = "green";
        score++;
    } else {
        options[selected].style.backgroundColor = "red";
        options[correctAnswer].style.backgroundColor = "green";
    }

    options.forEach(button => {
        button.disabled = true;
    });

    // Afficher le bouton "Suivant" après la sélection d'une option
    nextButton.style.display = "block";
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Dernière question atteinte, afficher le score et changer le texte du bouton
        if (score < 2) {
            niveau = "A1";
        } else if (score < 4) {
            niveau = "A2";
        } else if (score < 6) {
            niveau = "B1";
        } else if (score < 8) {
            niveau = "B2";
        } else if (score < 9) {
            niveau = "C1";
        } else {
            niveau = "C2";
        }

        showScoreButton.style.display = "block";
        nextButton.innerText = "Redémarrer";
        currentQuestion = 0; // Remet à zéro la question actuelle pour redémarrer
    }
}

// Événement pour redémarrer le quiz ou passer à la question suivante
nextButton.addEventListener("click", function() {
    if (nextButton.innerText === "Redémarrer") {
        score = 0;
        currentQuestion = 0;
        nextButton.innerText = "Suivant";
        showScoreButton.style.display = "none";
        displayQuestion();
    } else {
        nextQuestion();
    }
});

// Lie chaque bouton à une option
document.getElementById("option1").addEventListener("click", function() {
    selectOption(0);
});
document.getElementById("option2").addEventListener("click", function() {
    selectOption(1);
});
document.getElementById("option3").addEventListener("click", function() {
    selectOption(2);
});
document.getElementById("option4").addEventListener("click", function() {
    selectOption(3);
});
