// var quizContainer = document.getElementById('#quiz');
// var resultContainer = document.getElementById('results');
// var submitbutton = document.getElementById('submit');

// build a quiz 
// display the quiz
// then show results

// I want a countdown timer to be displayed
var timer = 30;
console.log(timer);
function countDown () {
    
    setInterval(function() {
        // Every time the function is run I want var timer to be decremented by 1
        timer--;
        console.log(timer); 
    }, 1000);
    // after 30 seconds the countdown should stop (clearInterval())
}

countDown();

// I want questions to be displayed on the screen
    // look at jquery docs for .append(), .html(), .remove()
// I want them to have multiple answers to choose from
    // look in to html "radio" buttons.




// function (build) {

// }


// list questions
// var questions = [
//     {
//         question: "who is the best player?",
//         answwers: { 
//         a: "Kobe Bryant",
//         b: "Mickeal Jordan",
//         c: "kevin"
//     },
//     correctAnswer: "b"

//     },
//     {
//         questions: "What is the capital city of Minnesota?",
//         answers: {
//             a: "Saint Paul",

//         }
//     }
     
// ]
