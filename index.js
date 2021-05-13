/* function saludar() {
	console.log('ciao');
}

function despedir() {
	console.log('adios');
}
function main() {
	saludar();
	despedir();
}
console.log(main()); */

/* function foo1() {
	return {
		name: 'Hello'
	};
}

function foo2() {
	return; // doesn't work because the { starts in other line
	{
		name: 'Hello';
	}
}

console.log(foo1());
console.log(foo2());  */

//REGULAR EXPRESSION I
//Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
//The length of string s is <= 3  .String  consists of lowercase letters only (i.e., [a-z]).
//EJEMPLOS
//let datosAleatorios = '015 354 8787 687351 3512 8735';
//let regexpCuatroDigitos = /\b\d{4}\b/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// \d{4} indica un dígito, cuatro veces
// \b indica otro límite (es decir, no termina la coincidencia en medio de una palabra)
//console.table(datosAleatorios.match(regexpCuatroDigitos));

/* let re = 'abc';
let reRegexp = '^[aeiou].* $';
console.table(re.match(reRegexp)); */
/* 
let stringOne = 'Hola, ¿conoces tu abc?';
let stringMatch = /abc/;
console.log(stringOne.match(stringMatch));
const stringTwo = 'Grab crab'; */

/* var s = 'HackerPank';
console.log(s.endsWith() + ' ' + s.endsWith(''));
console.log(s.endsWith('rank') + ' ' + s.endsWith('Rank')); */

//let s = '1234';
//let sSplit = s.split('').reverse().join('');
//console.log(sSplit);

//let a = Number(1234);
//let aSplit = a.split('');
//console.log(aSplit);
//console.log(a);

/* function reverseString(s) {
	typeof s !== 'string' ? console.log('s.split is not a function') : (s = s.split('').reverse().join(''));

	console.log(s);
}
reverseString(Number(1234)); */

/* let total = 0;
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		total = i * j;
		console.log(total);
	}
} */

//Dado un array, retornar si existe el número 3. En caso de que exista indicar, además, su posición.
/* const array = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
let max = Math.max(...array);
console.log(max);
console.log(typeof array[0]);
let min = Math.min(...array);
console.log(min); */
