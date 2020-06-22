export class Node<T> {
  public next: Node<T> = null
  constructor(public value: T) {}
}

export class SingleLinkedList<T> {
  private _length = 0
  private _head: Node<T> = null
  private _tail: Node<T> = null

  public get length(): number {
    return this._length
  }

  public push = (value: T) => {
    const node = new Node(value)
    if (!this._head) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }
    this._length++
    return this
  }

  public pop = () => {
    if (!this._head) return undefined
    if (this._length === 1) {
      const head = this._head
      this._head = null
      this._tail = null
      this._length--
      return head
    }

    let current = this._head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this._tail = newTail
    this._tail.next = null
    this._length--

    return current
  }

  public shift = () => {
    if (!this._head) return undefined

    const oldHead = this._head
    this._head = oldHead.next
    this._length--
    if (this._length === 0) {
      this._tail = null
    }
    return oldHead
  }

  public unshift = (value: T) => {
    const newHead = new Node(value)
    if (!this._head) {
      this._head = newHead
      this._tail = newHead
    } else {
      newHead.next = this._head
      this._head = newHead
    }
    this._length++
    return this
  }
}

const list = new SingleLinkedList<number>()

list.push(1)
list.push(2)
list.shift()
list.unshift(7)
// console.log(list.shift())
console.log('list', list)
// console.log(list.pop())
// console.log(list.pop())
