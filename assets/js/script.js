document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit!')

            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}!`)
            }
        })
    }
})
//runs when user clicks any of the calculations buttons
//function calls the corresponding math function depending on the arithmetic
function runGame() {
    if( gameType ==='addition'){
        displayAdditionQuestion();
    }

}

// parse the input from user 
function checkAnswer() {

}

// calculates the correct answer based on the arithmetic chosen
function calculateCorrectAnswer() {

}

//checks if answer is correct and adds to the correct answer score tally
function incrementScore() {

}

//checks if answer is wrong and adds to the wrong answer score tally
function incrementWrongAnswer() {

}

//generates and displays a random addition question
function displayAdditionQuestion() {

}
//generates and displays a random subtract question
function displaySubtractQuestion() {

}
//generates and displays a random multiply question
function displayMultiplyQuestion() {

}
//generates and displays a random division question
function displayDivisionQuestion() {

}