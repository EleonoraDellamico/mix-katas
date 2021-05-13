//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.?????
arr1 = [ 5, 5, 5, 5, 6, 6, 1, 2, 3 ];

//sum numbers in array
let arr = [ 1, 5, 8, 10, 11 ];
//35

function sumArray(arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumArray(arr));
