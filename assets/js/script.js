document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName("button")
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();

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
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

// parse the input from user 
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('You got it right! :)');
        incrementScore();
    } else {
        alert(`Sorry you answer was ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1])
}

// calculates the correct answer based on the arithmetic chosen
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '/') {
        return [operand1 / operand2, 'division'];
    } else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}

//checks if answer is correct and adds to the correct answer score tally
function incrementScore() {

    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = score + 1;

}



//checks if answer is wrong and adds to the wrong answer score tally
function incrementWrongAnswer() {
    let score = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = score + 1;
}

//generates and displays a random addition question
function displayAdditionQuestion(num1, num2) {
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = '+';

}
//generates and displays a random subtract question
function displaySubtractQuestion(num1, num2) {
    document.getElementById('operand1').textContent = num1 > num2 ? num1: num2;
    document.getElementById('operand2').textContent = num1 > num2 ? num2: num1;
    document.getElementById('operator').textContent = '-';

}
//generates and displays a random multiply question
function displayMultiplyQuestion(num1, num2) {
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = 'x';

}
//generates and displays a random division question
function displayDivisionQuestion(num1, num2) {
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = '/';
}