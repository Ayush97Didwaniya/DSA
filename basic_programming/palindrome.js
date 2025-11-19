function checkIfPalindrome(n) {
	const initialNumber = n;
	let reverse = 0;
	while (n > 0) {
		reverse = reverse * 10 + (n % 10);
		n = Math.floor(n / 10);
	}

	return reverse === initialNumber;
}

const result = checkIfPalindrome(1234321);

console.log(result);
