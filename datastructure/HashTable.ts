class HashTable {
  private _keyMap: string[][][]

  constructor(public size = 53) {
    this._keyMap = new Array(size)
  }

  public hash(key: string): number {
    const PRIME = 31
    let total = 0

    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.size
    }

    return total
  }

  public set(key: string, value: string) {
    const index = this.hash(key)
    if (!this._keyMap[index]) this._keyMap[index] = []
    this._keyMap[index].push([key, value])
  }

  public get(key: string): string | undefined {
    const hashed = this.hash(key)
    return this._keyMap[hashed]?.find((hashedKey) => hashedKey[0] === key)[1]
  }

  public keys(): string[] {
    const keys = this._keyMap.flat().map((keyValue) => keyValue[0])
    return keys
  }

  public values(): string[] {
    const values = this._keyMap.flat().map((keyValue) => keyValue[1])

    return [...new Set(values)]
  }
}

const hashTable = new HashTable(3)

hashTable.set('red', '#ff0000')
hashTable.set('blue', '#0000ff')
hashTable.set('green', '#00ff00')

console.log(hashTable.keys())
console.log(hashTable.values())
