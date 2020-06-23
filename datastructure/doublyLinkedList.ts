export class Node<T> {
  public next: Node<T> = null
  public prev: Node<T> = null
  constructor(public value: T) {}
}

export class DoublyLinkedLis<T> {
  private _length = 0
  private _head: Node<T> = null
  private _tail: Node<T> = null

  public get length(): number {
    return this._length
  }

  public push(value: T) {
    const node = new Node(value)

    if (!this._head) {
      this._head = node
    } else {
      this._tail.next = node
      node.prev = this._tail
    }

    this._length++
    this._tail = node

    return this
  }

  public pop() {
    if (!this._head) return undefined

    const tail = this._tail

    if (this._length === 1) {
      this._head = null
      this._tail = null
    } else {
      const newTail = this._tail.prev
      this._tail.prev = null
      this._tail = newTail
      this._tail.next = null
    }

    this._length--
    return tail
  }

  public shift() {
    if (!this._head) return undefined
    const oldHead = this._head

    if (this.length === 1) {
      this._head = null
      this._tail = null
    } else {
      this._head = oldHead.next
      this._head.prev = null
      oldHead.next = null
    }

    this._length--
    return oldHead
  }

  public unshift(value: T) {
    const node = new Node(value)

    if (!this._head) {
      this._head = node
      this._tail = node
    } else {
      this._head.prev = node
      node.next = this._head
      this._head = node
    }

    this._length++
    return this
  }
}

const list = new DoublyLinkedLis<number>()

list.push(1)
list.push(2)
list.push(3)
list.shift()
list.unshift(5)
console.log(list)
