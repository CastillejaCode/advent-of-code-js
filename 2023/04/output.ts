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
	const matches =
		firstArr.flatMap((x) => (secondArr.includes(x) ? x : [])).length - 1;
	const points = Math.floor(2 ** matches);
	return points;
}

function addPoints(arr: number[][][]) {
	return arr.reduce((sum, add) => sum + calculatePoints(add), 0);
}
const arr = parseText(text);
const firstResult = addPoints(arr);
console.log(firstResult);
