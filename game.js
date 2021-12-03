// Computer's choice

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 1000);
    if ((computerChoice % 3) === 0) {
        return 'Rock';
    }
    else if ((computerChoice % 3) === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

// Winner is decide here
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Its a Tie!';
    }
    else if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            return 'Player Wins!';
        }
        else {
            return 'Computer Wins!';
        }
    }
    else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            return 'Player Wins!';
        }
        else {
            return 'Computer Wins!';
        }
    }
    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            return 'Player Wins!';
        }
        else {
            return 'Computer Wins!';
        }
    }



}

//game definition 
function game() {
    let result;
    let computer_score = 0;
    let player_score = 0;

    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt('Enter your choice');
        if (playerChoice === 'Rock'|| playerChoice === 'Paper' || playerChoice === 'Scissors'){

            // Computer gets to choose
            const computerChoice = computerPlay();
            console.log('Computer choice is ' + computerChoice);
            console.log('Your choice is ' + playerChoice)
            
            // Game is played here
            result = (playRound(playerChoice, computerChoice));

            // Score is calculated here
            if (result === 'Its a Tie!'){
                console.log(result);
                continue;
            }
            else if (result === 'Player Wins!'){
                player_score += 1;
                console.log('Player score is ' + player_score);
            }
            else{
                computer_score += 1;
                console.log('Computer score is ' + computer_score);
            }

           
        }
        else {
            console.log('Choose from Rock, Paper or Scissors.\nPlay Again.')
            return;
        }
        
    }

    //Outcome is shown here
    if (player_score > computer_score){
        console.log('You Win!');
    }
    else if (player_score < computer_score){
        console.log('Computer Wins!');
    }
    else{
        console.log('You two seem on a same page!');
    }
    

}

// game begins here
game();

