//SORTING
const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300 ];
//return < 0 A,B (keep order)
//return  > 0 B,A (switch order)

//ASCENDING
movements.sort((a, b) => a - b);
console.log(movements); //DESCENDING
/* {
	if(a > b)
	return 1; 
	if(a < b)
	return -1;
}); 
console.log(movements);
 */ movements.sort((a, b) => b - a);
/* {
	if(a > b)
	return -1; 
	if(a < b)
	return 1;
});  */
console.log(movements);
