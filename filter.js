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
