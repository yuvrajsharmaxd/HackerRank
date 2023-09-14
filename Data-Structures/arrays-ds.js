// 1st Approach using two arrays
// function reverseArray(a) {
// 	let rev = [];

// 	for (let i = a.length - 1; i >= 0; i--) {
// 		rev.push(a[i]);
// 	}

// 	return rev;
// }

// 2nd Approach using Two Pointers on that array
function reverseArray(a) {
	let high = a.length - 1;
	let low = 0;

	for (; high - low > 0; high--, low++) {
		let temp = a[high];
		a[high] = a[low];
		a[low] = temp;
	}

	return a;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const revArr = reverseArray(arr);

console.log(revArr);
