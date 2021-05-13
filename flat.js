//FLAT and FLATMAP
const arrF = [ [ 1, 2, 3 ], [ 4, 5, 6 ], 7, 8 ];
console.log(arrF.flat()); //only one level nested

const arrDeep = [ [ [ 1, 2 ], 3 ], [ 4, [ 5, 6 ] ], 7, 8 ];
console.log(arrDeep.flat()); //doesn't work
console.log(arrDeep.flat(2)); //here ok
