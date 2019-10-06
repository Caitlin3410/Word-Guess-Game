alert('You have ten guesses.  Guess 1-10!');

var answer = 3;
var guess = prompt("What's Your guess?");

for (i = 0; i < 10; i++) {

    console.log(i + 1)
    if (answer == guess) {
        alert("You guessed correctly!");
        break;
    } else {
        guess = prompt("Sorry! Try again!");
    }
}