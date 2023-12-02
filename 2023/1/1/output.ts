import text from './input.txt';
const arr = text.split('\n');

function getNumber(string: string, regexp: RegExp): number {
	const arr = string.match(regexp);
	const numbers = [arr?.at(0), arr?.at(-1)].join('');
	return Number(numbers);
}

function addNumbers(arr: string[], regexp: RegExp) {
	return arr.reduce((sum, element) => sum + getNumber(element, regexp), 0);
}

const firstRegexp = new RegExp(/\d/g);
const firstResult = addNumbers(arr, firstRegexp);
console.log('First Answer = ' + firstResult);

// const secondResult = addNumbers(arr);
// console.log('Second Answer = ' + secondResult);
