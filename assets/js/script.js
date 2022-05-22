document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked submit!')

            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
        runGame('addition');

    }
})
/**
 * main game loop function called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'subraction') {
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

// parse the input from user 
function checkAnswer() {

}

// calculates the correct answer based on the arithmetic chosen
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

//checks if answer is correct and adds to the correct answer score tally
function incrementScore() {

}

//checks if answer is wrong and adds to the wrong answer score tally
function incrementWrongAnswer() {

}

//generates and displays a random addition question
function displayAdditionQuestion(num1, num2) {
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = '+';

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