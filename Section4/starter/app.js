/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// Events are notifications that are sent to notify the code that
// that something happened on the webpage; e.g. clicking a button
// resizing a window, scrolling down, pressing a key etc.
// Event listeners are a function that performs an action based
// on a certain event. It waits for a specific event to happen.
// An annonymous function is a function that doesn't have a name and
// cannot be re-used, usually used within another function.

//First DOM and DOM Manipulation

//Remember let and const are pretty much the same as var; except,
// let = variable values so changing anything that is a variable.
// const =  something that is assigned once and never changed.

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
var scores, roundScore, activePlayer, dice, gamePlaying, previousDiceRoll, sixCount;

init();
//Events and Event Handling: Rolling the Dice

document.querySelector('.btn-roll').addEventListener('click', function() {;
    if(gamePlaying) {
        // Do something in this annonymous function.
        //1. Random number
        let dice = Math.floor(Math.random() * 6) +1;

        //2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score if the rolled number was NOT a 1
        if(dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        } 
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add CURRENT score to GLOBAL score.
    if(gamePlaying) {
        scores[activePlayer] += roundScore;

        //Update the UI 
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        //Check if player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
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
        
    //These commented out below removes a tag when something happens in the HTML file and can add a tag too.
    //The other two do exactle the same thing but toggle between the two HTML tags which is dependent on the conditions above.
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

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