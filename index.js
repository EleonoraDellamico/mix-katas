/* function saludar() {
	console.log('ciao');
}

function despedir() {
	console.log('adios');
}∫∫
function main() {
	saludar();
	despedir();
}
console.log(main()); */

//Palindrome
/* 
const checkPalindrome = (palindromeName) => {
	let palindromeNameOne = palindromeName.toLowerCase();
	let newPalindromeName = palindromeName.split('').reverse('').join('').toLowerCase();
	 let checker = '';
	palindromeName = palindromeName.toLowerCase();
	checker = palindromeName;
	console.log(checker);
	checker = palindromeName.split('');
	console.log(checker);
	checker = checker.reverse('');
	console.log(checker);
	checker = checker.join('');
	//Join transform array into a string 
	//console.log(palindromeName.toLowerCase() === palindromeName.split('').reverse('').join('').toLowerCase());
	console.log(palindromeNameOne === newPalindromeName);
};
checkPalindrome('Eleonora');*/

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

// (i % 3 === 0 ) Multipli of 3
/* //(i % 5 === 0) Multipli of 5
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
outer(); */
//What is the output?
/* var hero = {
	_name: 'Eli',
	getSecretIdentity: function() {
		return this._name;
	}
};
var getTheIdentity = hero.getSecretIdentity;
console.log(getTheIdentity());
console.log(hero.getSecretIdentity()); */

//Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.?????
//arr1 = [ 5, 5, 5, 5, 6, 6, 1, 2, 3 ];

//sum numbers in array
/* let arr = [ 1, 5, 8, 10, 11 ];
//35

function sumArray(arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(sumArray(arr)); */

//Ejercice LOOP
//let phrase = 'javascriptloops';
//const vowel = [ a, e, i, o, u ];
//First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
//Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

/* function vowelsAndConsonants(s) {
	let vowels = '';
	let consonants = '';

	// For each letter in string s
	for (const letter of s) {
		// Separate vowels and consonants
		if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
			// Append vowel to vowel string
			vowels += letter;
		} else {
			// Append consonant to consonant string
			consonants += letter;
		}
	}

	// Print each vowel
	// This loop iterates over each character in the vowels string in order
	for (let i = 0; i < vowels.length; i++) {
		console.log(vowels.charAt(i));
	}

	// Print each consonant
	// This loop iterates over each letter in an array consisting of the consonants
	for (const letter of consonants.split('')) {
		console.log(letter);
	}
} */

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

/* let values = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;
console.log(lowMiddle);
console.log(highMiddle);
console.log(median); */

/* function sumNumber(numbers) {
	let sum = numbers.reduce((totalSum, number) => totalSum + number);
	return sum;
}
console.log(sumNumber([ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ])); */
/* 
let arrayNumber = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
function suma(){
	let sumaNum = 0,
	for (let i= 0; i<=arrayNumber.length; i++){
		sumaNum += arrayNumber[i]
	}
	console.log(sumaNum)	
	return parseInt(sumaNum);	
}
console.log(suma()) */
/* 
const sumNumber = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
const suma = (accumulator, currentValue) => accumulator + currentValue;

console.log(sumNumber.reduce(suma)); */
/* const arrayNumber = [ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ];
function suma(arrayNumber) {
	let sumaNum = 0;
	for (let i = 0; i <= arrayNumber.length; i++) {
		sumaNum += arrayNumber[i];
	}
	return sumaNum;
}
console.log(suma(arrayNumber)); */

/* let total = 0,
	numeros = [ 1, 2, 3, 4, 5 ];
for (let i = 0; i <= numeros.length; i++) total += numeros[i];
console.log(total); */

/* let total = 0;
const arrayNumber = [ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ];
for (let i of arrayNumber) total += i;
console.log(total); */

/* function highNumberRepeat(ar) {
	const max = Math.max(...ar);
	let frequency = 0;
	for (let i = 0; i < ar.length; i++) {
		if (ar[i] === max) {
			frequency++;
		}
	}
	return frequency;
}
console.log(highNumberRepeat([ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ])); */

/* const array = [ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ];
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
console.log(highNumberRepeat(array)); */

