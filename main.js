// do proměnné si uložíme prvek ve stránce,
// kam budeme vypisovat výsledek
const vysledek = document.querySelector('#vysledek');

// ihned po načtení stránky zavoláme funkci,
// která přečte hodnotu z Local Storage a zobrazí ji
nactiHodnotu();


// funkce pro načtení a zobrazení hodnoty z Local Storage
function nactiHodnotu() {
	// načteme z local storage
	let hodnota = localStorage.getItem('mojehodnota');

	if (hodnota === null || hodnota === undefined) {
		// hodnota nexistuje, vypíšeme chybu
		vysledek.textContent = 'V local storage nexistuje "mojehodnota".';
	} else {
		// hodnota existuje
		vysledek.textContent = hodnota;
	}
}


// funkce pro uložení hodnoty do local storage
function ulozHodnotu() {
	// hodnotu načteme z pole formuláře
	let hodnota = document.querySelector('#hodnota').value;

	// a uložíme do local storage pod jménem "mojehodnota"
	localStorage.setItem('mojehodnota', hodnota);

	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	nactiHodnotu();
}



// funkce pro smazání hodnoty z local storage
function smazatHodnotu() {
	// smažeme hodnotu uloženou pod jménem "mojehodnota",
	// pokud takový klíč neexistuje, nestane se nic
	localStorage.removeItem('mojehodnota');

	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	nactiHodnotu();
}