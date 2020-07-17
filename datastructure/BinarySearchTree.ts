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

  public find(value: number): boolean {
    if (!this._root) return false

    let current = this._root

    while (current) {
      if (current.value === value) return true
      else if (current.value > value) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }
}

const tree = new BinarySearchTree()

tree.insert(50)

tree.insert(30)
tree.insert(20)
tree.insert(40)
tree.insert(10)

tree.insert(70)
tree.insert(60)
tree.insert(80)
tree.insert(90)

console.log('tree.find(10)', tree.find(10))
