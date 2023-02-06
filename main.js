// const message = document.querySelector('.message');
// const score = document.querySelector('.score');
// const buttons = document.querySelectorAll('button');
// const winnerScores = [0,0];

// for ( let i = 0 ; i < buttons.length ; i++){
//     buttons[i].addEventListener('click', playGame);
// }

// function playGame(e) {
//     let playerSelection = e.target.innerText;
//     let computerSelection = Math.random();

//     if (computerSelection < .34) {
//         computerSelection = 'rock';
//     } else if {
//         (computerSelection <= .67){
//             computerSelection = 'paper';
//         }
//     } else {
//         computerSelection = 'scissors';
//     }

//     let result = checkWinner(playerSelection, computerSelection);

//     if (result === 'player'){
//         result += ' wins!';
//         winnerScores[0]++;
//     }
//     if (result === 'computer'){
//         result += ' wins!';
//         winnerScores[1]++;
//     }
//     if (result === 'draw'){
//         result += '... it\'s a tie!'
//     }

//     score.innerHTML = 'player: [ ' + winnerScores[0]+ ' ] computer: [ ' + winnerScores[1] + ' ]';
    
    
//     messenger('player: <strong>' + playerSelection + '</strong> computer: <strong>' + computerSelection + '</strong><br>' + result);
// }

// function messenger(selectionMessage){
//     message.innerHTML = selectionMessage;
// }
// function checkWinner(player, computer){
//     if (player === computer){
//         return 'Draw';
//     }

//     if (player === 'Rock'){
//         if(computer === 'Paper'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Paper'){
//         if (computer === 'Scissors'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }

//     if (player === 'Scissors'){
//         if (computer === 'Rock'){
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }
// }