let timer = 60;
let questionNumber = 0;

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
    //display question and possible answers

    //if question is answered wrong, punish(), else display new question
}

function countdown(){
    //ends the quiz if timer gets to zero
    //Stops timer if the quiz ends
}

function punish(){
    //subtract 5 seconds from the timer
    timer = timer-5;
}

function fetchScores(){
    //get the scores from local storage and display them in a modal

}