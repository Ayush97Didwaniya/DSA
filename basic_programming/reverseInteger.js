const reverse = (x) => {
	let xCopy = x;
	x = Math.abs(x);
	let rev = 0;
	while (x > 0) {
		rev = rev * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	return xCopy < 0 ? -rev : rev;
};

console.log(reverse(-1235243));
