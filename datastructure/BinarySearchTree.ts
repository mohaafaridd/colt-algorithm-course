class Node<T> {
  public left: Node<T> = null
  public right: Node<T> = null
  constructor(public value: T) {}
}

class BinarySearchTree {
  private _root: Node<number> = null

  public insert(value: number) {
    const newNode = new Node(value)

    if (!this._root) {
      this._root = newNode
      return this
    }

    let current = this._root

    while (true) {
      if (value === current.value) return undefined

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }
}

const tree = new BinarySearchTree()

console.log(tree.insert(50))
console.log(tree.insert(40))
console.log(tree.insert(30))
console.log(tree.insert(60))
console.log(tree.insert(69))
console.log(tree.insert(60))
