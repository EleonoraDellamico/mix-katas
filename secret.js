//how do you create a private variable in js?
function secretVariable() {
	let private = 'This is my secret';
	//add a return fuction
	return function() {
		return private;
	};
}
let getTheSecret = secretVariable();
console.log(getTheSecret());

//What is the output
var num = 4;
function outer() {
	var num = 2;
	function inner() {
		num++;
		var num = 3;
		console.log(num);
	}
	inner();
}
outer();
