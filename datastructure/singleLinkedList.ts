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

  public get = (index: number) => {
    if (index >= this._length || index < 0) return null
    let counter = 0
    let current = this._head
    while (counter < index) {
      current = current.next
      counter++
    }

    return current
  }

  public set = (index: number, value: T) => {
    const node = this.get(index)
    if (!node) return false
    node.value = value
    return true
  }

  public insert = (index: number, value: T) => {
    if (index === 0) return !!this.unshift(value)
    else if (index === this.length) return !!this.push(value)

    const pre = this.get(index - 1)
    if (!pre) return false

    const node = new Node(value)

    const tempoNext = pre.next
    node.next = tempoNext
    pre.next = node
    this._length++
    return true
  }

  public remove = (index: number) => {
    if (index === 0) return !!this.shift()
    else if (index === this.length - 1) return !!this.pop()

    const current = this.get(index)
    if (!current) return false

    const pre = this.get(index - 1)
    if (!pre) return false

    pre.next = current.next
    this._length--
    return current.value
  }

  public list = () => {
    let current = this._head
    const arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }

    console.log('arr', arr)
  }

  public reverse = () => {
    let node = this._head
    this._head = this._tail
    this._tail = node

    let prev = null
    let next = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }
}

const list = new SingleLinkedList<number>()

list.push(1)
list.push(2)
list.push(3)
list.push(8)

list.list()

list.reverse()

list.list()
