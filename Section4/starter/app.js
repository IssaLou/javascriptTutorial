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

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

//Events and Event Handling: Rolling the Dice

document.querySelector('#btn-roll').addEventListener('click', function() {;
    // Do something in this annonymous function.
    //1. Random number

    //2. Display the result

    //3. Update the round score if the rolled number was NOT a 1
});




