import { swap } from '../algorithms/sorting/swap'

class Node {
  value: number | string
  priority: number
}

class PriorityQueue {
  private _values: Node[] = []

  public get values(): Node[] {
    return this._values
  }

  public get length(): number {
    return this._values.length
  }

  public enqueue(node: Node): Node[] {
    let nodeIndex = this._values.push(node) - 1
    let parentIndex = Math.floor((nodeIndex - 1) / 2)

    while (nodeIndex > 0) {
      parentIndex = Math.floor((nodeIndex - 1) / 2)

      if (
        this._values[parentIndex].priority <= this._values[nodeIndex].priority
      )
        break
      else swap(this._values, parentIndex, nodeIndex)

      nodeIndex = parentIndex
    }

    return this._values
  }

  public dequeue(): Node {
    swap(this._values, 0, this.length - 1)
    const root = this._values.pop()
    if (!root) return null

    this.sinkDown()

    return root
  }

  public sinkDown() {
    const e = this._values[0]
    const length = this.length

    let idx = 0

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild: Node,
        rightChild: Node,
        hasSwapped = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < e.priority) {
          hasSwapped = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (!hasSwapped && rightChild.priority < e.priority) ||
          (hasSwapped && rightChild.priority < leftChild.priority)
        )
          hasSwapped = rightChildIdx
      }

      if (!hasSwapped) break
      swap(this._values, hasSwapped, idx)
      idx = hasSwapped
    }
  }
}

const heap = new PriorityQueue()

console.log(heap.enqueue({ value: 'headache', priority: 5 }))
console.log(heap.enqueue({ value: 'broken leg', priority: 1 }))
console.log(heap.enqueue({ value: 'finger cut', priority: 3 }))
console.log(heap.enqueue({ value: 'heart disease', priority: 0 }))

console.log(heap.dequeue())
console.log(heap.dequeue())
console.log(heap.values)
