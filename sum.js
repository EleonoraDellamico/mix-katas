 function sumNumber(numbers) {
	let sum = numbers.reduce((totalSum, number) => totalSum + number);
	return sum;
}
console.log(sumNumber([ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ])); 

let arrayNumber = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
function suma(){
	let sumaNum = 0,
	for (let i= 0; i<=arrayNumber.length; i++){
		sumaNum += arrayNumber[i]
	}
	console.log(sumaNum)	
	return parseInt(sumaNum);	
}
console.log(suma()) 

const sumNumber = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
const suma = (accumulator, currentValue) => accumulator + currentValue;

console.log(sumNumber.reduce(suma)); 


let total = 0,
	numeros = [ 1, 2, 3, 4, 5 ];
for (let i = 0; i <= numeros.length; i++) total += numeros[i];
console.log(total);

 let total = 0;
const arrayNumber = [ 1, 4, 5, 7, 3, 6, 7, 3, 4, 5, 8, 9, 87, 5, 45, 34, 23, 32, 6, 7, 87, 56, 87, 1 ];
for (let i of arrayNumber) total += i;
console.log(total); 

