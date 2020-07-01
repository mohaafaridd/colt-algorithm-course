export class Node<T> {
  public next: Node<T> = null
  constructor(public value: T) {}
}

class Stack<T> {
  private _size = 0
  private _first: Node<T> = null
  private _last: Node<T> = null

  public push(value: T) {
    const node = new Node(value)
    if (!this._first) {
      this._first = node
      this._last = node
    } else {
      const temp = this._first
      this._first = node
      this._first.next = temp
    }

    return ++this._size
  }

  public pop() {
    if (!this._first) return null

    const temp = this._first

    if (this._first === this._last) {
      this._last = null
    }

    this._first = this._first.next

    this._size--
    return temp.value
  }
}

const stack = new Stack<number>()

console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.pop())

console.log(stack)
