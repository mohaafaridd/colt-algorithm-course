const getDigit = (number: number, position: number) =>
	Math.floor(Math.abs(number) / Math.pow(10, position)) % 10

const digitCount = (num: number) =>
	num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

const mostDigits = (numbers: number[]) =>
	numbers.reduce((acc, current) => Math.max(acc, digitCount(current), 0))

const radixSort = (numbers: number[]) => {
	let maxDigitCount = mostDigits(numbers)
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, (): number[] => [])

		for (let i = 0; i < numbers.length; i++) {
			digitBuckets[getDigit(numbers[i], k)].push(numbers[i])
		}

		numbers = digitBuckets.flat()
	}

	return numbers
}

console.log(radixSort([69, 78, 21, 748, 410, 39, 87, 11, 54, 912, 1024, 0]))
