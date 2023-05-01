
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
var finalAns = document.querySelector("#final-ans");
var wrongEl = document.querySelector(".wrong");
var scoreEl = document.querySelector("#hs");
var correctEl = document.querySelector(".correct");
points = localStorage.getItem("points");
var wrongSec = document.querySelector("#one-b");
var wrongThi = document.querySelector("#one-c");
var wrongFor = document.querySelector("#two-a");
var wrongFif = document.querySelector("#two-b");
var wrongSix = document.querySelector("#two-c");
var wrongSev = document.querySelector("#three-a");
var wrongEig = document.querySelector("#three-b");
var wrongNin = document.querySelector("#three-c");
secAnswer = document.querySelector("#correct-two");
var reset = document.querySelector("#redo");
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
var currentScore = 0
secAnswer.addEventListener("click", function(){
    revealThird();
    addScore();
}
)

function addScore() {
    currentScore = currentScore + 5;
    scoreEl.textContent = currentScore;

}
finalAns.addEventListener("click", function(){
    addScore();
    revealResults();
})
console.log(scoreEl);
correctEl.addEventListener("click", function(){
    revealSecond();
    addScore();
    console.log("pageTwo.style.display");
    //if (document.getElementById("second-q").style.display === 'block')
    


})
console.log(correctEl);
console.log(timeEl);
/*Create a function for the buttons that deducts time*/
wrongEl.addEventListener("click", function() {
    timeRemain = timeRemain - 10;
    timeEl.textContent = timeRemain + "left until game over";
})

function reduceTime(){
    timeRemain = timeRemain - 10;
    timeEl.textContent = timeRemain + "left until game over";
}
wrongSec.addEventListener("click", function(){
    reduceTime();
})
wrongThi.addEventListener("click", function(){
    reduceTime();
})
wrongFor.addEventListener("click", function(){
    reduceTime();
})
wrongFif.addEventListener("click", function(){
    reduceTime();
})
wrongSix.addEventListener("click", function(){
    reduceTime();
})
wrongSev.addEventListener("click", function(){
    reduceTime();
})
wrongEig.addEventListener("click", function(){
    reduceTime();
})
wrongNin.addEventListener("click", function(){
    reduceTime();
})
function revealResults() {
    document.getElementById("results").style.display = 'block'
    setCounterText();
    renderResults();
}
function renderResults(){
    localStorage.setItem("points", currentScore);
}
reset.addEventListener("click", function(){
    currentScore.innerHTML = "";
    scoreEl.textContent = currentScore;
})
//event liistener
//Add event listener to start button
//onclick starttimer and reveal ques. 1

//Add event listener for each question
//Need a function to pass listeners
// New function answer check

//Add values to each answer
//Then add ids to each question

/*Store the amount of points won from answering the questions*/

