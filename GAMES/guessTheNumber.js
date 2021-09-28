(async () => { // start wrapper (I will explain how this works later)

	/* Your code goes here! (inside the wrapper) :D */

	let keepPlaying = "y";

	while (keepPlaying == "y") {
		/* PART A: Make a random number between 1-100 */
		let num = Math.random() * 100;
		num = Math.ceil(num);
		console.log();

		let guess = 0;
		/* PART A: Write code for one turn of the game */
		for (let turn = 0; guess != num; turn++) {
			if (turn > 7) {
				await alert("You ran out of guesses");
				break;
			}
			// ask user to guess a number, assign their response to a variable
			guess = await prompt("Guess a number 1-100");

			// tell the player if their guess was too low, too high, or correct
			if (!(guess <= 100 && guess >= 1)) {
				await alert("your guess is invalid");
				turn--;
			} else if (guess > num) {
				await alert("your guess is too high");
			} else if (guess < num) {
				await alert("your guess is too low");
			} else {
				await alert("your guess was correct");
			}
		}

		keepPlaying = await prompt("Keep playing? (y/n)");
	}

	exit(); // exits the game
})(); // end wrapper
