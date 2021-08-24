(async () => { // start of wrapper (I will explain how this works later)

	const hangman = [`
   ---+
      |
      |
      |
      |
      |
=========`, `
  +---+
      |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
      |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`, `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`];

	let words = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buxom buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby fortnite foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquee matrix megahertz microwave mystify nightclub nowadays oxidize oxygen pajama pixel pizazz playstation polka psyche puppy puzzling quartz queue quips quiz quizzes rhubarb rhythm scratch snazzy sphinx squawk staff strength stretch stronghold subway swivel syndrome thrift thumb transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xbox xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie`;

	// words += `across against answer awhile between board bottom breakfast broken build building built captain carried caught charge chicken circus cities clothes company couldn't country discover doctor doesn't dollar  during eighth else enjoy enough everybody example except excuse field fifth finish following good-by group happened harden haven't heavy held hospital idea instead known laugh middle minute  mountain ninth ocean office parent peanut pencil picnic police pretty prize quite radio raise really reason remember return Saturday scare second since slowly stories student sudden suit  sure swimming though threw tired together tomorrow toward tried trouble truly turtle until village visit wear we'll whole whose women wouldn't writing written wrote yell young `;



	/* PART A0: split the words string into an array, choose a random word */
	words = words.split(' ');
	console.log(words);

	let keepPlaying = "y";

	while (keepPlaying == "y") {

		let rand = Math.random() * words.length;
		console.log(rand);
		rand = Math.floor(rand);
		console.log(rand);

		let word = words[rand];
		console.log(word);

		/* PART A1: make an array with a line for each letter in the word */
		/* PART B: use a for loop instead of a while loop */
		// Example word: 'quiz'
		// lines -> ['_', '_', '_', '_']
		let lines = [];
		for (let i = 0; i < word.length; i++) {
			lines.push("_");
		}

		let incorrect = 0;

		/* PART A3: make the game loop */
		while (lines.includes('_')) {
			/* PART A2: show the lines for the word below the hangman string */
			let guess = await prompt("Junior O'Brien's Hangman\n" + hangman[incorrect] + "\n\n" + lines.join(" "));

			/* PART A4: implement guessing letters */
			let isCorrect = false;
			for (let i = 0; i < word.length; i++) {
				if (guess == word[i]) {
					lines[i] = guess;
					isCorrect = true;
				}
			}
			if (isCorrect == false) {
				incorrect++;
			}
			/* PART B1: implement guessing the whole word */


			if (incorrect == hangman.length) {
				keepPlaying = await prompt("You have been incorrect to many times." +
					"The word was " + word + ". Press y to play again.");
				break;
			}
		}

		if (incorrect < hangman.length) {
			keepPlaying = await prompt("You have guessed the correct word." +
				"The word was " + word + ". Press y to play again.");
		}
	}

	exit(); // exits the game
})(); // end wrapper
