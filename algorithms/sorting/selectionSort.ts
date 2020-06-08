import { swap } from './swap'

const sort = (array: number[]) => {
	for (let i = 0; i < array.length; i++) {
		let noSwaps = true
		let minIndex = i

		for (let j = i + 1; j < array.length; j++) {
			if (array[minIndex] > array[j]) minIndex = j
		}

		if (minIndex !== i) {
			swap(array, i, minIndex)
			noSwaps = false
		}

		if (noSwaps) break
	}

	return array
}

const array = [34, 22, 10, 19, 17]
console.log('sort(array)', sort(array))
