(async () => { // start of wrapper (I will explain how this works later)
	let house = `
                            .-----.
                          .'       \`.
                         :      ^v^  :
                         :           :
                         '           '
          |~        www   \`.       .'
         /.\\       /#^^\\_   \`-/\\--'
        /#  \\     /#%    \\   /# \\
       /#%   \\   /#%______\\ /#%__\\
      /#%     \\   |= I I ||  |- |
      ~~|~~~|~~   |_=_-__|'  |[]|
        |[] |_______\\__|/_ _ |= |\`.
 ^V^    |-  /= __   __    /-\\|= | :;
        |= /- /\\/  /\\/   /=- \\.-' :;
        | /_.=========._/_.-._\\  .:'
        |= |-.'.- .'.- |  /|\\ |.:'
        \\  |=|:|= |:| =| |~|~||'|
         |~|-|:| -|:|  |-|~|~||=|      ^V^
         |=|=|:|- |:|- | |~|~|| |
         | |-_~__=_~__=|_^^^^^|/___
         |-(=-=-=-=-=-(|=====/=_-=/\\
         | |=_-= _=- _=| -_=/=_-_/__\\
         | |- _ =_-  _-|=_- |]#| I II
         |=|_/ \\_-_= - |- = |]#| I II
         | /  _/ \\. -_=| =__|]!!!I_II!!
        _|/-'/  \` \\_/ \\|/' _ ^^^^\`.==_^.
      _/  _/\`-./\`-; \`-.\\_ / \\_'\\\`. \`. ===\`.
     / .-'  __/_   \`.   _/.' .-' \`-. ; ====;\\
    /. jgs./    \\ \`. \\ / -  /  .-'.' ====='  >
   /  \\  /  .-' \`--.  / .' /  \`-.' ======.' /`.slice(1);
	pc.text(house, 1, 1);
	await pc.alert("Start Game", 40, 10, 15);
	pc.erase();

	let choice = -1; // initialize choice to -1, user has not made any choice yet

	async function turnPage() {
		pc.erase();
		let msg = ''; // initialize message to empty string
		let choices = []; // initialize choices to empty array
		if (choice == -1) {
			/* PART A: Start your story! */
			msg = "Your heart starts beating because the killer is near.";
			pc.text(msg, 2, 3);
			// "1: You hide in the room to your left \n\t" +
			// "2: You run to the pallet in front of you \n\t" +
			// "3: You vault the window to your right ";
			choices = [1, 2, 3];

			let door = `
 ______________
|\\ ___________ /|
| |  /|,| |   | |
| | |,x,| |   | |
| | |,x,' |   | |
| | |,x   ,   | |
| | |/    |%==| |
| |    /] ,   | |
| |   [/ ()   | |
| |       |   | |
| |       |   | |
| |       |   | |
| |      ,'   | |
| |   ,'      | |
|_|,'_________|_|
You hide in the
room to your left`.slice(1);

			pc.button(door, 3, 5, () => {
				// add code for when the button is clicked here
				choice = 1;
				turnPage();
			});

			let openwindow = `
	 	o=(=(=(=(=(=)=)=)=)=)=o
	    !-'-'-'-/_\\-'-'-'-!
	    !!!  , /___\\\`   !!!
	    !!! , /  |  \\\`  !!!
	    !!  ,|___|___|\`  !!
	    !_,| |_______|\` \`_!
	    !-\`| |       | |,-!
	    !!!! |       | ! !!
	    !!!! |       | !!!!
	    !!!!_|_______|_!!!!
	    !!!!___________!!!!
	    !!!!           !!!!
	    !!!!           !!!!
	    !!!!           !!!!
	    !!!!           !!!!
			You vault the window
			to your right`.slice(1);
			pc.button(openwindow, 50, 5, () => {
				choice = 2
				turnPage();
			});


			let pallet = `
	+---+---+---+---+---+---+
	| o | o   o | o   o | o |
	+---+---+---+---+---+---+
	| o   o | o   o | o   o |
	+---+---+---+---+---+---+
	| o | o   o | o   o | o |
	+---+---+---+---+---+---+
	| o   o | o   o | o   o |
	+---+---+---+---+---+---+
	| o | o   o | o   o | o |
	+---+---+---+---+---+---+
	| o   o | o   o | o   o |
	+---+---+---+---+---+---+
	| o | o   o | o   o | o |
	+---+---+---+---+---+---+
	You run to the pallet
	in front of you`.slice(1);
			pc.button(pallet, 23, 9, () => {
				choice = 3
				turnPage();
			});

		} else if (choice == 1) {
			/* PART A: continue the story */
			msg = "The killer comes in and smells your scent\n\n\t" +
				"4: Hide under desk\n\t" +
				"5: Hide in locker\n\t" +
				"6: Run to chest and grab flashlight";
			choices = [4, 5, 6];
		} else if (choice == 2) {
			msg = "You drop the pallet stunning the killer\n\n\t" +
				"7: Run to the chest and grab flahlight\n\t" +
				"8: Run to the broken down shack\n\t" +
				"9: Run to the basement";
			choices = [7, 8, 9];
		} else if (choice == 3) {
			msg = "The killer vaults the window like you\n\n\t" +
				"10: Run to shack\n\t" +
				"11: Quickly sprint to cow tree\n\t" +
				"12: Escape to police car";
			choices = [10, 11, 12];
		} else if (choice == 4) {
			msg = "The killer walked past you under the desk\n\n\t" +
				"13: get out slowly\n\t" +
				"14: get out quickly and make a break for it\n\t" +
				"15: stay and hide";
			choices = [13, 14, 15];
		} else if (choice == 5) {
			msg = "The killer walked past you in the locker\n\n\t" +
				"16: get out slow and traverse out of the house\n\t" +
				"17: stay and hide\n\t" +
				"18: get out quickly and sprint to next room";
			choices = [16, 17, 18];
		} else if (choice == 6 || choice == 7) {
			msg = "The killer sees you and begins to sprint\n\n\t" +
				"19: Point the flashlight at their eyes\n\t" +
				"20: Throw it at their head\n\t" +
				"21: Give up and cry";
			choices = [19, 20, 21];
		} else if (choice == 8 || choice == 10) {
			msg = "The killer follows and is gaining ground\n\n\t" +
				"22: Vault the window\n\t" +
				"23: Drop the pallet when the killer is near\n\t" +
				"24: Run to the underground room inside the shack";
			choices = [22, 23, 24];
		} else if (choice == 9 || choice == 24) {
			msg = "You see lockers, bones, hooks and it looks like the walls are closing in\n\n\t" +
				"25: Get in locker\n\t" +
				"26: Grab a bone and fight\n\t" +
				"27: Hide behind a hook";
			choices = [25, 26, 27];
			// All Death
		} else if (choice == 11) {
			msg = "You have found yourself staring up into cows hanging from a tree dead and rotten, and to make matters worse the killer wants to put you up there as well\n\n\t" +
				"28: Hide behind a big boulder\n\t" +
				"29: Climb the tree\n\t" +
				"30: Pretend you have fainted";
			choices = [28, 29, 30];
			// 29 makes you escape
		} else if (choice == 12) {

		} else if (choice == 13) {

		} else if (choice == 14 || choice == 18) {
			msg = "You are spotted by the killer and comes over to decapitate you. Press cancel to exit the game.\n\n\t" +
				"-1: Play again!";
			choices = [-1];
		} else if (choice == 15 || choice == 17) {
			msg = "Your heart is beating and breath is so loud the killer hears you and strangles you to death. Press cancel to exit the game.\n\n\t" +
				"-1: Play again!"
			choices = [-1];
		} else if (choice == 16) {

		} else if (choice == 19) {

		} else if (choice == 20) {

		}

		if (choice != -1) {
			// prompt the player to make choices
			let input = await pc.prompt(msg);
			input = Number(input);
			if (choices.includes(input)) {
				choice = input;
			}
			turnPage();
		}
	}

	turnPage();




	/* PART B: end the game if there are no more choices to make */

	/* PART B: check if the player made a valid choice */


	//exit(); // exits the game
})(); // end wrapper
