let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

// naming player's choice
const player_rock = document.querySelector('#player_rock');
const player_paper = document.querySelector('#player_paper');
const player_scissors = document.querySelector('#player_scissors');

// naming computer's choice
const computer_rock = document.querySelector('#computer_rock');
const computer_paper = document.querySelector('#computer_paper');
const computer_scissors = document.querySelector('#computer_scissors')

// grabbing the element to show the result
const result = document.querySelector('.result');

// inserting the result
const display = document.createElement('p');

// grabing elements to display points
const computerPoints = document.querySelector('.computerPoints');
const playerPoints = document.querySelector('.playerPoints');

// button to refresh the game
const newGame = document.querySelector('.btnRefresh');
newGame.addEventListener('click', function () {
    window.location.reload();
});


// adding event listeners to player choices
player_rock.addEventListener('click', function (e) {
    let playerChoice = 'rock';

    // random choice for computer
    let computerChoice = computerPlay();

    // adding transition
    addTransition(playerChoice, computerChoice);

    // removing transition
    removeTransition();

    // function to play the game
    playRound(playerChoice, computerChoice);

    //deciding the winner
    if (playerScore === 5) {
        display.textContent = 'You won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
    else if (computerScore === 5) {
        display.textContent = 'Computer won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
});

player_paper.addEventListener('click', function () {
    let playerChoice = 'paper';

    // random choice for computer
    let computerChoice = computerPlay();

    // adding transition
    addTransition(playerChoice, computerChoice);

    // removing transition
    removeTransition();

    // function to play the game
    playRound(playerChoice, computerChoice);

    //deciding the winner
    if (playerScore === 5) {
        display.textContent = 'You won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
    else if (computerScore === 5) {
        display.textContent = 'Computer won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
});

player_scissors.addEventListener('click', function () {
    let playerChoice = 'scissors';

    // random choice for computer
    let computerChoice = computerPlay();

    // adding transition
    addTransition(playerChoice, computerChoice);

    // removing transition
    removeTransition();

    // function to play the game
    playRound(playerChoice, computerChoice);

    // deciding the winner
    if (playerScore === 5) {
        display.textContent = 'You won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
    else if (computerScore === 5) {
        display.textContent = 'Computer won the game!!!';
        result.insertBefore(display, result.firstChild);
        newGame.setAttribute('style', 'display:block');
        newGame.addEventListener('click', function () {
            window.location.reload();
        });
    }
});


// generation random choices for comuter 
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 1000);

    if ((computerChoice % 3) === 0) {
        return 'rock';
    }
    else if ((computerChoice % 3) === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}


// function to add transition 
function addTransition(playerChoice, computerChoice) {
    if (playerScore === 5 || computerScore === 5) return;
    if (playerChoice === 'rock') {
        player_rock.classList.add('playing');
    }
    if (playerChoice === 'paper') {
        player_paper.classList.add('playing');
    }
    if (playerChoice === 'scissors') {
        player_scissors.classList.add('playing');
    }
    if (computerChoice === 'rock') {
        computer_rock.classList.add('playing');
    }
    if (computerChoice === 'paper') {
        computer_paper.classList.add('playing');
    }
    if (computerChoice === 'scissors') {
        computer_scissors.classList.add('playing');
    }
}

// function to remove transition
function removeTransition() {

    const playerChoices = document.querySelectorAll('.player');
    playerChoices.forEach(choice => choice.addEventListener('transitionend', function (e) {
        e.target.classList.remove('playing');
    }));

    const computerChoices = document.querySelectorAll('.computer');
    computerChoices.forEach(choice => choice.addEventListener('transitionend', function (e) {
        e.target.classList.remove('playing');
    }));
}



// function to play the game 
function playRound(playerChoice, computerChoice) {
    // console.log(playerChoice);
    // console.log(computerChoice);

    const display = document.createElement('p');

    if (computerScore === 5 || playerScore === 5) return;

    if (playerChoice === computerChoice) {
        display.textContent = `Tie for round #${++roundCounter}: ${playerChoice} and ${computerChoice}`;
        result.insertBefore(display, result.firstChild);
    }
    else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            display.textContent = `Computer won round #${++roundCounter}: ${computerChoice} beats ${playerChoice}`;
            computerPoints.textContent = `${++computerScore}`;
            result.insertBefore(display, result.firstChild);
        }
        else {
            display.textContent = `You won round #${++roundCounter}: ${playerChoice} beats ${computerChoice}`;
            playerPoints.textContent = `${++playerScore}`;
            result.insertBefore(display, result.firstChild);
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            display.textContent = `Computer won round #${++roundCounter}: ${computerChoice} beats ${playerChoice}`;
            computerPoints.textContent = `${++computerScore}`;
            result.insertBefore(display, result.firstChild);
        }
        else {
            display.textContent = `You won round #${++roundCounter}: ${playerChoice} beats ${computerChoice}`;
            playerPoints.textContent = `${++playerScore}`;
            result.insertBefore(display, result.firstChild);
        }
    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            display.textContent = `Computer won round #${++roundCounter}: ${computerChoice} beats ${playerChoice}`;
            computerPoints.textContent = `${++computerScore}`;
            result.insertBefore(display, result.firstChild);
        }
        else {
            display.textContent = `You won round #${++roundCounter}: ${playerChoice} beats ${computerChoice}`;
            playerPoints.textContent = `${++playerScore}`;
            result.insertBefore(display, result.firstChild);
        }
    }
}