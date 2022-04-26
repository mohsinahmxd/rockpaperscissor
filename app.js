var roundscoreinfo = document.querySelector('.round-score-info')
var gameoutput = document.querySelector('.game-output')

const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissor = document.querySelector('button.scissor');

var roundnumber = 1
var userscore = 0
var computerscore = 0

let playerSelection = undefined

rock.addEventListener('click', () => {
    game("Rock");    
// I write it like this so the playerSelection function is only called until after a click ie once the button is clicked the anonymous arrow function is called followed by the playerSelection function once the click happens. This is how you should pass arguments in situations like this. 
});

paper.addEventListener('click', () => {
    game("Paper");  
});

scissor.addEventListener('click', () => {
    game("Scissor");  
});

function computerPlay () {
    let x = Math.floor((Math.random() * 3) + 1); // random number between 1 and 3
    if (x == 1) {
        return "Rock"
    } else if (x == 2) {
        return "Paper"
    } else 
        return "Scissor"

}

function playerPlay(playerSelection) {

    return playerSelection

}

function roundWin (computerSelection, playerSelection) {
    // output the users and computers choice into the browser and display if its a win draw or loss


    userscore ++
    roundscoreinfo.innerHTML = `
        <h1 class="round-number">Round number: ${roundnumber}</h1>
        <h1 class="user-score">My Score: ${userscore}</h1>
        <h1 class="computer-score">Computer Score: ${computerscore}</h1> 
    `
    if (roundnumber == 3 && (userscore == 5 || computerscore == 5)) {
        gameoutput.innerHTML = `
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>
        <h3>Game over</h3>
        <h3> Refresh to play again </h3>
        `
        rock.classList.add('d-none')
        paper.classList.add('d-none')
        scissor.classList.add('d-none')
    } else {
        gameoutput.innerHTML = `
    
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>
        `
    }
}

function roundTie (computerSelection, playerSelection) {
    // output the users and computers choice into the browser and display if its a win draw or loss

    if (roundnumber == 3 && (userscore == 5 || computerscore == 5)) {
        gameoutput.innerHTML = `
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>
        <h3>Game over</h3>
        <h3> Refresh to play again </h3>
        `
        rock.classList.add('d-none')
        paper.classList.add('d-none')
        scissor.classList.add('d-none')
    } else {
        gameoutput.innerHTML = `
    
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>

        `
    }
}

function roundLoss (computerSelection, playerSelection) {
    // output the users and computers choice into the browser and display if its a win draw or loss


    computerscore ++
    roundscoreinfo.innerHTML = `
        <h1 class="round-number">Round number: ${roundnumber}</h1>
        <h1 class="user-score">My Score: ${userscore}</h1>
        <h1 class="computer-score">Computer Score: ${computerscore}</h1> 
    `

    if (roundnumber == 3 && (userscore == 5 || computerscore == 5)) {
        gameoutput.innerHTML = `
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>
        <h3>Game over</h3>
        <h3> Refresh to play again </h3>
        `
        rock.classList.add('d-none')
        paper.classList.add('d-none')
        scissor.classList.add('d-none')
    } else {
        gameoutput.innerHTML = `
    
        <h3> You chose ${playerSelection} </h3>
        <h3> Computer chose ${computerSelection} </h3>
        <h3> You loose &#x1F92C </h3>

        `
    }
}



function playRound (computerSelection, playerSelection) {
        if (computerSelection == "Rock" && playerSelection == "Rock") {
            roundTie("Rock", "Rock");
        } else if (computerSelection == "Rock" && playerSelection == "Paper") {
            roundWin("Rock", "Paper");
        } else if (computerSelection == "Rock" && playerSelection == "Scissor") {
            roundLoss("Rock", "Scissor");
        } else if (computerSelection == "Paper" && playerSelection == "Rock") {
            roundLoss("Paper", "Rock");
        } else if (computerSelection == "Paper" && playerSelection == "Paper") {
            roundTie("Paper", "Paper");
        } else if (computerSelection == "Paper" && playerSelection == "Scissor") {
            roundWin("Paper", "Scissor");
        } else if (computerSelection == "Scissor" && playerSelection == "Rock") {
            roundWin("Scissor", "Rock");
        } else if (computerSelection == "Scissor" && playerSelection == "Paper") {
            roundLoss("Scissor", "Paper");
        } else if (computerSelection == "Scissor" && playerSelection == "Scissor") {
            roundTie("Scissor", "Scissor");
        }
}

function game (playerSelection) {
    if (userscore == 5 || computerscore == 5) {
        roundnumber ++
        userscore = 0
        computerscore = 0
        playRound(computerPlay(), playerPlay(playerSelection));
    } else {
        playRound(computerPlay(), playerPlay(playerSelection));
    }
    
}