//What is the output?
let hero = {
	_name: 'Eli',
	getSecretIdentity: function() {
		return this._name;
	}
};
let getTheIdentity = hero.getSecretIdentity;
console.log(getTheIdentity());
console.log(hero.getSecretIdentity());
