let button1=document.getElementById("button1");
button1.addEventListener("click",function(){
    display_non()
}

);


function display_non(){
let quezz =document.getElementById("quezz");

    quezz.style.display = "block";






}



////////////////////////////////////////
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
    }
];

let currentQuestion = 0; // pour suivre les question 

// mis a jour la contenu des options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestion].question;

   
    document.getElementById("option1").innerText = questions[currentQuestion].options[0];
    document.getElementById("option2").innerText = questions[currentQuestion].options[1];
    document.getElementById("option3").innerText = questions[currentQuestion].options[2];
    document.getElementById("option4").innerText = questions[currentQuestion].options[3];

    // mise a jour compteur des questions
    const questionCounter = document.getElementById("questionCounter");
    questionCounter.innerText = `Question ${currentQuestion + 1} de ${questions.length}`;

    // couleur de background des buttons
    document.querySelectorAll(".button2").forEach(function(button) {
        button.style.backgroundColor = "";
      
    });
}

// fonction qui verifier la reponse
function selectOption(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    const options = document.querySelectorAll(".button2");

  
    if (selected === correctAnswer) {
        options[selected].style.backgroundColor = "green";
    } else {
       
        options[selected].style.backgroundColor = "red";
        options[correctAnswer].style.backgroundColor = "green"; 
    }

    
}

//fonction qui pase a autre question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert("Le quiz est terminé");
        currentQuestion = 0;
        displayQuestion();
    }
}

// liee chaque button par option
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
document.getElementById("next").addEventListener("click", nextQuestion);

//afficher premier question
displayQuestion();
