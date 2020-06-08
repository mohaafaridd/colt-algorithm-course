import { swap } from './swap'

const sort = (array: number[]) => {
	for (let i = 1; i < array.length; i++) {
		let comparingIndex = i
		let value = array[i]
		let scout = undefined

		for (let j = i - 1; j > -1; j--) {
			if (array[comparingIndex] < array[j]) {
				swap(array, comparingIndex, j)
				comparingIndex = j
			}
		}
	}
	return array
}

console.log(sort([2, 1, 9, 76, 4]))
