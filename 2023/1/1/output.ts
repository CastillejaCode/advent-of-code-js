import text from './input.txt';
const arr = text.split('\n');

function getNumber(string: string): number {
	const arr = Array.from(string);
	const firstNumber = arr.find((x) => Number.isInteger(Number(x)));
	const secondNumber = arr.findLast((x) => Number.isInteger(Number(x)));

	if (typeof firstNumber !== 'string' || typeof secondNumber !== 'string')
		throw new Error('You must have copied something wrong.');
	return Number(firstNumber + secondNumber);
}

function addNumbers(arr: string[]) {
	return arr.reduce((sum, element) => sum + getNumber(element), 0);
}

const result = addNumbers(arr);
console.log(result);
