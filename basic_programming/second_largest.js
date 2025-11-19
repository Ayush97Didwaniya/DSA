// function secondLargest(arr) {
// 	let secondLargest = arr[0],
// 		firstlargest = arr[1];
// 	arr.forEach((ele) => {
// 		if (ele > largest) {
// 			secondLargest = firstlargest;
// 			firstlargest = ele;
// 		}
// 	});
// 	return secondLargest;
// }

// function secondLargest(arr) {
// 	if (arr.length < 2) {
// 		return "Array should have atlest 2 elements";
// 	}
// 	let secondLargest,
// 		firstlargest = -Infinity;
// 	arr.forEach((ele) => {
// 		if (ele > firstlargest) {
// 			secondLargest = firstlargest;
// 			firstlargest = ele;
// 		} else if (ele > secondLargest) {
// 			secondLargest = ele;
// 		}
// 	});
// 	return secondLargest;
// }

// const arr = [500, 300, 200, 100];

// two corner cases:
//  duplicate elemets [20, 10, 20]
// all negative number
function secondLargest(arr) {
	if (arr.length < 2) {
		return "Array should have atlest 2 elements";
	}
	let secondLargest,
		firstlargest = -Infinity;
	arr.forEach((ele) => {
		if (ele > firstlargest) {
			secondLargest = firstlargest;
			firstlargest = ele;
		} else if (ele > secondLargest && ele != firstlargest) {
			secondLargest = ele;
		}
	});
	return secondLargest;
}

const arr = [-500, -300, -500, -200, -100, -100];

let result = secondLargest(arr);

console.log(result);
