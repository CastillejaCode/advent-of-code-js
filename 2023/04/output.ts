import text from './input.txt';

function parseText(arr: string) {
	const stuff = arr.split('\n').map((x) =>
		x
			.split(': ')
			.slice(1)
			.join('')
			.split(' | ')
			.map((x) => x.split(' ').map(Number).filter(Boolean))
	);
	return stuff;
}

function calculatePoints(arr: number[][]): number {
	const [firstArr, secondArr] = arr;
	const matches = firstArr.flatMap((x) =>
		secondArr.includes(x) ? x : []
	).length;
	return matches;
}

function addPoints(arr: number[][][]) {
	const correctPoints = (arr: number[][]) =>
		Math.floor(2 ** (calculatePoints(arr) - 1));
	return arr.reduce((sum, add) => sum + correctPoints(add), 0);
}
const arr = parseText(text);
const firstResult = addPoints(arr);
console.log('Part 1: ', firstResult);

// Second Part //

function recursive(arr: number[][][], index: number) {
	let score = 1;
	let points = calculatePoints(arr[index]);
	if (!points) return 1;

	const nextArr = Array.from({ length: points }, (_x, i) => index + i + 1);
	nextArr.forEach((x) => (score += recursive(arr, x)));
	return score;
}

function addScratchCards(arr: number[][][]) {
	return arr.reduce((sum, _add, i) => sum + recursive(arr, i), 0);
}

const secondResult = addScratchCards(arr);
console.log('Part 2: ', secondResult);
