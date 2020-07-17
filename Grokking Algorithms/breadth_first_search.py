# Breadth-first search (BFS): a graph algorithm to find the shortest path b/w 2 nodes

# Breath-first search answers 2 questions:
#   - Is there a path from node A to node B?
#   - What is the shortest path from node A to node B?

# Example Use Case
#   - Checkers AI to calculate fewest moves to victory
#   - Spell chcker (fewest misspelling to real world)
#   - Find closest doctor in network

# Graph
#   - Models a set of connections
#   - Comprised of nodes and edge
#   - A node directly connected to another node is called its neighbor

# BFS Example: mango seller in network
#   - You are looking for a mango seller
#   - Make a list of friends and iterate through each friend checking if they sell mangos
#   - If they do, you have found a mango seller
#   - If they do not, search through your friend's friends
#   - Repeat cycle until entire network is visited
#   - Implemented with a queue (people must be searched in the order they're added)

# Queues
#   - Similar to stacks, no random access
#   - Operations
#       - Enqueue: add item to end of queue
#       - Dequeue: take off item at front of queue
#   - Considered a FIFO data structure (first in, first out)\

# Graph Implementation (represent nodes as hash tables)
from collections import deque
graph = {}
graph["you"] = ["alice", "bob", "claire"]  # Array of your neighbors
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

# Directed graph: has arrows, one way relationship
# Undirect graph: no arrows, two way relationship

# BFS Implementation
#   1. Keep queue containing people to check
#   2. Pop person off queue
#   3. Check if person is a mango seller
#       - a. Yes, you're done
#       - b. No, add all their neighbors to the queue
#   4. Loop
#   5. If queue is empty, no manager sellers in network



def search(name):
    search_queue = deque()
    search_queue += graph["you"]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:            
            if person_is_seller(person):
                print(person + " is a mango seller!")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False

def person_is_seller(name):
    return name[-1] == 'm'

search("you")

# BFS Runtime
#   - Enqueue takes constant time, O(1)
#   - Doing this for every person takes O(n)
#   - BFS takes O(V+E) where
#       - V = # of people
#       - O = # of edges

# Tree: special type of graph where no edges ever point back