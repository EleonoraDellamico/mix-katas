function highNumberRepeat(ar) {
	const max = Math.max(...ar);
	let frequency = 0;
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === max) {
			frequency++;
		}
	}
	return frequency;
}
console.log(highNumberRepeat([ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ]));

const array = [ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ];
function highNumberRepeat(array) {
	console.log(array);
	const max = Math.max(...array);
	console.log(max);
	let frequency = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === max) {
			frequency++;
		}
	}
	return frequency;
}
console.log(highNumberRepeat(array));
