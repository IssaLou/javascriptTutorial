/*
3 CHALLENGES
Change the game to follow these new rules:

1. A player looses their ENTIRE score when they roll two sixes in a row.
    After that, it's the next player's turn (Hint: Always save the previous dice
    roll in a separte variable).
2. Add an input field to the HTML where players can set the winning score, so that
    they change the predefined socre of 100. (Hint: you can read that value with the
    .value property in JS. This is a good opportunity to use google to figure it out).
3. Add another dice to the game, so that there are two dices now. The player looses
    his current score when one of them is a 1. (Hint: you will need css to position the
    second dice, so take a look at the css code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var previousDiceRoll;

document.querySelector('.btn-roll').addEventListener('click', function() {;
    if(gamePlaying) {
        //1. Random number
        let dice1 = Math.floor(Math.random() * 6) +1;
        let dice2 = Math.floor(Math.random() * 6) +1;

        //2. Display the result
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        if(dice1 !== 1 && dice2 !== 1) {
            // Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

        //3. Update the round score if the rolled number was NOT a 1
        // Part of challenge 2
        // if(previousDiceRoll === 6 && dice === 6) {
        //     scores[activePlayer] = 0;
        //     document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //     nextPlayer();
        // } else if(dice !== 1){
        //     // Add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     //Next player
        //     nextPlayer();
        // }
        // previousDiceRoll = dice; 
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add CURRENT score to GLOBAL score.
    if(gamePlaying) {
        scores[activePlayer] += roundScore;

        //Update the UI 
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector('.final-score').value;
        let winningScore;
        // Type coercion: values that are undefined, 0, "" or null are COERCED to FALSE
        // Anything else is COERCED to TRUE
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.add('active');
    }