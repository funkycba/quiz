
//var prologue = document.querySelector("#opening");
//var quizContainer = document.getElementById("#quiz");
//var results = document.getElementById("#results");
//var submitAns = document.getElementById("#submit");
/*var questions = [
    { 
        question:"#1: Commonly used data types do not include:___",
    answers:{ a: 'Strings',
    b: 'Booleans',
    c: 'Numbers',
    d: 'Alerts',
    
}, correct: 'd'
    },
]
function startQuiz(quizContainer, questions, results, submitAns){
    function revealQuiz(questions, quizContainer){

    }
    function revealResults(questions, quizContainer, results){
       var options = quizContainer.querySelectorAll('answers');
       const points = 0;
       var selectedAns = '';
    }
    revealQuiz(questions, quizContainer);{
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers)
            answers.push
        }
        output.push
    }
    submitAns.onclick = function(){
        revealResults(questions, quizContainer, results);
    }
}*/
var results = document.querySelector("#results").style.display = 'none'
var pageOne = document.querySelector("#first-q").style.display = 'none'
var pageTwo = document.querySelector("#second-q").style.display = 'none'
var pageThree = document.querySelector("#third-q").style.display = 'none'
console.log(pageOne);
console.log(pageTwo);
console.log(pageThree);
var wrongEl = document.querySelector(".wrong")
var scoreEl = document.querySelector("#hs");
var correctEl = document.querySelector(".correct")
points = localStorage.getItem("points");
function setCounterText() {
    scoreEl.textContent = points;
}
function revealSecond(){
    document.getElementById("second-q").style.display = 'block'
}
function revealFirst() {
    document.getElementById("first-q").style.display = 'block';
    setTime();
}
function revealThird(){
    document.getElementById("third-q").style.display = 'block'
}
    var startEl = document.querySelector("#start");
    console.log(startEl);
/*Use 'display = none' to go from page to page*/
startEl.addEventListener("click", revealFirst);
console.log(startEl);
    


var timeEl = document.querySelector("#timer");
/*Set a timer for the quiz questions after hitting "start"*/
var timeRemain = 100;
function setTime() {
    
    var timerInterval = setInterval(function() {
        timeRemain--;
        timeEl.textContent = timeRemain + "left until game over";

        if (timeRemain === 0) {
            clearInterval(timerInterval);
            revealResults();
        }
    }, 1000)
}
function addScore() {
    scoreEl = scoreEl + 5
    scoreEl.textContent;

}
console.log(scoreEl);
correctEl.addEventListener("click", function(){
    revealSecond()
    addScore()
    if (pageTwo.style.display = 'block')
    revealThird()


})
console.log(correctEl);
console.log(timeEl);
/*Create a function for the buttons that deducts time*/
wrongEl.addEventListener("click", function() {
    timeRemain = timeRemain - 5;
    timeEl.textContent = timeRemain + "left until game over";
})
function revealResults() {
    document.getElementById("results").style.display = 'block'
}
function renderResults(){
    scoreEl = localStorage.getItem("hs");
}
//event liistener
//Add event listener to start button
//onclick starttimer and reveal ques. 1

//Add event listener for each question
//Need a function to pass listeners
// New function answer check

//Add values to each answer
//Then add ids to each question

/*Store the amount of points won from answering the questions*/

