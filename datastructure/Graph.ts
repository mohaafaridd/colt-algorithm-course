type AdjacencyList = { [key: string]: string[] }

class Graph {
  private _adjacencyList: AdjacencyList = {}

  public addVertex(name: string) {
    if (!this._adjacencyList[name]) this._adjacencyList[name] = []
  }

  public removeVertex(name: string) {
    const keys = this._adjacencyList[name]

    keys.forEach((key) => this.removeEdge(key, name))

    delete this._adjacencyList[name]
  }

  public addEdge(v1: string, v2: string) {
    this._adjacencyList[v1].push(v2)
    this._adjacencyList[v2].push(v1)
  }

  public removeEdge(v1: string, v2: string) {
    this._adjacencyList[v1] = this._adjacencyList[v1].filter((v) => v !== v2)

    this._adjacencyList[v2] = this._adjacencyList[v2].filter((v) => v !== v1)
  }

  public dfsRecursive(node: string) {
    const order: string[] = []
    const visited: { [key: string]: boolean } = {}

    const dfs = (vertex: string) => {
      const isVisited = !!visited[vertex]
      const unVisited = this._adjacencyList[vertex].filter((n) => !visited[n])

      if (isVisited) return

      order.push(vertex)
      visited[vertex] = true

      unVisited.forEach((n) => dfs(n))
    }

    dfs(node)

    return order
  }

  public dfsIterative(start: string) {
    const stack: string[] = []
    const result: string[] = []
    const visited = {}

    stack.push(start)

    while (stack.length > 0) {
      const popped = stack.pop()
      if (!visited[popped]) {
        visited[popped] = true
        result.push(popped)
        const neighbors = this._adjacencyList[popped]
        stack.push(...neighbors)
      }
    }

    return result
  }

  public bfs(start: string) {
    const stack: string[] = []
    const result: string[] = []
    const visited = {}

    stack.push(start)

    while (stack.length > 0) {
      const popped = stack.shift()
      if (!visited[popped]) {
        visited[popped] = true
        result.push(popped)
        const neighbors = this._adjacencyList[popped]
        stack.push(...neighbors)
      }
    }

    return result
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.bfs('A'))
