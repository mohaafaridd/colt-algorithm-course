const merge = (first: number[], second: number[]) => {
	const merged = []

	let firstScout = 0
	let secondScout = 0

	while (firstScout < first.length && secondScout < second.length) {
		const firstElement = first[firstScout]
		const secondElement = second[secondScout]

		if (firstElement < secondElement) {
			merged.push(firstElement)
			firstScout++
		} else {
			merged.push(secondElement)
			secondScout++
		}
	}

	while (firstScout < first.length) {
		merged.push(first[firstScout])
		firstScout++
	}

	while (secondScout < second.length) {
		merged.push(second[secondScout])
		secondScout++
	}

	return merged
}

const mergeSort = (array: number[]) => {
	if (array.length <= 1) return array
	const mid = Math.floor(array.length / 2)

	const left = mergeSort(array.slice(0, mid))
	const right = mergeSort(array.slice(mid))

	return merge(left, right)
}

console.log(mergeSort([55, 72, 30, 15, 97, 35, 42, 1, 82, 101]))
