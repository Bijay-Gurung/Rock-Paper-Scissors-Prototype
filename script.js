let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';

let moveList = ['Rock','Paper','Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

let playAgainButton = document.createElement('button');
playAgainButton.innerHTML= 'Play Again!';
playAgainButton.style.display = 'none';

function calcResult(move1,move2){
    if(move1 === move2){
        return tieMsg;
    }
    else if(
        (move1 === 'Rock' && move2 === 'Scissors') ||
        (move1 === 'Paper' && move2 === 'Rock') ||
        (move1 === 'Scissors' && move2 === 'Paper')
    ){
        return winMsg;
    }else{
        return loseMsg;
    }
}

function randomMove(){
    return Math.floor(Math.random()*moveList.length);
}

function startGame(){
    statusDisplay.innerHTML = 'Choose!';

    for(let i=0; i < buttons.length; i++){
        buttons[i].innerHTML = moveList[i];
        buttons[i].style.display = "inline-block";
        buttons[i].addEventListener('click',playRound);
    }
}

function endGame(){
    for(let i=0; i < buttons.length; i++){
        buttons[i].style.display = "none";
        buttons[i].removeEventListener('click',playRound);
    }
    playAgainButton.style.display = 'inline-block';
    playAgainButton.addEventListener('click',restartGame);
}

function restartGame(){
    startGame();
    playAgainButton.style.display = 'none';
}

function playRound(event){
    const playerMove = event.target.innerHTML;
    const computerMove = moveList[randomMove()];

    moveDisplays[0].innerHTML = `Player: ${playerMove}`;
    moveDisplays[1].innerHTML = `Computer: ${computerMove}`;

    const result = calcResult(playerMove,computerMove);
    statusDisplay.innerHTML= result;
    endGame();
}
startGame();
document.querySelector('.game-button-wrapper').appendChild(playAgainButton);