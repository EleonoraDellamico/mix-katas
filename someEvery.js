const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];

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
