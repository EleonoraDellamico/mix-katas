const arrayVocales = [ 'a', 'e', 'i', 'o', 'u' ];
const sufijoAleman = 'ujem';
const sufijoBulgaro = 'kov';
function traducirPalabra(string = '', idiom = 0) {
	// evaluar si acaba en vocal o consonante.
	const ultimaletra = string[string.length - 1].toLowerCase();
	const vocaloConsonante = arrayVocales.indexOf(ultimaletra);
	// hacemos la logica en funcion de ello
	if (!string) {
		console.warn(`no hay ninguna palabra a traducir`);
	}
	if (idiom == 1) {
		if (vocaloConsonante === 0) {
			//PARA VOCAL (Quitar vocal y añadir sufijo "ujem")
			const subcadena = string.substring(0, string.length - 1);
			const traduccionAlemanV = subcadena.concat(sufijoAleman);
			console.log(`La palabra ${string} en aleman es ${traduccionAlemanV}`);
		} else {
			//PARA CONSONANTE (quitar los dos ultimos caracteres y añadir sufijo "ujem")
			const subcadenaConsonante = string.substring(0, string.length - 2);
			const traduccionAlemanC = subcadenaConsonante.concat(sufijoAleman);
			console.log(`La palabra ${string} en aleman es ${traduccionAlemanC}`);
		}
	}
	if (idiom == 2) {
		if (vocaloConsonante === 0) {
			//PARA VOCAL  añadir sufijo "kov")
			const traduccionBulgaroV = string.concat(sufijoBulgaro);
			console.log(`La palabra ${string} en bulgaro es ${traduccionBulgaroV}`);
		} else {
			//PARA CONSONANTE (quitar la ultima letra y añadir sufijo "kov")
			const subcadenaUltimaLetra = string.substring(0, string.length - 1);
			const traduccionBulgaroC = subcadenaUltimaLetra.concat(sufijoBulgaro);
			console.log(`La palabra ${string} en bulgaro es ${traduccionBulgaroC}`);
		}
	}
}
traducirPalabra('camion', 2);
traducirPalabra('silla', 2);
traducirPalabra('', 2);

const terminaEnVocal = (cadena) => {
	//si no hay cadena o está vacia
	if (!cadena || !cadena.length) return false;
	// sacar el ultimo caracter y convertirlo en miniscula
	let ultimoCaracter = cadena[cadena.length - 1].toLowerCase();
	return [ 'a', 'e', 'i', 'o', 'u' ].indexOf(ultimoCaracter) !== -1;
};

//si no hay cadena o está vacia
console.log(terminaEnVocal(''));
console.log(terminaEnVocal('mundo'));
console.log(terminaEnVocal('roller'));
