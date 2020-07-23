import { swap } from '../algorithms/sorting/swap'

class MaxBinaryHeap {
  private _values: number[] = []

  public get values(): number[] {
    return this._values
  }

  public insert(value: number) {
    let valueIndex = this._values.push(value) - 1
    let parentIndex = Math.floor((valueIndex - 1) / 2)

    while (valueIndex > 0) {
      parentIndex = Math.floor((valueIndex - 1) / 2)

      if (this._values[parentIndex] >= this._values[valueIndex]) break

      swap(this._values, parentIndex, valueIndex)
      valueIndex = parentIndex
    }

    return this._values
  }

  public extractMax() {
    swap(this._values, 0, this._values.length - 1)
    const root = this._values.pop()

    if (!root) return null

    this.sinkDown()

    return root
  }

  public sinkDown() {
    const ELEMENT = this._values[0]
    const LENGTH = this._values.length

    let idx = 0

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2

      let rightChild, leftChild
      let hasSwapped = null

      if (leftChildIdx < LENGTH) {
        leftChild = this._values[leftChildIdx]
        if (leftChild > ELEMENT) {
          hasSwapped = leftChildIdx
        }
      }

      if (rightChildIdx < LENGTH) {
        rightChild = this._values[rightChildIdx]
        if (
          (!hasSwapped && rightChild > ELEMENT) ||
          (hasSwapped && rightChild > leftChild)
        ) {
          hasSwapped = rightChildIdx
        }
      }

      if (!hasSwapped) break

      swap(this._values, hasSwapped, idx)
      idx = hasSwapped
    }
  }
}

const heap = new MaxBinaryHeap()
 
console.log(heap.insert(1))
console.log(heap.insert(2))
console.log(heap.insert(3))
console.log(heap.insert(4))
console.log(heap.insert(5))
console.log(heap.insert(5))
console.log(heap.insert(20))

console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())

console.log(heap.values)

console.log(heap.insert(20))
console.log(heap.insert(30))
console.log(heap.insert(50))
