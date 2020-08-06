import { PriorityQueue } from './PriorityQueue'

export interface Target {
  node: string
  weight: number
}
export type AdjacencyList = { [key: string]: Target[] }

class WeightedGraph {
  private _adjacencyList: AdjacencyList = {}

  addVertex = (vertex: string) => {
    if (!this._adjacencyList[vertex]) {
      this._adjacencyList[vertex] = []
    }
  }

  addEdge = (v1: string, v2: string, weight: number = 0) => {
    this._adjacencyList[v1].push({
      node: v2,
      weight,
    })

    this._adjacencyList[v2].push({
      node: v1,
      weight,
    })
  }

  shortestPath = (start: string, destination: string): string[] => {
    const nodes = new PriorityQueue()
    const distances: { [key: string]: number } = {}
    const previous: { [key: string]: string } = {}
    const path: string[] = []

    for (const vertex in this._adjacencyList) {
      previous[vertex] = null
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue({ value: vertex, priority: 0 })
      } else {
        distances[vertex] = Infinity
        nodes.enqueue({ value: vertex, priority: Infinity })
      }
    }

    while (nodes.length) {
      const popped = nodes.dequeue().value as string
      if (popped === destination) {
        let current = popped
        while (previous[current]) {
          path.push(current)
          current = previous[current]
        }

        path.push(start)
        break
      }

      const neighbors = this._adjacencyList[popped]

      for (const index in neighbors) {
        let neighbor = neighbors[index]
        const candidate = distances[popped] + neighbor.weight

        if (candidate < distances[neighbor.node]) {
          distances[neighbor.node] = candidate
          previous[neighbor.node] = popped
          nodes.enqueue({ value: neighbor.node, priority: candidate })
        }
      }
    }

    return path.reverse()
  }
}

const graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('E', 'D', 3)
graph.addEdge('E', 'F', 1)
graph.addEdge('D', 'C', 2)
graph.addEdge('D', 'F', 1)
graph.addEdge('F', 'C', 4)

console.log(graph.shortestPath('A', 'F'))
