let timeLeft = 60;
let questionNumber = 0;
let score = 0;

//Timer and score html elements
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

//homecard and high score elements
const homeCardEl = document.getElementById("homeCard");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const score3El = document.getElementById("score3");
const score4El = document.getElementById("score4");

//Question container quiz elements
const questionContainerEl = document.getElementById("questionContainer");
const questionEl = document.getElementById("question");
const answer1El = document.getElementById("answer1");
const answer2El = document.getElementById("answer2");
const answer3El = document.getElementById("answer3");
const answer4El = document.getElementById("answer4");

//Start button element
const startButtonEl = document.getElementById("startButton");

//Click listener for the Start Quiz button
startButtonEl.addEventListener("click", buttonClick);


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
        questionEl.innerText = currentQuestion.question;
        answer1El.innerText = currentQuestion.choice1;
        answer2El.innerText = currentQuestion.choice2;
        answer3El.innerText = currentQuestion.choice3;
        answer4El.innerText = currentQuestion.choice4;
    }
}

function countdown(){
    //ends the quiz if timer gets to zero
    setInterval(() => timeLeft--, 1000);
}

function checkAnswer(answerNum){
    //Check if the selected answer matches the true answer of the current question
    console.log("You picked answer " + answerNum);
    if(answerNum == questions[questionNumber].trueAnswer){
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
    timerEl.innerHTML = timer;
}

function endQuiz(){
    //Stop timer
    //Add time to score
    //Check if score is greater than any of the other scores
    //If it is, proceed. If not, end.
    //Write score to local storage
    localStorage.setItem("score", score);
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
    homeCardEl.style.display = "none"; //Hide the home card from view
    questionContainerEl.style.display = "block"; //Show the question container
    timerEl.innerHTML = timeLeft;
    scoreEl.innerHTML = score;
    quiz();
}

//Click listeners for the answer list items
answer1El.addEventListener("click", function() {checkAnswer(1)});
answer2El.addEventListener("click", function() {checkAnswer(2)});
answer3El.addEventListener("click", function() {checkAnswer(3)});
answer4El.addEventListener("click", function() {checkAnswer(4)});