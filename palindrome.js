//Palindrome

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
checkPalindrome('Eleonora');
