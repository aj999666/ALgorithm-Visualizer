const pathData = [
  {
    title: "Djikstra's Algorithm",
    list: [
      "The algorithm starts at the root node. Each node has a cost attached to it, cost meaning what did it cost (how much distance) for us to get to that node.",
      "The root node always has a cost of zero, because it cost us nothing to get there.",
      "Initially, all the other nodes in the grid have a cost of Infinity. Because, we don’t know their cost until we actually get there. So it might not be even possible to reach to a node.",
    ],
  },
  {
    title: "Djikstra's Algorithm",
    list: [
      "Then, we start visiting each node that is connected to the root node, and store them in a priority queue. Once all the nodes connected with the root node are added, we move towards the next step.",
      "Next, we get the first node from the priority queue. Keep in mind, that priority queue is aligned in a way that the node with the minimum cost is the first element.",
      "At the end, when the target node is reached, we traverse back through the stored previous node and hence, the shortest path is achieved.",
    ],
  },
  {
    title: "A* Search",
    list: [
      "A* Search, it is an extension of Djikstra’s algorithm with a few modifications.",
      "A* Search knows the distance cost to the target node. Therefore, it is very fast compared to Dijkstra’s algorithm because it searches only in the direction of the target node.",
      "The algorithm is the same, the only difference being that each node in the grid now contains an extra property which is the distance to the final node.",
    ],
  },
  {
    title: "A* Search",
    list: [
      "A* does exactly the same as Dijkstra’s algorithm, visiting each node and adding it to a priority queue, the only modification is that the node at the top of the priority queue is the node which has the shortest distance cost + the cost to the final node from that node.",
      "In this way, the nodes the nodes that are far away from the target are penalised.",
    ],
  },
];

export default pathData;
