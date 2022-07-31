class Graph {

    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.adjacencyList = new Map(); //Maps vertice to an array of adjacent nodes
    }

    addVertex(v) {
        this.adjacencyList.set(v, []);
    }

    addEdge(v, w) {
        this.adjacencyList.get(v).push(w);
        this.adjacencyList.get(w).push(v);
    }

    bfs(startingNode) {
        console.log("bfs")
        let visited = {};
        let queue = [];
        visited[startingNode] = true;
        queue.unshift(startingNode);
        console.log(queue)
        while (queue.length !== 0) {
            let currentNode = queue.pop();
            let currentNodeAdjList = this.adjacencyList.get(currentNode);
            console.log(currentNodeAdjList);
            for (let edge in currentNodeAdjList) {
                console.log(edge);
                if (!visited[currentNodeAdjList[edge]]) {
                    visited[currentNodeAdjList[edge]] = true;
                    queue.unshift(currentNodeAdjList[edge]);
                }
            }
        }
    }

    printGraph() {
        var graphKeys = this.adjacencyList.keys();
        for (let key of graphKeys) {
            let values = this.adjacencyList.get(key);
            let stringValues = "";
            for (let value of values) {
                stringValues += value + "";
            }
            console.log(key + " ---> " + stringValues);
        }
    }
}

var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
g.bfs('A');
