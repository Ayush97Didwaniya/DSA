// 1
// 10
// 101
// 1010
// 10101

// ----1
// ---10
// --101
// -1010
// 10101

const n = 5;

for (let i = 0; i < n; i++) {
	let row = "";
	for (let j = 0; j <= i; j++) {
		if (j % 2 !== 0) {
			row = row + "0";
		} else {
			row = row + "1";
		}
	}
	console.log(row);
}

for (let i = 0; i < n; i++) {
	let row = "";
	for (let j = 0; j < n - (i + 1); j++) {
		row = row + "*";
	}
	for (let k = 0; k <= i; k++) {
		if (k % 2 !== 0) {
			row = row + "0";
		} else {
			row = row + "1";
		}
	}
	console.log(row);
}
