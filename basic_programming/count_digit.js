let n = -259;
let count = 0;
//change the number to positive
n = Math.abs(n);
while (n > 0) {
	n = Math.floor(n / 10);
	count++;
}

console.log(count);
