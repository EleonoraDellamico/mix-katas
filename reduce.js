//USING REDUCE
// Data simulation API JSON
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [ 200, 450, -400, 3000, -650, -130, 70, 1300 ],
	interestRate: 1.2, // %
	pin: 1111
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [ 5000, 3400, -150, -790, -3210, -1000, 8500, -30 ],
	interestRate: 1.5,
	pin: 2222
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [ 200, -200, 340, -300, -20, 50, 400, -460 ],
	interestRate: 0.7,
	pin: 3333
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [ 430, 1000, 700, 50, 90 ],
	interestRate: 1,
	pin: 4444
};

const accounts = [ account1, account2, account3, account4 ];

const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];
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
