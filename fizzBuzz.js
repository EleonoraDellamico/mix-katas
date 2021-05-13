// (i % 3 === 0 ) Multipli of 3
//(i % 5 === 0) Multipli of 5
function FizzBuzz(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		console.log('FizzBuzz');
	} else if (number % 5 === 0) {
		console.log('Buzz');
	} else if (number % 3 === 0) {
		console.log('Fizz');
	}
}
FizzBuzz(9);

const FizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else {
			console.log(i);
		}
	}
};
console.log(FizzBuzz());
