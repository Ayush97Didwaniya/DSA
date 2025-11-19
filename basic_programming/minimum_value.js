// Minimum value in array
const arr = [-3, 5, -234, 6345, 1212];

console.log(arr.length);
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i];
	}
}
console.log(min);
