const target =
	' .d88b. \n' +
	'.8P  Y8.\n' +
	'88    88\n' +
	'88    88\n' +
	"'8b  d8'\n" +
	" 'Y88P' ";

/* PART A: change the values of x and y to be random */
// screen size is 80w x 30h
// target is 8w x 6h
// drawing starts from top left corner
// we want to draw the target within the bounds of the frame
// 80 screen width - 8 target width - 1 frame line = 71
// 30 screen height - 6 target height - 1 frame line = 23

let btn;
let times = [];

async function btnClick() {
	times.push(Date.now());
	console.log(times);

	if (btn) {
		btn.erase();
	}
	await makeBackground();

	if (times.length == 20) {

		let speeds = [];
		for (let i = 0; i < times.length - 1; i++) {
			speeds.push(times[i + 1] - times[i]);
		}
		console.log(speeds);

		let sum = 0;
		for (let i = 0; i < speeds.length; i++) {
			sum += speeds[i];
		}

		let avg = Math.round(sum / speeds.length);

		let fastest = speeds[0];
		let fastIndex = 0;
		let slowest = speeds[0];
		let slowIndex = 0;

		for (let i = 1; i < speeds.length; i++) {
			if (fastest > speeds[i]) {
				fastest = speeds[i];
				fastIndex = i;
			}
			if (slowest < speeds[i]) {
				slowest = speeds[i];
				slowIndex = i;
			}
		}


		await pc.alert('Your average response time was ' + avg + 'ms\n' +
			'Your slowest time was ' + slowest + 'ms on button ' + slowIndex + '\n' +
			'Your fastest time was ' + fastest + 'ms on button ' + fastIndex);

	} else {
		let x = Math.ceil(Math.random() * 71);
		let y = Math.ceil(Math.random() * 23);
		btn = pc.button(target, x, y, btnClick);
	}
}

async function makeBackground() {
	let patterns = [
		'#=-=-='.repeat(13),
		'=#=-=-'.repeat(13),
		'-=#=-='.repeat(13),
		'=-=#=-'.repeat(13),
		'-=-=#='.repeat(13),
		'=-=-=#'.repeat(13)
	];

	for (let row = 1; row < 29; row++) {
		await pc.text(patterns[row % 6], 1, row);
	}
}

async function startGame() {
	await makeBackground();
	await pc.alert("Click the 20 buttons as fast as you can!");
	btnClick();
}

startGame();

/* PART B: Use recursion to make a new button after clicking a button */

/* PART C: Limit clicks to 20, calculate stats */

/* PART D: Make a background pattern */
