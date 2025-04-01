//ex1
function rectangleArea(a, b) {
	return a * b;
}
console.log(rectangleArea(10, 5)); // Output attendu : 50

//ex2
function capitalizeWord(text) {
	return text.toUpperCase();
}
console.log(capitalizeWord("javascript")); // Output attendu : "JAVASCRIPT"

//ex3
function isDivisibleBy3And5(a) {
	if (a % 3 == 0 && a % 5 == 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isDivisibleBy3And5(15)); // Output attendu : true

//ex4
function reverseString(text) {
	let tab = [];
	for (let i = 0; i < text.length; i++) {
		tab[i] = text[i];
	}
	return tab.reverse().join("");
}
console.log(reverseString("hello")); // Output attendu : "olleh"

//ex5
function printNumbers(n) {
	for (let i = 1; i <= n; i++) {
		console.log(i);
	}
}
printNumbers(5); // Output attendu : 1, 2, 3, 4, 5

//ex6
function printMultiples(n) {
	for (let i = 1; i < n; i++) {
		if (i % 3 == 0) {
			console.log(i);
		}
	}
}
printMultiples(10); // Output attendu : 3, 6, 9

//ex7
function isPalindrome(text) {
	let tab = [];
	for (let i = 0; i < text.length; i++) {
		tab[i] = text[i];
		if (tab[i] == text[i]) {
			return true;
		} else {
			return false;
		}
	}
}
console.log(isPalindrome("radar")); // Output attendu : true

//ex8
function ajouterPrefixe(text) {
	let tab = ["M./Mme "];
	for (let i = 0; i < text.length; i++) {
		tab[i] = tab + text[i];
	}
	return tab;
}

console.log(ajouterPrefixe(["Alice", "Bob"])); // Résultat attendu : ["M./Mme Alice", "M./Mme Bob"]

//ex9
function filtrerElevesGrand(info) {
	let resultat = [];
	for (let i = 0; i < info.length; i++) {
		if (info[i].age > 10) {
			resultat[i] = info[i];
		}
	}
	return resultat;
}

console.log(
	filtrerElevesGrand([
		{ nom: "Alice", age: 15 },
		{ nom: "Bob", age: 8 },
		{ nom: "Charlie", age: 12 },
	])
);
// Résultat attendu : [{nom: "Alice", age: 15}, {nom: "Charlie", age: 12}]

//ex10
function genererDescriptions(info) {
	let resultat = [];
	for (let i = 0; i < info.length; i++) {
		resultat[i] = info[i].nom + " a " + info[i].age + " ans";
	}
	return resultat;
}

console.log(
	genererDescriptions([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
);
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]
