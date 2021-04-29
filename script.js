let timeLeft = 60;
let questionNumber = 0;
let score = 0;

//Timer and score html elements
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

//homecard and high score elements
const homeCard = document.getElementById("homeCard");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");

//Question container quiz elements
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const startButton = document.getElementById("startButton");

//Array of question objects
const questions = [
    {
        question: "Which of these is not a programming language?",
        choice1: "Python",
        choice2: "JAVA",
        choice3: "HTML",
        choice4: "C++",
        trueAnswer: 3,
    },
    {
        question: "Which is the best way to execute some code again and again a set number of times?",
        choice1: "An IF statement",
        choice2: "A FOR loop",
        choice3: "A SWITCH statement",
        choice4: "A WHILE loop",
        trueAnswer: 2,
    },
    {
        question: "What kind of file generally hold the background logic of a webpage?",
        choice1: "A Javascript file",
        choice2: "A CSS file",
        choice3: "A README file",
        choice4: "An HTML file",
        trueAnswer: 1,
    },
    {
        question: "Which of these will generally take up the most storage space on a hard drive?",
        choice1: "A TXT file",
        choice2: "A PNG file",
        choice3: "A 5-second MP4 file",
        choice4: "A 5-second GIF file",
        trueAnswer: 4,
    },
    {
        question: "Which of these is not a logic gate?",
        choice1: "AND",
        choice2: "OR",
        choice3: "NAND",
        choice4: "WHILE",
        trueAnswer: 4,
    }
]

function quiz(){
    if(questionNumber >= questions.length){
        endQuiz();
    }
    else{
        //display question and possible answers
        const currentQuestion = questions[questionNumber];
        question.innerHTML = currentQuestion.question;
        answer1.innerHTML = currentQuestion.answer1;
        answer2.innerHTML = currentQuestion.answer2;
        answer3.innerHTML = currentQuestion.answer3;
        answer4.innerHTML = currentQuestion.answer4;
    }
}

let timer;
function countdown(){
    //ends the quiz if timer gets to zero
    timer = setTimeout(()=>{
    }, 1000);
}

function checkAnswer(answerNum){
    //Check if the selected answer matches the true answer of the current question
    if(answerNum == questions[questionNumber.trueAnswer]){
        reward();
        //If the answer is correct, add to the score
    }
    else{
        punish();
    }
    //Go to next question
    questionNumber++;
    //Display next question
    quiz();
}

function reward(){
    score++;
    scoreEl.innerHTML = score;
}
function punish(){
    //subtract 5 seconds from the timer
    timer = timer-5;
}

function endQuiz(){
    //Write score to local storage
    //Hide quiz card
    //Reset timer, score, questionNumber
    //Get scores from local storage and write them to the homecard.
    fetchScores();
    //Bring up home card
}

function fetchScores(){
    //get the scores from local storage and write them to the scoreboard

}

function buttonClick(){
    console.log("starting quiz...");
    homeCard.style.display = "none";
    questionContainer.style.display = "block";
    quiz();
}

startButton.addEventListener("click", buttonClick);
answer1.addEventListener("click", checkAnswer(1));
answer2.addEventListener("click", checkAnswer(2));
answer3.addEventListener("click", checkAnswer(3));
answer4.addEventListener("click", checkAnswer(4));