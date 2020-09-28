# Recall that breadth-first search allows you to find the shortest path to X
# Dijkstra's algorithm allows you to find the fastest path to x

# Dijkstra's algorithm steps
#   1. Find the "cheapest" node - the cost of travelling to x
#   2. Update the costs of the neighbours of this node
#   3. Repeat until this has been done for every node in the graph
#   4. Calculate the final path

# In Dijkstra's algorithm, each edge in the graph has a weight
#   - In an unweighted graph, calculate the shortest path using breadth-first search
#   - In a weighted graph, use Dijkstra's algorithm
#       - Graphs can also have cycles
#       - Recall that an undirected graph means that both nodes point at each other
#       - With an undirected graph, each edge adds another cycle
#       - Dijkstra's algorithm only works with directed acyclic graphs (DAG)

# Caveats
#   - Negative-weighted edges breaks Dijkstra's algorithm
#   - Find the shortest path in a graph with negative-weighted edges using Bellman-Ford's algorithm

# Djikstra's Algorithm Implemnentation
#   - Setup
#       - Hash table for graph (start/A/B/finish node neighbours)
#       - Hash table for costs of each node (if cost is unknown, it is infinity)
#       - Hash table for parents of each node
#       - Array to keep track of processed nodes
#   - Algorithm Explanation
#       - While there are nodes to process
#       - Grab node closest to start
#       - Update costs for its neighbours
#       - If any of neighbours costs were updated, update the parents too
#       - Mark this node as processed
#       - Repeat cycle until there are no nodes left to process

graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["finish"] = 1
graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["finish"] = 5
graph["finish"] = {}

infinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["finish"] = infinity

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["finish"] = None

processed = []

def find_lowest_cost_node(costs):
    lowest_cost = float("inf")
    lowest_cost_node = None
    for node in costs:
        cost = costs[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node

node = find_lowest_cost_node(costs)
while node is not None:
    cost = costs[node]
    neighbors = graph[node]
    for n in neighbors.keys():
        new_cost = cost + neighbors[n]
        if costs[n] > new_cost:
            costs[n] = new_cost
            parents[n] = node
    processed.append(node)
    node = find_lowest_cost_node(costs)