//EJERCICIO idiomas
/* const arrayVocales = [ 'a', 'e', 'i', 'o', 'u' ];
const sufijoAleman = 'ujem';
const sufijoBulgaro = 'kov';
function traducirPalabra(string = '', idiom = 0) {
	// evaluar si acaba en vocal o consonante.
	const ultimaletra = string[string.length - 1].toLowerCase();
	const vocaloConsonante = arrayVocales.indexOf(ultimaletra);
	// hacemos la logica en funcion de ello
	if (!string) {
		console.warn(`no hay ninguna palabra a traducir`);
	}
	if (idiom == 1) {
		if (vocaloConsonante === 0) {
			//PARA VOCAL (Quitar vocal y añadir sufijo "ujem")
			const subcadena = string.substring(0, string.length - 1);
			const traduccionAlemanV = subcadena.concat(sufijoAleman);
			console.log(`La palabra ${string} en aleman es ${traduccionAlemanV}`);
		} else {
			//PARA CONSONANTE (quitar los dos ultimos caracteres y añadir sufijo "ujem")
			const subcadenaConsonante = string.substring(0, string.length - 2);
			const traduccionAlemanC = subcadenaConsonante.concat(sufijoAleman);
			console.log(`La palabra ${string} en aleman es ${traduccionAlemanC}`);
		}
	}
	if (idiom == 2) {
		if (vocaloConsonante === 0) {
			//PARA VOCAL  añadir sufijo "kov")
			const traduccionBulgaroV = string.concat(sufijoBulgaro);
			console.log(`La palabra ${string} en bulgaro es ${traduccionBulgaroV}`);
		} else {
			//PARA CONSONANTE (quitar la ultima letra y añadir sufijo "kov")
			const subcadenaUltimaLetra = string.substring(0, string.length - 1);
			const traduccionBulgaroC = subcadenaUltimaLetra.concat(sufijoBulgaro);
			console.log(`La palabra ${string} en bulgaro es ${traduccionBulgaroC}`);
		}
	}
}
traducirPalabra('camion', 2);
traducirPalabra('silla', 2);
traducirPalabra('', 2); */

/* const terminaEnVocal = (cadena) => {
	//si no hay cadena o está vacia
	if (!cadena || !cadena.length) return false;
	// sacar el ultimo caracter y convertirlo en miniscula
	let ultimoCaracter = cadena[cadena.length - 1].toLowerCase();
	return [ 'a', 'e', 'i', 'o', 'u' ].indexOf(ultimoCaracter) !== -1;
};

//si no hay cadena o está vacia
console.log(terminaEnVocal(''));
console.log(terminaEnVocal('mundo'));
console.log(terminaEnVocal('roller')); */

//changed euro to USD with Map
//const eurToUsd = 1.1;

/* const movementsUSD = movements.map(function(mov) {
	return mov * eurToUsd;
}); */

// map with arrow function
//const movementsUSD = movements.map((mov) => mov * eurToUsd);
//console.log(movementsUSD);

//changed euro to USD with for of

//const movementsUSDfor = [];
//for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//console.log(movementsUSDfor);

/*  const changedUSD = movements.forEach(function(mov, i, arr) {
	return mov * eurToUsd;
});
console.log(movements);
console.log(changedUSD);
  */
//using map and for Each

/* const movementsDescriptions = movements.map((mov, i, arr) => {
	if (mov > 0) {
		return `Movement ${i + 1}: your deosited is ${mov} `;
	} else {
		return `Movement ${i + 1}: your withdrew is ${Math.abs(mov)} `;
	}
});
console.log(movementsDescriptions); */

//did an arrow function

/* const movementsDescriptions = movements.map(
	(mov, i, arr) => ` Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions); */

//Filter

const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

/////////////////////////////////////////////////
//USING FILTER only the positive value

const deposits = movements.filter(function(mov) {
	return mov > 0;
});
console.log(deposits);

//second option
/* const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); */

const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);

//USING REDUCE

//Using REDUCE --accumulator is snowball
const balance = movements.reduce(function(acc, cur, i, arr) {
	//
	return acc + cur;
}, 0); //we want the reduce startede in 0

console.log(balance);

//using the for of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

const max = movements.reduce((acc, mov) => {
	if (acc > mov) return acc;
	else return mov;
}, movements[0]);
console.log(max);

const euroToUsd = 1.1;
const totalDepositUSD = movements
	.filter((mov) => mov > 0)
	.map((mov, i, arr) => {
		console.log(arr);
		return mov * euroToUsd;
	})
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

//FIND IT'S ANOTHER METHOD THAT LOOPS OVER THE ARRAY NOT return a new arry as filter but ONLY the return the ONLY FIRST ELEMENT that it finds in the array.
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
console.log(account);

//EQUALITY
console.log(movements.includes(-130));

// SOME CONDITION
console.log(movements.some((mov) => mov === -130));
const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);

//EVERY CONDITION
console.log(movements.every((mov) => mov > 0));

//SEPARATE CALLBACK

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//FLAT and FLATMAP
const arrF = [ [ 1, 2, 3 ], [ 4, 5, 6 ], 7, 8 ];
console.log(arrF.flat()); //only one level nested

const arrDeep = [ [ [ 1, 2 ], 3 ], [ 4, [ 5, 6 ] ], 7, 8 ];
console.log(arrDeep.flat()); //doesn't work
console.log(arrDeep.flat(2)); //here ok


//SORTING 
//return < 0 A,B (keep order)
//return  > 0 B,A (switch order)

//ASCENDING
movements.sort((a,b)=> a-b);
console.log(movements);
/* {
	if(a > b)
	return 1; 
	if(a < b)
	return -1;
}); 
console.log(movements);
 *///DESCENDING
movements.sort((a,b)=> b- a)
/* {
	if(a > b)
	return -1; 
	if(a < b)
	return 1;
});  */
console.log(movements);
