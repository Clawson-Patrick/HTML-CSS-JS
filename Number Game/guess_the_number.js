
var guessCount = 0;

var random = Math.floor((Math.random() * 100) + 1);

var guess = prompt('Guess a number 1 - 100');

while (guess != random) {
    if (guess < random) {
        guess = prompt('You guessed to low, guess higher');
        guessCount = guessCount +1;
    }
    else {
        guess = prompt('Wrong! Guess lower');
        guessCount = guessCount +1;
    }
}

alert('YOU WIN! You guessed ' + guessCount + " times ");
