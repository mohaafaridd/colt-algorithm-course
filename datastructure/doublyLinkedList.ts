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
}
