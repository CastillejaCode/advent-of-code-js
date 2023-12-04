import text from './input.txt';
const arr = text.split('\n');

// Reverse each array
function reverseArr(arr: string[]) {
	return Array.from(arr, (x) => [...x].toReversed());
}

function getBox(coord: [number, number]) {
	const [yCoord, xCoord] = coord;
	const axes = [-1, 0, 1];

	const box = [];
	for (const y of axes) {
		for (const x of axes) {
			box.push([yCoord + y, xCoord + x]);
		}
	}
	return box;
}

// Count around, check if symbol or number
function countAround(arr: string[], coord: [number, number]) {
	const box = getBox(coord);
	const results = box.map(([y, x]) =>
		!arr[y] || !arr[y][x] ? '.' : arr[y][x]
	);
	return {
		numberNext: Number.isInteger(Number(results[5])),
		symbol: results.some((e) => /[^\d.]/g.test(e)),
	};
}

// If number, keep going and save state
function findNumber(arr: string[]) {}

// Get block around number

//Check for symbols

//Do for every number

//Add them up

console.log(countAround(arr, [0, 1]));
