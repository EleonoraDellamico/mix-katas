//changed euro to USD with Map
const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
	return mov * eurToUsd;
});

//map with arrow function
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

//hanged euro to USD with for of

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const changedUSD = movements.forEach(function(mov, i, arr) {
	return mov * eurToUsd;
});
console.log(movements);
console.log(changedUSD);

//using map and for Each

const movementsDescriptions = movements.map((mov, i, arr) => {
	if (mov > 0) {
		return `Movement ${i + 1}: your deosited is ${mov} `;
	} else {
		return `Movement ${i + 1}: your withdrew is ${Math.abs(mov)} `;
	}
});
console.log(movementsDescriptions);

//did an arrow function

const movementsDescriptions = movements.map(
	(mov, i, arr) => ` Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
