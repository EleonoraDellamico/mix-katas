let values = [ 3, 8, 9, 2, 10, 8, 5, 10, 2, 3 ];
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;
console.log(lowMiddle);
console.log(highMiddle);
console.log(median);
