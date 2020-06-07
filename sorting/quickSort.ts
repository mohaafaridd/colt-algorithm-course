import { swap } from './swap'

const pivot = (
	array: number[],
	start: number = 0,
	end: number = array.length + 1
) => {
	let pivot = array[start]
	let swapIndex = start

	for (let i = start + 1; i < array.length; i++) {
		if (pivot > array[i]) {
			swapIndex++
			swap(array, swapIndex, i)
		}
	}

	swap(array, start, swapIndex)
	return swapIndex
}

const quickSort = (
	array: number[],
	left: number = 0,
	right: number = array.length - 1
) => {
	if (left < right) {
		let pivotIndex = pivot(array, left, right)

		quickSort(array, left, pivotIndex - 1)
		quickSort(array, pivotIndex + 1, right)
	}
	return array
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))
