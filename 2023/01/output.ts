import text from './input.txt';
const arr = text.split('\n');

const numberMap = new Map([
	['one', '1'],
	['two', '2'],
	['three', '3'],
	['four', '4'],
	['five', '5'],
	['six', '6'],
	['seven', '7'],
	['eight', '8'],
	['nine', '9'],
]);

function getNumber(str: string, regexp: RegExp): number {
	const arr = Array.from(str.matchAll(regexp), (x) => x[1]);

	const firstMatch = arr.at(0);
	const lastMatch = arr.at(-1);

	if (typeof firstMatch !== 'string' || typeof lastMatch !== 'string')
		throw new Error('You messed up somewhere, eh?');

	const convertWord = (str: string) => numberMap.get(str) ?? str;

	return Number(convertWord(firstMatch) + convertWord(lastMatch));
}

function addNumbers(arr: string[], regexp: RegExp) {
	return arr.reduce((sum, element) => sum + getNumber(element, regexp), 0);
}

const firstRegexp = new RegExp('(?=(\\d))', 'g');
const firstResult = addNumbers(arr, firstRegexp);
console.log(firstResult);

const numberString = [...numberMap.keys()].join('|');
const secondRegexp = new RegExp(`(?=(\\d|${numberString}))`, 'g');
const secondResult = addNumbers(arr, secondRegexp);
console.log(secondResult);
